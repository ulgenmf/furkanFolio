import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Image from "next/image";
import panda from "/public/panda.jpg";
export default function resim() {
	return (
		<>
			<Parallax pages={2}>
				<ParallaxLayer>
					<div className="h-full w-full bg-green-200"></div>
				</ParallaxLayer>
				<ParallaxLayer>
					<div className="h-full w-full bg-green-400"></div>
				</ParallaxLayer>
			</Parallax>
		</>
	);
}
