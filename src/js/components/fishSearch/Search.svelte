<script>
  import Fuse from "fuse.js";
  import Input from "../Input.svelte";
  import { onMount } from "svelte";

  export let data;

  let keyword = "";
  let fishes = data.fishes;
  let results = [];

  let fuse = new Fuse(fishes, {
    includeScore: true,
    shouldSort: true,
    threshold: 0.1,
    keys: ["name"],
  });

  function handleInput() {
    if (keyword === "") {
      results = fishes;
      return;
    }

    results = fuse.search(keyword).map((result) => result.item);
  }

  onMount(() => {
    results = fishes;
  });
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
