<script>
  import Fuse from "fuse.js";
  import Input from "../Input.svelte";
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  import Card from "../Card.svelte";

  export let data;

  const dispatch = createEventDispatcher();

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

  function selectFish(fish) {
    let value = fish;
    dispatch("select", { value });
  }
</script>

<Card class="[ grid ]">
  <span>Look for something</span>

  <Input
    id=""
    name=""
    type="text"
    bind:value={keyword}
    on:input={handleInput}
    placeholder="Type a fish name..."
  />

  <div
    class="bg-yellow-200 [ mt-4 pt-2 pb-2 ] [ grid grid-cols-4 md:grid-cols-5 gap-x-4 gap-y-6 ] [ h-[50vh] overflow-y-auto ]"
  >
    {#each results as fish (fish.id)}
      <button on:click={() => selectFish(fish)}>
        <div class="[ flex flex-col items-center ]">
          <div class="[ p-2 md:px-8 md:py-2 ]">
            <img src={fish.icon_uri} alt={fish.name} />
          </div>
          <span class="[ text-sm ]">{fish.name}</span>
        </div>
      </button>
    {/each}
  </div>
</Card>
