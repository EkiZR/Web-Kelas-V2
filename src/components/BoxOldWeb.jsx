import { Utensils } from "lucide-react"


const BoxOldWeb = () => {
	return (
		<div id="BoxOldWeb">
			<a href="#Menu">
				<div className="flex justify-between">
					<Utensils />
					<img src="/next.png" alt="" className="h-3 w-3" />
				</div>
				<h1 className="text-white text-base font-semibold pr-0 mt-5">Menu Makanan</h1>
			</a>
		</div>
	)
}

export default BoxOldWeb
