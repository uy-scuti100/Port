import Lenis from "@studio-freight/lenis";
import { createContext, useContext, useState, useEffect, useRef } from "react";
const SmoothScrollContext = createContext();

export const SmoothScrollProvider = ({ children }) => {
	const [lenis, setLenis] = useState(null);
	const pathname = window.location.pathname;

	const lenisRef = useRef(null);

	useEffect(() => {
		if (lenisRef.current) lenisRef.current?.scrollTo(0, { immediate: true });
	}, [pathname]);

	useEffect(() => {
		const newLenis = new Lenis({
			duration: 1.3,
		});
		setLenis(newLenis);

		function raf(time) {
			newLenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);

		return () => {
			newLenis.destroy();
		};
	}, []);

	return (
		<SmoothScrollContext.Provider value={{ lenis }}>
			{children}
		</SmoothScrollContext.Provider>
	);
};

export const useSmoothScroll = () => {
	const context = useContext(SmoothScrollContext);
	if (!context) {
		throw new Error(
			"useSmoothScroll must be used within a SmoothScrollProvider"
		);
	}
	return context;
};
