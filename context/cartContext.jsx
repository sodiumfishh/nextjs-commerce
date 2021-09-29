import {useState, createContext} from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {
	const [products, setProducts] = useState([])

	function getCart(id) {
		if(!id) return products
		return products.includes(product => product.id == id)
	}

	function setCart(product) {
		setProducts([ product, ...products ])
		return true
	}

	function clearCart() {
		setProducts([])
	}

	return(
		<CartContext.Provider value={{getCart, setCart, clearCart}}>
			{children}
		</CartContext.Provider>
	)
}