import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Name, Textt } from "../components/challenges/Name";

const Home: NextPage = () => {
	return (
		<>
			<div className="flex h-screen animate-[text-flicker-in-glow] bg-black justify-center  text-center flex-col  w-screen">
				<div className="flex flex-col  gap-2 ">
					<Name />
					<Textt />
				</div>
			</div>
		</>
	);
};

export default Home;
