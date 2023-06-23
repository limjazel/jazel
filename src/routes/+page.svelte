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
  let tools = [
    {
      name: "Visual Studio Code",
      description:
        "My current editor! Friendship ended with PHPStorm (I am broke), Sublime and Notepad++, now, VSCode is my best friend.",
      extensions: "Prettier, Svelte for VS Code, Tailwind CSS Intellisense",
      icon_url: "src/images/logos/vscode.webp",
    },
    {
      name: "iTerm2",
      description:
        "I prefer the terminal to be separated from the code editor when I work, and the default one mac has isn't too kind to the eyes, also recommended by a friend, iTerm has since been a staple tool I regulary use.",
      icon_url: "src/images/logos/iTerm.webp",
    },
    {
      name: "Arc Browser",
      description:
        "I tried it out and stuck with it because of how clean it looks when the sidebar is hidden. I still use both Safari and Firefox though.",
      extensions: "WhatFont, ColorZilla, Awesome Screenshot",
      icon_url: "src/images/logos/arc.webp",
    },
    {
      name: "Figma",
      description:
        "From doing process flows, mockups, prototypes, documents and doing basic photo editing. Figma has almost everything I need for the basic things in life.",
      icon_url: "src/images/logos/figma.webp",
    },
    {
      name: "Affinity Designer",
      description:
        "Affinity Designer was introduced to me and I've been using it since!",
      icon_url: "src/images/logos/affinity_designer.webp",
    },
    {
      name: "Procreate",
      description:
        "For sketching out ideas and making illustrations, Procreate is my favorite hobby buddy. (So far).",
      icon_url: "src/images/logos/procreate.webp",
    },
    {
      name: "Adobe Photoshop",
      description:
        "I rarely do photo editing anymore, but Photoshop is still my go-to and what I'm comfortable with.",
      icon_url: "src/images/logos/adobe_photoshop.webp",
    },
    {
      name: "Alfred",
      description:
        "A custom spotlight search for mac, makes looking for stuff easier and opening apps faster.",
      icon_url: "src/images/logos/alfred.webp",
    },
    {
      name: "iCloud",
      description:
        "I mainly use iCloud for storing everything. But I still use Google drive.",
      icon_url: "src/images/logos/icloud.webp",
    },
  ];

  /**
   * @type {{ name: string; description: string; extensions: string; } | { name: string; description: string; extensions?: undefined; }}
   */
  let selectedTool = tools[0];
  let showInfo = true;

  /**
   * @param {{ name: string; description: string; extensions: string; } | { name: string; description: string; extensions?: undefined; }} tool
   */
  function toggleTool(tool) {
    selectedTool = tool;
    showInfo = true;
  }

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
    <div class="max-w-2xl px-6 md:px-8">
      <h1 class="text-4xl">/uses</h1>
      <p>What i use on a thing for a thing! Using a tool for tooling</p>
    </div>

    <div
      class="[ mt-6 ] [ flex flex-col justify-between ] [ bg-purple-100 border-8 border-neutral ] [ min-h-[40rem] shadow-md rounded-md overflow-hidden ]"
    >
      <nav class="[ glass-effect shadow-sm ] [ py-1.5 px-5 ]">
        {#if selectedTool}
          <span class="[ flex items-center gap-4 ]">
            <i class="fa-brands fa-apple [ text-lg ]" aria-hidden="true" />
            <span class="[ font-semibold text-sm relative top-0.5 ]">
              {selectedTool.name}
            </span>
          </span>
        {:else}
          <span class="[ flex items-center gap-4 ]">
            <i class="fa-brands fa-apple [ text-lg ]" aria-hidden="true" />
            <span class="[ font-semibold text-sm relative top-0.5 ]">
              Apelle
            </span>
          </span>
        {/if}
      </nav>

      {#if showInfo && selectedTool}
        <div
          class="[ mx-6 md:mx-auto ] [ bg-pearl min-h-[16rem] max-w-[40rem] ]
             [ rounded-lg shadow-lg overflow-hidden ]"
        >
          <header class="[ p-2 flex items-center bg-zinc-200 ]">
            <button
              on:click={() => (showInfo = false)}
              class="[ h-4 w-4 bg-red-400 rounded-full ]"
            >
              <i
                class="fa-solid fa-xmark [ text-xs text-red-700 relative -top-1 ]"
                aria-hidden="true"
              />
              <span class="[ sr-only ]">Close tool info</span>
            </button>
          </header>

          <div class="[ flex flex-col px-10 pt-10 pb-12 ]">
            <h3 class="[ text-xl tracking-tight ]">{selectedTool.name}</h3>
            <span class="[ mt-1 ]">{selectedTool.description}</span>

            {#if selectedTool.extensions}
              <div
                class="[ mt-10 flex flex-col gap-1 ] [ text-zinc-500 text-sm ]"
              >
                <span class="[ font-medium ]">Extensions I use:</span>
                <span>{selectedTool.extensions}</span>
              </div>
            {/if}
          </div>
        </div>
      {/if}

      <div class="[ flex justify-center ]">
        <div
          class="[ mb-1 pt-1 pb-3 px-1 ] [ glass-effect rounded-xl ] [ flex flex-wrap gap-1 justify-center ]"
        >
          {#each tools as tool (tool.name)}
            <div class="[ flex flex-col items-center ]">
              <button
                on:click={() => toggleTool(tool)}
                class="group [ flex flex-col items-center ]"
              >
                <span
                  class="[ absolute -top-11 py-1 px-2 ] [ hidden group-hover:block ]
                         [ glass-effect rounded ] [ text-sm whitespace-nowrap ]"
                >
                  {tool.name}
                </span>

                <span>
                  <img src={tool.icon_url} alt="" class="[ h-12 ]" />
                </span>
              </button>

              <span
                class:block={selectedTool === tool}
                class:hidden={selectedTool !== tool}
                class="[ mt-1 h-1 w-1 bg-stroke rounded-full ] [ absolute -bottom-2 ]"
              >
                <span class="[ sr-only ]">selected app indicator</span>
              </span>
            </div>
          {/each}
        </div>
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
