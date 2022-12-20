import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import { useEffect, useState } from "react";
import istanbul from "/public/istanbul.jpg";
import panda from "/public/panda.jpg";
export function Textt({ textDipslay = "flex", fontSize }: any) {
	const [isShown, setIsshown] = useState(false);
	const [pic, setPic] = useState(undefined);
	const [hovered, setHovered] = useState(false);

	const placeHolderName = " Muhammed Furkan Ülgen";

	function mouseOn() {
		if (!isShown) {
			setHovered(true);
			//@ts-ignore
			setPic(istanbul);
		}
	}
	console.log("sss", isShown);
	function picc() {
		setIsshown(true);
		const timer = setTimeout(() => {
			setPic(undefined);
			setHovered(false);
		}, 1200);
		return () => clearTimeout(timer);
	}

	function flickerLetter(text: string) {
		return (
			<span
				style={{
					color: `hsla(${Math.random() * 360}, 100%, 80%, 1)`,
					animation: `text-flicker-in-glow ${Math.random() * 4}s linear both `,
				}}
			>
				{text}
			</span>
		);
	}

	function clickHandler(e: any) {
		e.target.style.textShadow = ``;

		e.target.style.animation = "blink 4s infinite alternate both";
		e.target.style.color = `hsla(${Math.random() * 360}, 100%, 80%, 1)`;
	}

	return (
		<div
			style={{ fontSize: `${fontSize}em` }}
			className={`${textDipslay} flex-col  px-10 font-abc   gap-5`}
		>
			<div
				className={
					pic == undefined ? "opacity-90 duration-300" : "duration-300 opacity-0"
				}
			>
				{placeHolderName.split("").map((x) => (
					<a
						onClick={(e) => clickHandler(e)}
						// style={{''}}
						className="tracking-wider text-4xl md:text-6xl  select-none cursor-grabbing text-center hover:scale-125 duration-150 shadow-sm font-Motonotn "
					>
						{flickerLetter(x)}
					</a>
				))}
			</div>
			<p className="text-white"></p>

			<div
				className={clsx(
					"flex  flex-col  text-start ",
					pic == undefined ? "opacity-100 duration-300" : "duration-300 opacity-0 ",
					isShown ? "hidden" : ""
				)}
			>
				{/* <p className="text-white self-start text-4xl">
					Hey there, I am Furkan a Software Developer from Istanbul
				</p>
				<p className="text-blue-200 mt-2 text-3xl"></p> */}
			</div>
		</div>
	);
}
