import axios from "axios"
import Head from "next/head"
import Product from "../../components/Product"
import Modal from "../../components/Modal"

export default function Products({products}) {
	return(
		<div>
			<Head>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
			</Head>
			<div className="bg-gray-100">
				<Modal />
				<div className="py-10 container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
					{
						products.map(product => (
							<Product { ...product } key={product.id} />
						))
					}
				</div>
			</div>
		</div>
	)
}

export async function getStaticProps() {
	const data = await fetch("https://fakestoreapi.com/products")
	const products = await data.json()
	return {
		props: { products },
	}
}