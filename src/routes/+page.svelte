<script>
  import Container from "../js/components/Container.svelte";
  import Search from "../js/components/fishSearch/Search.svelte";
  import FishCard from "../js/components/fishSearch/FishCard.svelte";
  import ButtonCard from "../js/components/home/ButtonCard.svelte";
  import CopyToClipboardCard from "../js/components/home/CopyToClipboardCard.svelte";
  import DropdownCard from "../js/components/home/DropdownCard.svelte";
  import InputCard from "../js/components/home/InputCard.svelte";
  import LinkCard from "../js/components/home/LinkCard.svelte";
  import MiniMac from "../js/components/home/MiniMac.svelte";

  export let data;

  let selectedFish = data.fishes[0];

  /**
   * @param {{ detail: { value: any; }; }} event
   */
  function handleSelectedFish(event) {
    selectedFish = event.detail.value;
  }
</script>

<!-- banner -->
<Container>
  <div class="[ flex flex-wrap items-center lg:justify-between min-h-[60vh] ]">
    <div class="[ max-w-2xl py-20 ]">
      <h1 class="[ text-6xl ]">Hello! I am a sturgeon.</h1>
      <p class="[ mt-4 text-xl leading-relaxed ]">
        I am a designer with experience on building web apps. I am a designer
        with experience on building web apps.I am a designer with experience on
        building web apps.
      </p>
    </div>

    <img
      src="https://placehold.co/400"
      alt="sample banner"
      class="[ mx-auto lg:mx-0 ]"
    />
  </div>
</Container>

<section>
  <Container>
    <div class="max-w-2xl px-6 md:px-8">
      <h1 class="text-4xl">A tiny search library! Waoaw!</h1>

      <p class="mt-3 text-lg">
        One of the things I built quite a few times is a searchable library.
      </p>
      <p class="text-lg">
        Using ACNH API (v1) for fish and fuse.js, here's a simple searchable
        wiki for the water creatures in Animal Crossing (New Horizons).
      </p>
    </div>

    <div class="[ mt-14 grid lg:grid-cols-6 gap-6 ] min-h-[40rem]">
      <div class="[ col-span-1 lg:col-span-2 ]">
        <FishCard {selectedFish} />
      </div>

      <div class="[ col-span-1 lg:col-span-4 ] flex">
        <Search {data} on:select={handleSelectedFish} />
      </div>
    </div>
  </Container>
</section>

<section class="">
  <Container>
    <MiniMac />
  </Container>
</section>

<section class="[ py-20 ]">
  <Container>
    <h1 class="[ text-5xl ]">I am a title</h1>

    <div class="[ mt-10 grid gap-6 grid-cols-3 ]">
      <div class="col-span-3">
        <ButtonCard />
      </div>

      <div class="[ col-span-3 lg:col-span-1 ] [ flex items-stretch ]">
        <LinkCard />
      </div>

      <div class="col-span-3 lg:col-span-2 grid gap-6">
        <DropdownCard />

        <InputCard />
      </div>

      <div class="[ col-span-3 ]">
        <CopyToClipboardCard />
      </div>
    </div>
  </Container>
</section>
