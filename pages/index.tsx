import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { MyName } from "../components/Name";
import { Textt } from "../components/Text";

const Home: NextPage = () => {
	return (
		<>
			<div className="flex h-screen  justify-center gap-10 bg-black  text-center flex-col  w-screen">
				<p className="text-5xl self-center mb-10 text-white ">
					The site is under maintenance
					<br /> please try again later
				</p>
				<div className="flex flex-col  gap-2 ">
					<Textt />
				</div>
			</div>
		</>
	);
};

export default Home;
