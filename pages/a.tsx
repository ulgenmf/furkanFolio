import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function a() {
	const [post, setPost] = useState([]);
	const [query, setQuery] = useState("cat");
	const [limit, setLimit] = useState(20);
	const [inputSearch, setInputSearch] = useState("");
	console.log(inputSearch, query);
	const url = `https://api.reddit.com/search.json?limit=${limit}&q=${query}&top`;

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((actualData) => setPost(actualData.data.children));
	}, [query]);
	{
		/* <img src={x.data.thumbnail} /> */
	}

	return (
		<div className="flex flex-col  bg-black ">
			<div className="w-2/5  my-3 self-center ">
				<form>
					<label
						htmlFor="default-search"
						className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
					>
						Search
					</label>
					<div className="relative">
						<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
							<svg
								aria-hidden="true"
								className="w-5 h-5 text-gray-500 dark:text-gray-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								></path>
							</svg>
						</div>
						<input
							onChange={(e) => setInputSearch(e.target.value)}
							type="search"
							id="default-search"
							className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Key words, Sub reddits etc..."
						/>
						<button
							onClick={(e) => {
								e.preventDefault();
								setQuery(inputSearch);
							}}
							type="submit"
							className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Search
						</button>
					</div>
				</form>
			</div>
			<div className="grid grid-cols-3 items-center  grid-rows-3 p-1 grid-flow-col overflow-auto gap-2  ">
				{post
					.filter((post: any) => post.data.post_hint === "image")
					.filter((post) => post.data.domain !== "i.imgur.com")
					.map((post: any) => (
						<div className="flex text-center text-white justify-center  h-[30rem] w-[80%]  p-1 flex-col">
							<p className="  text-xl">{post.data.title}</p>
							<Link href={"https://www.reddit.com/" + post.data.permalink}>
								<img
									height={250}
									width={250}
									className="    m-auto rounded-md hover:scale-125 duration-200  border-slate-500 border-2 shadow-indigo-500"
									src={post.data.url_overridden_by_dest}
								/>
							</Link>
						</div>
					))}
			</div>
		</div>
	);
}
