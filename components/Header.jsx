import Link from "next/link"

export default function Header() {
	return(
		<header>
			<div className="container mx-auto py-4 flex flex-col justify-between items-center">
				<h3 className="text-3xl">
					<Link href="/">
						<a>StoreShop</a>
					</Link>
				</h3>
				<nav className="mt-4">
					<ul className="flex gap-4 items-center">
						<li>
							<Link href="/">
								<a className="inline-block px-4 py-2 text-xl text-blue-700 hover:bg-blue-300">Home</a>
							</Link>
						</li>
						<li>
							<Link href="/products">
								<a className="inline-block px-4 py-2 text-xl text-blue-700 hover:bg-blue-300">Products</a>
							</Link>
						</li>
						<li>
							<Link href="/cart">
								<a className="inline-block px-4 py-2 text-xl text-blue-700 hover:bg-blue-300">Cart</a>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}