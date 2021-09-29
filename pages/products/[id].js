import Head from "next/head"
import Single from "../../components/Single"

export default function Details({data}) {
	return(
		<div className="bg-gray-100 py-10">
				<Head>
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
				</Head>
			<Single { ...data } />
		</div>
	)
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()


  // Get the paths we want to pre-render based on posts
  const paths = products.map((product) => {
  	return (
  		{
  			params: {id: product.id.toString()}
  		}
	)
  })

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({params}) {
	const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
	const data = await res.json()
	return {
		props: { data }
	}
}
