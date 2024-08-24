// // hooks/useLenis.js
// import { useEffect } from "react";
// import Lenis from "@studio-freight/lenis";

import { useRef } from "react";
import { useGsap } from "../../lib/util";

// const useLenis = () => {
// 	useEffect(() => {
// 		// Initialize Lenis
// 		const lenis = new Lenis({
// 			duration: 1.2, // Duration of scrolling
// 			easing: (t) => t, // Easing function
// 			smooth: true, // Enable smooth scrolling
// 		});

// 		// Handle the scroll update
// 		function raf(time) {
// 			lenis.raf(time);
// 			requestAnimationFrame(raf);
// 		}
// 		requestAnimationFrame(raf);

// 		// Cleanup function
// 		return () => {
// 			lenis.destroy();
// 		};
// 	}, []);
// };

// export default useLenis;

// import ReactLenis from "@studio-freight/react-lenis";

// export default function Lenis({ children }) {
// 	return (
// 		<ReactLenis
// 			root
// 			options={{
// 				duration: 1.2,
// 				easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
// 			}}
// 		>
// 			{children}
// 		</ReactLenis>
// 	);
// }

// import ReactLenis from "@studio-freight/react-lenis";
// export default function Lenis({ children }) {
// 	const lenisRef = useRef();
// 	const { gsap, useGSAP } = useGsap();

// 	useGSAP(() => {
// 		function update(time) {
// 			lenisRef.current?.lenis?.raf(time * 1000);
// 		}

// 		gsap.ticker.add(update);

// 		return () => {
// 			gsap.ticker.remove(update);
// 		};
// 	});

// 	return (
// 		<ReactLenis ref={lenisRef} autoRaf={false}>
// 			{children}
// 		</ReactLenis>
// 	);
// }

import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScrolling({ children }) {
	return (
		// <ReactLenis root options={{ lerp: 0.5, duration: 1.2, smoothTouch: true }}>
		<ReactLenis
			root
			duration={3.2}
			easing={(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))}
		>
			{children}
		</ReactLenis>
	);
}
