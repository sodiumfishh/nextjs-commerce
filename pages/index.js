import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import Modal from "../components/Modal"

export default function Home() {
  return (
    <div>
      <Head>
        <title>StoreFront | Home</title>
        <meta name="description" content="Store for shopping" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="py-4 flex flex-col items-center gap-5 lg:py-10">
          <Modal />
          <h3 className="text-3xl text-gray-700">StoreShop</h3>
          <h4 className="text-lg text-gray-500">One Stop Buy Products</h4>
          <Link href="/products">
            <a className="text-lg bg-blue-300 text-blue-700 px-4 py-3 rounded-md">Browse Products</a>
          </Link>
        </div>
      </main>
        
    </div>
  )
}
