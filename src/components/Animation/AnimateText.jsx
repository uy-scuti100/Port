// import { useEffect, useRef } from "react";
// import { useGsap } from "../../lib/util";

// const AnimatedText = () => {

//     const { useGSAP, gsap, ScrollTrigger } = useGsap()
//   const textContainerRef = useRef(null);

//   useEffect(() => {
//     // Split text into spans
//     const typeSplit = new SplitType(textContainerRef.current, {
//       types: "words, chars",
//       tagName: "span",
//     });

//     // Function to create ScrollTrigger and link it to timelines
//     function createScrollTrigger(triggerElement, timeline) {
//       // Reset timeline when scroll out of view past bottom of screen
//       ScrollTrigger.create({
//         trigger: triggerElement,
//         start: "top bottom",
//         onLeaveBack: () => {
//           timeline.progress(0);
//           timeline.pause();
//         },
//       });

//       // Play timeline when scrolled into view (60% from top of screen)
//       ScrollTrigger.create({
//         trigger: triggerElement,
//         start: "top 80%",
//         onEnter: () => timeline.play(),
//       });
//     }

//     // Animation for words sliding from right
//     document.querySelectorAll("[words-slide-from-right]").forEach((el) => {
//       let tl = gsap.timeline({ paused: true });
//       tl.from(el.querySelectorAll(".word"), {
//         opacity: 0,
//         x: "1em",
//         duration: 0.8,
//         ease: "power2.out",
//         stagger: { amount: 0.2 },
//       });
//       createScrollTrigger(el, tl);
//     });

//     // Animation for letters sliding down
//     document.querySelectorAll("[letters-slide-down]").forEach((el) => {
//       let tl = gsap.timeline({ paused: true });
//       tl.from(el.querySelectorAll(".char"), {
//         yPercent: -120,
//         duration: 0.4,
//         ease: "power1.out",
//         stagger: { amount: 0.8 },
//       });
//       createScrollTrigger(el, tl);
//     });

//     // Animation with scrub for each word
//     document.querySelectorAll("[scrub-each-word]").forEach((el) => {
//       let tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: el,
//           start: "top 70%",
//           end: "top center",
//           scrub: true,
//         },
//       });
//       tl.from(el.querySelectorAll(".char"), {
//         opacity: 0.2,
//         duration: 1,
//         ease: "power1.out",
//         stagger: { each: 0.7 },
//       });
//     });

//     // Avoid flash of unstyled content
//     gsap.set("[text-split]", { opacity: 1 });

//     // Cleanup function to kill ScrollTrigger instances on component unmount
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const splitIntoCharacters = (text) => {
	return text.split("").map((char, index) => {
		// Return span with character and a key for React
		return (
			<span key={index} className="char">
				{char}
			</span>
		);
	});
};

const AnimatedText = () => {
	const textContainerRef = useRef(null);

	useEffect(() => {
		// Create a wrapper around the text and split into characters
		const container = textContainerRef.current;
		if (container) {
			container.childNodes.forEach((node) => {
				if (node.nodeType === Node.TEXT_NODE) {
					const chars = splitIntoCharacters(node.textContent);
					const span = document.createElement("span");
					span.innerHTML = chars.join("");
					node.replaceWith(span);
				}
			});
		}

		// Function to create ScrollTrigger and link it to timelines
		function createScrollTrigger(triggerElement, timeline) {
			// Reset timeline when scroll out of view past bottom of screen
			ScrollTrigger.create({
				trigger: triggerElement,
				start: "top bottom",
				onLeaveBack: () => {
					timeline.progress(0);
					timeline.pause();
				},
			});

			// Play timeline when scrolled into view (60% from top of screen)
			ScrollTrigger.create({
				trigger: triggerElement,
				start: "top 80%",
				onEnter: () => timeline.play(),
			});
		}

		// Animation for words sliding from right
		document.querySelectorAll("[words-slide-from-right]").forEach((el) => {
			let tl = gsap.timeline({ paused: true });
			tl.from(el.querySelectorAll(".char"), {
				opacity: 0,
				x: "1em",
				duration: 0.8,
				ease: "power2.out",
				stagger: { amount: 0.2 },
			});
			createScrollTrigger(el, tl);
		});

		// Animation for letters sliding down
		document.querySelectorAll("[letters-slide-down]").forEach((el) => {
			let tl = gsap.timeline({ paused: true });
			tl.from(el.querySelectorAll(".char"), {
				yPercent: -120,
				duration: 0.4,
				ease: "power1.out",
				stagger: { amount: 0.8 },
			});
			createScrollTrigger(el, tl);
		});

		// Animation with scrub for each word
		document.querySelectorAll("[scrub-each-word]").forEach((el) => {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					start: "top 70%",
					end: "top center",
					scrub: true,
				},
			});
			tl.from(el.querySelectorAll(".char"), {
				opacity: 0.2,
				duration: 1,
				ease: "power1.out",
				stagger: { each: 0.7 },
			});
		});

		// Avoid flash of unstyled content
		gsap.set("[text-split]", { opacity: 1 });

		// Cleanup function to kill ScrollTrigger instances on component unmount
		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<div ref={textContainerRef}>
			{/* Example of text to be animated */}
			<h1 words-slide-from-right>This is animated text</h1>
			<h2 letters-slide-down>Another animation example</h2>
			<p scrub-each-word>Scrub this text as you scroll</p>
		</div>
	);
};

export default AnimatedText;
