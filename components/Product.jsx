import {useContext, useState, useEffect} from "react"
import Link from 'next/link'
import Image from "next/image"
import {CartContext} from "../context/cartContext"

export default function Product(props) {
	const {id, title, price, description, image, rating} = props
	const [inCart, setInCart] = useState(false)

	const {setCart, getCart} = useContext(CartContext)
	
	useEffect(() => {
		const response = getCart(id)
		if(response) {
			setInCart(true)
		}
	}, [])

	function handleClick() {
		const response = setCart(props)
		console.log(response)
		if(response) {
			setInCart(true)
		}
	}

	return(
		<div className="p-4 shadow-md rounded-md" style={{background: "#fff"}}>
			<div className="text-center"><Image src={image} alt={title} width={170} height={150} /></div>
			<div className="py-5">
				<h3>{title}</h3>
				<div className="flex justify-between items-center">
					<h4 className="text-lg text-gray-600 mt-4 mb-2 inline-block mr-auto"><i className="fas fa-star text-red-500 inline-block mr-1"></i> {rating.rate}</h4>
					<h5 className="text-2xl inline-block ml-auto"><b>$</b>{price}</h5>
				</div>
					<Link href={`/products/${id}`}>
						<a className="mt-4 text-xl text-center text-blue-700 bg-blue-300 block w-full py-3 rounded-md hover:bg-blue-400">View Product</a>
					</Link>
					{
						inCart ?
						<button className="mt-4 text-xl text-center text-red-700 bg-red-300 block w-full py-3 rounded-md hover:bg-red-400">
							Added To Cart
						</button>
						:
						<button className="mt-4 text-xl text-center text-red-700 bg-red-300 block w-full py-3 rounded-md hover:bg-red-400" onClick={handleClick}>
							Add To Cart
						</button>
					}
			</div>
		</div>
	)
}