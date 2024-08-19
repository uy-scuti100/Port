<<<<<<< HEAD
import { useState, useEffect } from "react";
import { MdOutlineHome, MdWorkOutline } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";
import { NavLink, useLocation } from "react-router-dom";

const MobileNav = () => {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <div>
      <div className="flex md:hidden justify-between text-[20px] border-t bg-black border-[#000000] fixed -bottom-1 left-0 right-0 z-50 px-4 py-4">
        <NavLink
          to="/"
          // activeClassName="text-white"
          className={`text-${
            activeLink === "/" ? "white" : "brown"
          } flex items-center justify-center flex-col`}
        >
          <div>
            <MdOutlineHome />
          </div>
          <p
            className="
           uppercase text-[10px]"
          >
            home
          </p>
        </NavLink>
        <NavLink
          to="/work"
          // activeClassName="text-white"
          className={`text-${
            activeLink === "/work" ? "white" : "brown"
          } flex items-center justify-center flex-col`}
        >
          <div>
            <MdWorkOutline />
          </div>
          <p
            className="
           uppercase text-[10px]"
          >
            work
          </p>
        </NavLink>

        <NavLink
          to="/about"
          // activeClassName="text-white"
          className={`text-${
            activeLink === "/about" ? "white" : "brown"
          } flex items-center justify-center flex-col`}
        >
          <div>
            <BsPerson />
          </div>
          <p
            className="
           uppercase text-[10px]"
          >
            about
          </p>
        </NavLink>
        <NavLink
          to="/contact"
          // activeClassName="text-white"
          className={`text-${
            activeLink === "/contact" ? "white" : "brown"
          } flex items-center justify-center flex-col`}
        >
          <div>
            <AiOutlinePhone />
          </div>
          <p
            className="
           uppercase text-[10px]"
          >
            contact
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default MobileNav;
=======
import { IoCloseOutline } from "react-icons/io5";
import React, { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../../context/theme";
import { useContext } from "react";
import Grip from "./Grip";
import { links } from "../constants/topLinks";

export default function MobileNav() {
	const { theme } = useContext(ThemeContext);
	const [openNav, setOpenNav] = useState(false);
	const navRef = useRef();
	const tl = useRef();
	// const [activeLink, setActiveLink] = useState("");
	const location = useLocation();

	// useEffect(() => {
	// 	setActiveLink(location.pathname);
	// }, [location]);
	useGSAP(() => {
		tl.current = gsap.timeline({ paused: true });

		tl.current
			.to(navRef.current, {
				duration: 0.5,
				ease: "power4.in",
				clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
				pointerEvents: "all",
			})
			.from(
				".menu__item",
				{
					duration: 1.3,
					x: -100,
					opacity: 0,
					stagger: {
						amount: 0.4,
					},
					ease: "Expo.easeInOut",
				},
				"-=1"
			)
			.from(
				".socials",
				{
					duration: 0.5,
					y: 100,
					opacity: 0,
					stagger: {
						amount: 0.4,
					},
					ease: "Expo.easeOut",
				},
				"-=1"
			);
	}, []);

	const toggleMenuIcon = () => {
		setOpenNav((prev) => !prev);
		if (openNav) {
			tl.current?.reverse();
		} else {
			tl.current?.play();
		}
	};

	return (
		<nav className="fixed bottom-20 right-20 md:hidden z-[900] ">
			<button
				name="mobile-menu-toggle-button"
				className={`text-${theme.text} absolute z-50 flex items-center justify-center w-16 h-16 transition-all duration-700 ease-in-out bg-transparent rounded-full shadow-sm toggle__btn backdrop-blur-xl hover:bg-transparent`}
				onClick={toggleMenuIcon}
			>
				{openNav ? (
					<IoCloseOutline
						className="w-8 h-8 animate__rotateIn"
						// onClick={toggleNavClose}
					/>
				) : (
					<div
						// onClick={toggleNavOpen}
						className="animate__rotateOut"
					>
						<Grip />
					</div>
				)}
			</button>

			<div
				ref={navRef}
				className={`backdrop-blur-2xl  fixed overflow-hidden inset-0 pointer-events-none`}
				style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
			>
				<ul
					className={`text-${theme.text}absolute z-40 flex flex-col gap-12 bottom-32 left-5 group `}
				>
					{links.map((link, index) => {
						const { label, href } = link;
						return (
							<Link
								key={index}
								to={href}
								className={`relative text-4xl font-bold uppercase md:text-3xl  menu__item ${
									location.pathname === href
										? "before:absolute before:top-1/2 before:bg-brown before:w-[50px] before:h-[4px] before:-translate-x-[120%] ml-12"
										: ""
								}`}
							>
								{label}
							</Link>
						);
					})}
				</ul>

				<div className={`text-${theme.text} absolute left-5 bottom-6`}>
					<div className="flex items-center gap-4 text-sm font-bold md:text-xl justify-items-end">
						<Link
							href={"https://www.instagram.com/uy___scuti/"}
							target="_blank"
							className="uppercase socials "
						>
							Instagram
						</Link>
						<Link
							href={"https://x.com/Hussain_Joe"}
							target="_blank"
							className="uppercase socials "
						>
							Twitter
						</Link>

						<Link
							className="uppercase socials"
							href={"https://github.com/uy-scuti100"}
							target="_blank"
						>
							Github
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

{
	/* <Link
							className="uppercase socials "
							href={"https://twitter.com/Osiris_Digital"}
							target="_blank"
						>
							Behance
						</Link> */
}
>>>>>>> 47a0d82 (new change)
