<script>
  import axios from "axios";
  import Fuse from "fuse.js";
  import { onMount } from "svelte";

  let keyword = "";

  let results;
  let fishes = [];

  let fuse;

  onMount(() => {
    axios.get("https://acnhapi.com/v1/fish").then((response) => {
      results = response.data;

      fuse = new Fuse(results, {
        includeScore: true,
        keys: ["name"],
      });
      fishes = Object.values(results);
    });
  });

  function handleInput() {
    fishes = fuse.search(keyword).map((fish) => fish);
  }
</script>

Search a book
<input type="text" bind:value={keyword} on:input={handleInput} />

<div class="pb-20">
  <div class="mt-10 grid grid-cols-4 gap-4">
    {#each fishes as fish (fish.id)}
      <div>
        <span>{fish.name["name-USen"]}</span>
        <img src={fish.icon_uri} alt={fish.name} />
      </div>
    {/each}
  </div>
</div>
