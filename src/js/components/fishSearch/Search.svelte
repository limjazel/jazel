<script>
  import Fuse from "fuse.js";
  import Input from "../Input.svelte";
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  import Card from "../Card.svelte";
  import Button from "../Button.svelte";

  export let data;

  const dispatch = createEventDispatcher();

  let keyword = "";
  let fishes = data.fishes;
  let selectedFish = data.fishes[0];

  /**
   * @type {any[]}
   */
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

  /**
   * @param {any} fish
   */
  function selectFish(fish) {
    const value = fish;
    selectedFish = fish;
    dispatch("select", { value });
  }
</script>

<Card class="[ grid ]">
  <label for="fish-search-input" class="[ font-semibold ]">Look up a fish</label>

  <div
    class="[ pt-1 pb-3 ] [ bg-canvas ]"
  >
    <Input
      id="fish-search-input"
      name="fish-search-input"
      type="text"
      bind:value={keyword}
      on:input={handleInput}
      placeholder="Type a fish name..."
    />
  </div>

  <div
    class="[ pt-4 pb-6 px-1 ] [ grid grid-cols-3 md:grid-cols-5 gap-4 ] [ h-[50vh] overflow-y-auto ]"
  >
    {#each results as fish (fish.id)}
      <div
        class:bg-neutral={fish === selectedFish}
        class:ring-2={fish === selectedFish}
        class:ring-stroke={fish === selectedFish}
        class="[ flex rounded max-h-40 ]"
      >
        <Button
          type="none"
          on:click={() => selectFish(fish)}
          class="[ hover:bg-neutral/50 ]"
        >
          <div class="[ flex flex-col items-center ]">
            <div class="[ p-2 md:px-3 ]">
              <img src={fish.icon_uri} alt={fish.name} />
            </div>
            <span class="[ text-sm ]">{fish.name}</span>
          </div>
        </Button>
      </div>
    {/each}
  </div>
</Card>
