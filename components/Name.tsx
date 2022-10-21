import { useState } from "react";
import Image from "next/image";

export function MyName() {
	const placeHolderName = " Muhammed Furkan Ülgen";

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
		<div>
			{placeHolderName.split("").map((x) => (
				<button
					onClick={(e) => clickHandler(e)}
					// style={{''}}
					className="tracking-wider hover:scale-125 duration-150 shadow-sm font-Motonotn text-6xl"
				>
					{flickerLetter(x)}
				</button>
			))}
		</div>
	);
}
