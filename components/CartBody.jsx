import {useState} from "react"
import Image from "next/image"

export default function CartBody({image, title, price}) {
	const [quantity, setQuantity] = useState(0)

	function handleIncrement() {
		if(quantity > 1){
			setQuantity(quantity + 1)
		}
	}

	function handleDecrement() {
		if(quantity > 1){
			setQuantity(quantity - 1)
		}
	}

	return(
		<tr>
			<td className="text-lg"><Image src={image} alt={title} width={50} height={50} /></td>
			<td className="text-lg">{title}</td>
			<td className="text-lg">{price}</td>
			<td className="text-lg"><button className="p-1 bg-red-700 text-gray-50" onClick={handleDecrement}>-</button>{quantity}<button className="p-1 bg-red-700 text-gray-50" onClick={handleIncrement}>+</button></td>
			<td className="text-lg">{price * quantity}</td>
		</tr>
	)
}