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
  import Note from "../js/components/Note.svelte";

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
<Container class="[ pt-16 pb-24 ]">
  <div class="[ flex flex-col items-center justify-center px-10 ]">
    <h1 class="[ text-6xl md:text-8xl tracking-tight text-center ]">
      Hello! I'm
      <span
        class="[ font-decorative font-semibold tracking-tightest italic text-stroke text-7xl md:text-9xl ]"
      >
        Jazel.
      </span>
    </h1>
    <p class="[ mt-6 text-xl text-center leading-narrow max-w-lg ]">
      I am a designer with experience on building web apps. I enjoy doing
      illustrations from time to time!
    </p>
  </div>
</Container>

<div class="[ bg-canvas md:mt-8 pb-20 px-10 ]">
  <Container
    class="[ grid md:grid-cols-2 lg:grid-cols-3 content-start justify-items-center gap-10 ]"
  >
    <a href="/case-studies/sidedoor/horizontal-filter">
      <Note
        class="[ grid content-start justify-items-start ] [ min-h-[300px] ] [ rotate-2 -mt-20 p-6 ]"
      >
        <span
          class="[ -mt-10 px-4 py-2 bg-neutral/50 shadow ] [ font-medium font-decorative italic ]"
        >
          case study
        </span>

        <span class="[ text-2xl font-bold mt-4 ]">
          Sidebar filter to a Horizontal filter
        </span>

        <div class="[ flex gap-2 my-2 ]">
          <span
            class="[ border border-stroke ] [ rounded-full px-3 py-1 ] [ text-xs italic text-shade ]"
          >
            UI/UX
          </span>
          <span
            class="[ border border-stroke ] [ rounded-full px-3 py-1 ] [ text-xs italic text-shade ]"
          >
            Front-end
          </span>
        </div>

        <p class="[ mt-1 ]">
          A study focused on how a sidebar product filter is tranformed into a
          horizontal filter to make space for a (incoming) collection sidebar.
        </p>

        <span class="[ mt-10 font-semibold italic ]">Read more →</span>
      </Note>
    </a>

    <a href="/case-studies/personal/angat-buhay">
      <Note
        class="[ grid content-start justify-items-start ] [ min-h-[300px] ] [ -rotate-3 md:-mt-16 p-6 ]"
      >
        <span
          class="[ -mt-10 ml-6 px-4 py-2 bg-neutral/50 shadow ] [ font-medium font-decorative italic ]"
        >
          case study
        </span>
        <span class="[ text-2xl font-bold mt-4 ]"> Angat Buhay PH </span>

        <div class="[ flex flex-wrap gap-2 my-2 ]">
          <span
            class="[ border border-stroke ] [ rounded-full px-3 py-1 ] [ text-xs italic text-shade ]"
          >
            UI/UX
          </span>
          <span
            class="[ border border-stroke ] [ rounded-full px-3 py-1 ] [ text-xs italic text-shade ]"
          >
            Website Design
          </span>
        </div>

        <p class="[ mt-1 ]">
          A personal study on the Angat Buhay website. Angat Buhay Foundation,
          incorporated as Angat Pinas, Inc., is a non-profit, non-governmental
          organization based in the Philippines.
        </p>

        <span class="[ mt-10 font-semibold italic ]">Read more →</span>
      </Note>
    </a>

    <Note
      class="[ grid content-start justify-items-start ] [ min-h-[300px] ] [ rotate-2 md:-mt-4 lg:-mt-28 ]"
    >
      <span
        class="[ -mt-4 ml-24 px-4 py-2 bg-neutral/50 shadow ] [ min-w-[5rem] min-h-[2.5rem] ] [ font-medium font-decorative italic ]"
      />

      <div class="w-full px-6 pb-4">
        <img
          src="/images/this-is-fine.png"
          alt="gif banner"
          class="[ w-full ]"
        />
        <span class="[ sr-only ]">
          An illustration of a girl sitting on a computer chair facing a table
          with a laptop and mug on top. She is in a room surrounded by bushes
          with neon green flowers and leaves hanging from the ceiling. A wall
          behind shows a photo of three cats, one black, one orange tabby and
          one gray tabby.
        </span>
      </div>
    </Note>
  </Container>
</div>

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
