<script>
  import Card from "../Card.svelte";

  /**
	 * @type {{ name: any; render_url: any; price: any; location: any; rarity: any; catchphrases: any; }}
	 */
   export let selectedFish;
</script>

<Card class="[ flex flex-col items-center ] [ pt-5 ]">
  <span
    class="[ capitalize font-semibold ] [ bg-neutral px-4 py-1 rounded-full ]"
  >
    {selectedFish.name}
  </span>

  <div class="[ bg-canvas rounded ] [ mt-2 h-60 w-full ]">
    <div class="[ flex justify-center my-auto py-10 px-8 h-full ]">
      <img src={selectedFish.render_url} alt="in game photo" class="[ object-contain ]" />
    </div>
  </div>

  <div class="[ mt-4 grid gap-y-2 w-full ]">
    <div class="[ grid grid-cols-4 gap-x-2 ]">
      <span
        class="[ col-span-2 font-semibold ] [ bg-neutral rounded-l-full py-1 px-3 ]"
      >
        Sells for
      </span>
      <span
        class="[ col-span-2 whitespace-nowrap ] [ bg-canvas rounded-r-full py-1 px-3 ]"
      >
        {selectedFish.sell_nook} bells
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
        {selectedFish.location}s
      </span>
    </div>

    <div class="[ grid grid-cols-4 gap-x-2 ]">
      <span
        class="[ col-span-2 font-semibold ] [ bg-neutral rounded-l-full py-1 px-3 ]"
      >
        Shadow size
      </span>
      <span
        class="[ col-span-2 whitespace-nowrap ] [ bg-canvas rounded-r-full py-1 px-3 ]"
      >
        {selectedFish.shadow_size}
      </span>
    </div>

    <div class="[ mt-2 lg:h-[15rem] overflow-y-auto ]" tabindex="0">
      <span>
        "{selectedFish.catchphrases}"
      </span>
    </div>
  </div>
</Card>
