import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Head>
        <title>StoreFront | Home</title>
        <meta name="description" content="Store for shopping" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h3 className="text-2xl text-gray-700">StoreShop</h3>
        <h4 className="text-lg text-gray-500">One Stop Buy Products</h4>
        <Link href="/products">
          <a className="bg-blue-300 text-blue-700 px-4 py-3 rounded-md">Browse Products</a>
        </Link>
      </main>
        
    </div>
  )
}
