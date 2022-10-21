import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { MyName } from "../components/Name";
import { Textt } from "../components/Text";

const Home: NextPage = () => {
	return (
		<>
			<div className="flex h-screen  justify-center bg-black  text-center flex-col  w-screen">
				<div className="flex flex-col  gap-2 ">
					<Textt />
				</div>
			</div>
		</>
	);
};

export default Home;
