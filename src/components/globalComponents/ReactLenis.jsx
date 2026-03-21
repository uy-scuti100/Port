import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function LenisComponent({ children }) {
	const lenisRef = useRef();

	useEffect(() => {
		function update(time) {
			lenisRef.current?.lenis?.raf(time * 1000);
		}

		gsap.ticker.add(update);

		return () => {
			gsap.ticker.remove(update);
		};
	}, []); // Added an empty dependency array to avoid running this effect on every render

	return (
		<ReactLenis ref={lenisRef} autoRaf={false}>
			{children}
		</ReactLenis>
	);
}
