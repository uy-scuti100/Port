import { useGsap } from "../../lib/util";
import { useRef } from "react";

export default function Preloader() {
	const preloaderRef = useRef(null);

	const { useGSAP, gsap } = useGsap();

	useGSAP(() => {
		gsap.to(preloaderRef.current, {
			duration: 0.8,
			delay: 2,
			display: "none",
			opacity: 0,
			ease: "power4.inOut",
		});
		gsap.to(document.body, {
			duration: 3,
			overflow: "hidden",
			onComplete: () => {
				document.body.style.overflow = "auto";
			},
		});

		gsap.to(".dot-one", {
			duration: 0.5,
			translateX: "30px",
			ease: "elastic.inOut",
			borderRadius: "0px",
		});
		gsap.to(".dot-one", {
			duration: 0.5,
			delay: 0.8,
			translateX: "0px",
			borderRadius: "9999px",
			ease: "back.out",
		});
		gsap.to(".dot-two", {
			duration: 0.5,
			translateX: "-30px",
			ease: "elastic.inOut",
			borderRadius: "0px",
		});
		gsap.to(".dot-two", {
			duration: 0.5,
			delay: 0.8,
			translateX: "0px",
			ease: "back.out",
			borderRadius: "9999px",
		});
		gsap.to(".dot-three", {
			duration: 0.8,
			delay: 1.8,
			scale: 120,
			ease: "power4.inOut",
		});
	}, []);
	return (
		<div
			id="preloader"
			ref={preloaderRef}
			className="fixed z-[999] top-0 bottom-0 left-0 right-0 w-full h-full overflow-hidden transition-colors duration-500 ease-in-out bg-black "
		>
			<div className="relative flex items-center justify-center w-full h-full">
				<div className="absolute w-4 h-4 rounded-full dot-one bg-[#f5f5f5] "></div>
				<div className="absolute w-4 h-4 rounded-full dot-two bg-[#f5f5f5]"></div>
				<div className="absolute w-4 h-4 rounded-full dot-three bg-[#f5f5f5]"></div>
			</div>
		</div>
	);
}
