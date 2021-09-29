import {useContext, useState, useEffect} from "react"
import {CartContext} from "../context/cartContext"
import CartBody from "./CartBody"

export default function Cart() {
	const [cartItems, setCartItems] = useState([])
	const [num, setNum] = useState(0)

	const {getCart, clearCart} = useContext(CartContext)

	useEffect(() =>  {
		const cart = getCart()
		setCartItems(cart)
	}, [])

	function handleClear() {
		clearCart()
		setCartItems([])
	}

	return(
		<div className="container mx-auto py-10">
			<button onClick={handleClear} className="bg-red-600 text-gray-50 px-3 py-2 rounded-md mb-6">Clear Cart</button>
			<table className="w-full min-w-max overflow-x-auto">
				<thead>
					<tr>
						<th className="text-lg">Image</th>
						<th className="text-lg">Name</th>
						<th className="text-lg">Price</th>
						<th className="text-lg">Quantity</th>
						<th className="text-lg">Total</th>
					</tr>
				</thead>
				<tbody>
					{
						cartItems.map(item => (
							<CartBody { ...item } />
						))
					}
				</tbody>
			</table>
		</div>
	)
}