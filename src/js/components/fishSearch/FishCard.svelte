<script>
  import Card from "../Card.svelte";

  /**
   * @type {{ name: any; image_uri: any; price: any; availability: { location: any; rarity: any; }; museum_phrase: any; }}
   */
  export let selectedFish;
</script>

<Card class="[ flex flex-col items-center ] [ pt-5 ]">
  <span
    class="[ capitalize font-semibold ] [ bg-neutral px-4 py-1 rounded-full ]"
  >
    {selectedFish.name}
  </span>

  <div class="[ bg-canvas rounded ] [ mt-2 py-6 px-3 h-62 ]">
    <img src={selectedFish.image_uri} alt="in game photo" />
  </div>

  <div class="[ mt-4 grid gap-y-2 ]">
    <div class="[ grid grid-cols-4 gap-x-2 ]">
      <span
        class="[ col-span-2 font-semibold ] [ bg-neutral rounded-l-full py-1 px-3 ]"
      >
        Sells for
      </span>
      <span
        class="[ col-span-2 whitespace-nowrap ] [ bg-canvas rounded-r-full py-1 px-3 ]"
      >
        {selectedFish.price} bells
      </span>
    </div>

    <div class="[ grid grid-cols-4 gap-x-2 ]">
      <span
        class="[ col-span-2 font-semibold ] [ bg-neutral rounded-l-full py-1 px-3 ]"
      >
        Located in
      </span>
      <span
        class="[ col-span-2 whitespace-nowrap ] [ bg-canvas rounded-r-full py-1 px-3 ]"
      >
        {selectedFish.availability.location}s
      </span>
    </div>

    <div class="[ grid grid-cols-4 gap-x-2 ]">
      <span
        class="[ col-span-2 font-semibold ] [ bg-neutral rounded-l-full py-1 px-3 ]"
      >
        Rarity
      </span>
      <span
        class="[ col-span-2 whitespace-nowrap ] [ bg-canvas rounded-r-full py-1 px-3 ]"
      >
        {selectedFish.availability.rarity}
      </span>
    </div>

    <div class="[ mt-2 lg:h-[15rem] overflow-y-auto ]" tabindex="0">
      <span>
        {selectedFish.museum_phrase}
      </span>
    </div>
  </div>
</Card>
