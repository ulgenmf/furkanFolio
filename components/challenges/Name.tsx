import { useState } from "react";

export function Name() {
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
		e.target.style.textShadow = `0 0 10px rgba(255, 255, 255, 0.6),
		0 0 20px rgba(255, 255, 255, 0.45), 0 0 10px rgba(255, 255, 255, 0.25),
		0 0 10px rgba(255, 255, 255, 0.1)`;
		e.target.style.animation = "blink 4s infinite alternate both";
		e.target.style.animation = "blink 4s infinite alternate both";

		e.target.style.color = `hsla(${Math.random() * 360}, 100%, 80%, 10)`;
	}
	return (
		<div>
			{placeHolderName.split("").map((x) => (
				<button
					onClick={(e) => clickHandler(e)}
					// style={{''}}
					className="tracking-wider shadow-sm font-Motonotn text-6xl"
				>
					{flickerLetter(x)}
				</button>
			))}
		</div>
	);
}
export function Textt() {
	function flickLetter() {}
	return (
		<div className="flex flex-col font-abc text-start px-20 gap-2 mt-2">
			<p className="text-white text-4xl">
				Hey there, I am
				<span className="underline underline-offset-8 ml-4 decoration-2">
					Furkan
				</span>
				, a junior Software Developer from
				<span className="underline ml-4 underline-offset-8 decoration-2">
					Istanbul
				</span>
			</p>
			<p className="text-slate-400 mt-2 text-3xl">
				I am a motivated, dedicated learner who just discovered his love towards
				coding and looking forward to learn more and more
			</p>
		</div>
	);
}
