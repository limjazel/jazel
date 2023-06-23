<script>
  import Container from "../js/components/Container.svelte";
  import Search from "../js/components/fishSearch/Search.svelte";
  import FishCard from "../js/components/fishSearch/FishCard.svelte";
  import ButtonCard from "../js/components/home/ButtonCard.svelte";
  import CopyToClipboardCard from "../js/components/home/CopyToClipboardCard.svelte";
  import DropdownCard from "../js/components/home/DropdownCard.svelte";
  import InputCard from "../js/components/home/InputCard.svelte";
  import LinkCard from "../js/components/home/LinkCard.svelte";

  export let data;

  let selectedFish = data.fishes[0];

  /**
   * @param {{ detail: { value: any; }; }} event
   */
  function handleSelectedFish(event) {
    selectedFish = event.detail.value;
  }

  let tools = [
    {
      name: "Visual Studio Code",
      description: "My current editor, my friend and my enemy.",
      extensions: "Prettier, Svelte for VS Code, Tailwind CSS Intellisense",
    },
    {
      name: "iTerm2",
      description:
        "I prefer the terminal to be separated from the code editor when I work, and the default one mac has isn't too kind to the eyes, and here we are.",
    },
    {
      name: "Arc Browser",
      description:
        "I tried it out and stuck with it because of how clean it looks when the sidebar is hidden. I still use both Safari and Firefox though.",
      extensions: "WhatFont, ColorZilla, Awesome Screenshot",
      icon_url: "src/images/logos/arc.svg",
    },
    {
      name: "Figma",
      description:
        "From doing process flows, mockups, prototypes, documents and doing basic photo editing. Figma has almost everything I need for the basic things in life.",
    },
    {
      name: "Affinity Designer",
      description:
        "Affinity Designer was introduced to me and I've been using it since!",
    },
    {
      name: "Procreate",
      description:
        "For sketching out ideas and making illustrations, Procreate is my favorite hobby buddy. (So far).",
    },
    {
      name: "Adobe Photoshop",
      description:
        "I rarely do photo editing anymore, but Photoshop is still my go-to and what I'm comfortable with.",
    },
    {
      name: "Alfred",
      description:
        "A custom spotlight search for mac, makes looking for stuff easier and opening apps faster.",
    },
    {
      name: "iCloud",
      description:
        "I mainly use iCloud for storing everything. But I still use Google drive.",
    },
  ];

  let selectedTool = "";

  /**
   * @param {{ name: string; description: string; extensions: string; } | { name: string; description: string; extensions?: undefined; }} tool
   */
  function toggleTool(tool) {
    selectedTool = tool.name;
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
    <div class="max-w-2xl px-6 md:px-8">
      <h1 class="text-4xl">/uses</h1>
      <p>What i use on a thing for a thing! Using a tool for tooling</p>
    </div>

    <div
      class="[ mt-6 ] [ flex flex-col justify-between ] bg-purple-100 min-h-[40rem]"
    >
      <nav class="[ glass-effect shadow-sm ]">
        {#if selectedTool}
          {selectedTool}
        {:else}
          Apelle
        {/if}
      </nav>

      <div class="flex gap-4 justify-center [ bg-stroke ]">
        {#each tools as tool (tool.name)}
          <div class="justify-start">
            <button
              on:click={() => toggleTool(tool)}
              class="font-semibold bg-red-100"
            >
              {tool.name}
            </button>

            <img src={tool.icon_url} alt="" class="h-10"/>

            <!-- <span>{tool.description}</span>
        {#if tool.extensions}
          <span>Extensions: {tool.extensions}</span>
        {/if} -->
          </div>
        {/each}
      </div>
    </div>
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
