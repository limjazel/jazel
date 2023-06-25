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

<svelte:head>
  <title>Hello! I'm Jazel</title>
</svelte:head>

<!-- banner -->
<Container class="[ py-20 md:pb-24 md:pt-14 ]">
  <div class="[ grid grid-cols-5 gap-10 items-center min-h-[60vh] ]">
    <div class="[ col-span-5 lg:col-span-3 ]">
      <img
        src="/images/banner-lg-cropped.gif"
        alt="gif banner"
        class="[ w-full pr-0 px-0 md:px-10 pb-10 lg:pb-0 lg:pr-12 ]"
      />
      <span class="[ sr-only ]">
        An illustration of a lady with short black hair and bright neon green
        sweater sitting on chair with her other arm resting on the table. The
        table has a monitor, keyboard and a mouse.
      </span>
    </div>

    <div class="[ col-span-5 lg:col-span-2 max-w-xl ]">
      <h1 class="[ text-6xl lg:-mt-10 tracking-tightest ]">Hello! I'm Jazel.</h1>
      <p class="[ mt-2 text-xl leading-relaxed ]">
        I am a designer with experience on building web apps. I enjoy doing
        illustrations from time to time!
      </p>
    </div>
  </div>
</Container>

<div class="[ py-40 bg-stroke ]">
  <section class="[ pb-18 ]">
    <Container>
      <div class="[ mx-auto max-w-2xl px-6 md:px-8 ] [ text-center ]">
        <h1 class="[ text-4xl text-accent ]">A searchable fish database</h1>

        <p class="[ mt-3 text-lg text-canvas ]">
          One of the things I built quite a few times is a searchable library.
        </p>
        <p class="[ text-lg text-canvas ]">
          Using ACNH API (v1) for fish and fuse.js, here's a simple searchable
          wiki for the water creatures in Animal Crossing (New Horizons).
        </p>
      </div>

      <div class="[ mt-14 grid lg:grid-cols-6 gap-6 ] min-h-[40rem]">
        <div class="[ col-span-1 lg:col-span-2 ] [ rounded-lg shadow-lg ]">
          <FishCard {selectedFish} />
        </div>

        <div class="[ col-span-1 lg:col-span-4 flex ] [ rounded-lg shadow-lg ]">
          <Search {data} on:select={handleSelectedFish} />
        </div>
      </div>
    </Container>
  </section>

  <section class="[ pt-20 ]">
    <Container>
      <div class="[ mx-auto max-w-2xl px-6 md:px-8 ] [ text-center ]">
        <h1 class="[ text-4xl text-accent ]">Uses</h1>

        <p class="[ mt-3 text-lg text-canvas ]">
          I tried to copy the appearance of my screen and show some of the
          software I use when working! I picked the ones I use most.
        </p>
      </div>

      <MiniMac />
    </Container>
  </section>

  <section class="[ py-20 ]">
    <Container>
      <div class="[ mx-auto max-w-2xl px-6 md:px-8 ] [ text-center ]">
        <h1 class="[ text-4xl text-accent ]">Mini component library</h1>

        <p class="[ mt-3 text-lg text-canvas ]">
          A robust house is built with good foundation, so I worked on a few
          components before working on everything else on this website.
        </p>
      </div>

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
</div>
