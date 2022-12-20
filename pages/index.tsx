import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MyName } from "../components/Name";
import { Textt } from "../components/Text";
const Home: NextPage = () => {
	const [fontSize, setFontSize] = useState(4);
	const [show, isShowing] = useState("hidden");
	const [opacity, setOpacity] = useState("opacity-100 flex ");

	function clicker() {
		setTimeout(() => {
			isShowing("flex");
			setOpacity("opacity-0 flex ");
			setTimeout(() => {
				setOpacity("hidden");
			}, 1000);
		}, 10);
	}
	const elementRef = useRef(null);

	useEffect(() => {
		function handleScroll() {
			// Get the current scroll position
			const scrollTop = window.pageYOffset;
			console.log("1s");
			// Calculate the new font size based on the scroll position
			const size = 1 - scrollTop / 1000;
			console.log("2");
			// Update the element's style
			elementRef.current.style.fontSize = `${size}em`;
		}

		// Add the scroll event listener
		window.addEventListener("keydown", handleScroll);

		// Remove the event listener when the component unmounts
		return () => {
			window.removeEventListener("keydown", handleScroll);
		};
	}, []);

	return (
		<>
			<div
				ref={elementRef}
				className="flex h-screen   justify-center gap-10 bg-black  text-center flex-col  w-screen"
			>
				<div className="flex flex-col  gap-2 ">
					<div
						className={`bg-white bg-opacity-90 font-sourceSerif  gap-3  mx-10 text-4xl p-10 rounded-xl top-[20%]  flex-col  duration-1000 fixed z-10  text-center ${opacity} `}
					>
						<p>- HEY THERE -</p>
						<p>
							This site still being maintained /developped therefore please keep in
							mind that some of the features might not work as intended
						</p>
						<p>Thank you for visiting ;)</p>

						<button
							onClick={() => {
								clicker();
							}}
							className=" w-60 bg-green-500 hover:bg-lime-400 bg-opacity-70 duration-500 self-center mt-2 p-2  rounded-xl"
						>
							{" "}
							Lets launch it
						</button>
					</div>
					<Textt ref={elementRef} textDipslay={show} fontSize={fontSize} />
				</div>
			</div>
		</>
	);
};

export default Home;
