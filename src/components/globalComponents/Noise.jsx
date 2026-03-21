import React, { useEffect, useRef } from "react";

const Noise = () => {
	const canvasRef = useRef(null);
	const frameRef = useRef(0);
	const loopTimeoutRef = useRef();
	const noiseDataRef = useRef([]);
	const resizeThrottleRef = useRef(null);

	const createNoise = (ctx, wWidth, wHeight) => {
		const idata = ctx.createImageData(wWidth, wHeight);
		const data = idata.data;

		for (let i = 0; i < data.length; i += 4) {
			const value = Math.floor(Math.random() * 255);
			data[i] = value; // Red channel
			data[i + 1] = value; // Green channel
			data[i + 2] = value; // Blue channel
			data[i + 3] = Math.floor(Math.random() * 25); // Alpha channel for transparency (0-50)
		}

		noiseDataRef.current.push(idata);
	};

	const paintNoise = (ctx) => {
		if (frameRef.current === 9) {
			frameRef.current = 0;
		} else {
			frameRef.current++;
		}

		ctx.putImageData(noiseDataRef.current[frameRef.current], 0, 0);
	};

	const loop = (ctx) => {
		paintNoise(ctx);

		loopTimeoutRef.current = window.setTimeout(() => {
			window.requestAnimationFrame(() => loop(ctx));
		}, 1000 / 25);
	};

	const setup = () => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const wWidth = window.innerWidth;
		const wHeight = window.innerHeight;

		canvas.width = wWidth;
		canvas.height = wHeight;

		noiseDataRef.current = [];

		for (let i = 0; i < 10; i++) {
			createNoise(ctx, wWidth, wHeight);
		}

		loop(ctx);
	};

	const reset = () => {
		window.addEventListener(
			"resize",
			() => {
				if (resizeThrottleRef.current) {
					window.clearTimeout(resizeThrottleRef.current);
				}

				resizeThrottleRef.current = window.setTimeout(() => {
					if (loopTimeoutRef.current) {
						window.clearTimeout(loopTimeoutRef.current);
					}
					setup();
				}, 200);
			},
			false
		);
	};

	useEffect(() => {
		setup();
		reset();

		return () => {
			if (loopTimeoutRef.current) {
				window.clearTimeout(loopTimeoutRef.current);
			}
			window.removeEventListener("resize", reset);
		};
	}, []);

	return (
		<canvas
			id="noise"
			ref={canvasRef}
			style={{
				display: "block",
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				zIndex: 2100000,
				pointerEvents: "none",
			}}
		/>
	);
};

export default Noise;
