// import {useState} from "react"
// export default function Single(props) {
// 	const [number, updateNumber] = useState(0)
// 	return(
// 		<div>hello</div>
// 	)
// }



import Image from "next/image"
import {useContext, useState, useEffect} from "react"
import {CartContext} from "../context/cartContext"

function Single(props) {
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
		const response = setCart(id)
		if(response) {
			setInCart(true)
		}
	}

	return(
		<div className="container mx-auto flex flex-col items-center justify-center gap-6 lg:flex-row">
			<div className="w-5/12"><Image src={image} width={400} height={400} alt={title} /></div>
			<div className="w-7/12">
				<h3 className="text-gray-700 text-4xl mb-4">{title}</h3>
				<div className="flex items-center gap-10 py-4">
					<h4 className="text-gray-700 text-4xl"><b>$</b>{price}</h4>
					<h4 className="text-2xl text-gray-600"><i className="fas fa-star text-red-500 inline-block mr-1"></i> {rating.rate}</h4>
				</div>
				<p className="text-gray-600 text-xl">{description}</p>
				{
					inCart ?
					<button className="mt-7 text-xl text-center text-red-700 bg-red-300 block w-5/12 py-4 rounded-md hover:bg-red-400">
						Added To Cart
					</button>
					:
					<button className="mt-7 text-xl text-center text-red-700 bg-red-300 block w-5/12 py-4 rounded-md hover:bg-red-400" onClick={handleClick}>
						Add To Cart
					</button>
				}
			</div>
		</div>
	)
}


export default Single