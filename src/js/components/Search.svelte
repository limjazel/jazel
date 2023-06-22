<script>
  import axios from "axios";
  import Fuse from "fuse.js";
  import { onMount } from "svelte";
  import Input from "./Input.svelte";

  let keyword = "";

  let fishes;
  let results = [];
  let fuse;
  let loading = true;

  onMount(async () => {
    fishes = await axios.get("https://acnhapi.com/v1/fish").then((response) => {
      return response.data;
    });

    fishes = Object.values(fishes).map((fish) => {
      fish.name = fish.name["name-USen"];
      fish.museumPhrase = fish["museum-phrase"];
      return fish;
    });

    loading = false;

    fuse = new Fuse(fishes, {
      includeScore: true,
      shouldSort: true,
      threshold: 0.1,
      keys: ["name.name-USen"],
    });

    results = fishes;
  });

  function handleInput() {
    results = fuse.search(keyword).map((result) => result.item);
  }
</script>

<span>Look for something</span>
<Input
  id=""
  name=""
  type="text"
  bind:value={keyword}
  on:input={handleInput}
  placeholder="Type a fish name..."
/>

<div class="pb-20">
  {#if loading}
    catching the fishes...
  {/if}

  <div class="mt-10 grid grid-cols-12 gap-4">
    {#each results as fish (fish.id)}
      <div>
        <span>{fish.name}</span>
        <img src={fish.icon_uri} alt={fish.name} />
        <!-- <p>{fish.museumPhrase}</p> -->
      </div>
    {/each}
  </div>
</div>
