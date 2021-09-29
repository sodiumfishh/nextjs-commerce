import {useState, useEffect} from "react"

export default function Modal() {
	const [show, setShow] = useState(false)

	useEffect(() => {
		setShow(true)
	}, [])

	return(
		show ?
		<div className="fixed w-screen h-screen inset-0 bg-gray-900 bg-opacity-30 z-30">
			<div className="flex flex-col items-center text-center gap-6 fixed top-1/2 left-1/2 py-10 w-full md:w-11/12 lg:w-6/12 transform -translate-x-1/2 -translate-y-1/2 rounded-md" style={{background: "#fff"}}>
				<h4 className="text-3xl text-gray-700">The site is still in development mode</h4>
				<p className="text-xl text-gray-700">You can still browse the site</p>
				<button onClick={() => setShow(false)} className="bg-blue-700 text-gray-50 px-4 py-3 rounded-md">I understand</button>
			</div>
		</div>
		:
		null
	)
}