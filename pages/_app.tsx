import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	const [popped, isPopped] = useState("null");

	let display = "block";

	return (
		<>
			{/* <Header /> */}

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
