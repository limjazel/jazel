<script>
  import axios from "axios";
  import Fuse from "fuse.js";
  import { onMount } from "svelte";
  import Input from "./Input.svelte";

  let keyword = "";

  let results;
  let fishes = [];

  let fuse;

  onMount(() => {
    axios.get("https://acnhapi.com/v1/fish").then((response) => {
      results = Object.values(response.data);

      fuse = new Fuse(
        results.map((result) => {
          result.name = result.name["name-USen"];

          return result;
        }),
        {
          includeScore: true,
          shouldSort: true,
          threshold: 0.1,
          keys: ["name"],
        }
      );
      fishes = results;
    });
  });

  function handleInput() {
    fishes = fuse.search(keyword).map((fish) => fish.item);
  }
</script>

<span>Look for something</span>
<Input type="text" bind:value={keyword} on:input={handleInput} placeholder="Type a fish name..."/>

<div class="pb-20">
  <div class="mt-10 grid grid-cols-4 gap-4">
    {#each fishes as fish (fish.id)}
      <div>
        <span>{fish.name}</span>
        <img src={fish.icon_uri} alt={fish.name} />
      </div>
    {/each}
  </div>
</div>
