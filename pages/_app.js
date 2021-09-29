import Head from "next/head"

import '../styles/globals.css'
import Header from "../components/Header"
import {CartProvider} from "../context/cartContext"

function MyApp({ Component, pageProps }) {
  return (
      <div>
        <CartProvider>
          <Header />
          <Component {...pageProps} />
        </CartProvider>
      </div>
  )
}

export default MyApp
