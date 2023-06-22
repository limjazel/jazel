import axios from "axios"

export async function load ({ params }) {
    let fishes = await axios.get("https://acnhapi.com/v1/fish").then((response) => {
      return response.data;
    });

    fishes = Object.values(fishes).map((fish) => {
      return {
        ...fish,
        name: fish.name["name-USen"],
        museum_phrase: fish["museum-phrase"],
      }
    });

    return { fishes }
  }