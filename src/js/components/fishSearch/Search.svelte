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
  let isLoading = true;

  /**
   * @type {any[]}
   */
  let results = [];

  /**
   * @type {string | any[]}
   */
  let loaded = [];

  let fuse = new Fuse(fishes, {
    includeScore: true,
    shouldSort: true,
    threshold: 0.5,
    keys: ["name", "availability.location", "availability.rarity"],
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
    isLoading = false;
  });

  /**
   * @param {any} fish
   */
  function selectFish(fish) {
    const value = fish;
    selectedFish = fish;
    dispatch("select", { value });
  }

  function prefetch(fish) {
    if (loaded.includes(fish.image_uri)) {
      return;
    }

    let image = new Image()
    image.src = fish.image_uri

    loaded = [...loaded, fish.image_uri]
  }
</script>

<Card class="[ grid items-start ]">
  <label for="fish-search-input" class="[ font-semibold ]">
    Look up a water creature
  </label>

  <div class="[ pt-1 pb-3 ] [ bg-pearl ]">
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
    class="[ py-4 px-1 ] [ grid grid-cols-2 md:grid-cols-5 gap-4 ] grid-flow-row auto-rows-max [ h-[32rem] overflow-y-auto ]"
  >
    {#if isLoading}
      <span class="[ col-span-2 md:col-span-5 ] [ font-medium text-center ]">
        Catching the fishes...🐟🐠🐡
      </span>
    {/if}

    {#each results as fish (fish.id)}
      <div
        class:bg-neutral={fish === selectedFish}
        class:ring-2={fish === selectedFish}
        class:ring-stroke={fish === selectedFish}
        on:mouseover={() => prefetch(fish)}
        class="[ flex rounded max-h-40 ]"
      >
        <Button
          type="none"
          on:click={() => selectFish(fish)}
          tabindex="0"
          class="[ hover:bg-neutral/50 ]"
        >
          <span class="[ flex flex-col items-center ]">
            <span class="[ px-1 md:px-4 py-2 ]">
              <img src={fish.icon_uri} alt="in game icon of" />
            </span>

            <span class="[ text-xs md:text-sm pb-4 md:pb-2 ]">{fish.name}</span>
          </span>
        </Button>
      </div>
    {/each}
  </div>
</Card>
