import Link from "next/link";

export function Header() {
	return (
		<>
			<div className="h-24  justify-between px-4 text-white text-4xl flex top-0  items-center bg-steam">
				<Link href={"/"}>
					<a className="font-hand text-2xl">M.Furkan Ulgen</a>
				</Link>
				<Link href={"/about"}>
					<a>about</a>
				</Link>
				<Link href={"/testimonials"}>
					<a>testimonials</a>
				</Link>
				<Link href={"/contact"}>
					<a>contact</a>
				</Link>
			</div>
		</>
	);
}
