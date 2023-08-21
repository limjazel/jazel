import axios from "axios"

export async function load({ params }) {
	let fishes = await axios
		.get("https://api.nookipedia.com/nh/fish", {
			headers: {
				"X-API-Key": "7e6bdf7b-c7d0-4de1-858d-e62edee44450",
				version: "1.0.0",
			},
		})
		.then((response) => {
			return response.data
		})

	return { fishes }
}
