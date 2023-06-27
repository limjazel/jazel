<script>
  import { onMount } from "svelte";
  import Folder from "../Folder.svelte";

  let cats = [
    {
      name: "ollie",
      image_url: "/images/cats/ollie.jpeg",
      description: "A photo of a yawning short hair black demon cat.",
    },
    {
      name: "lemon",
      image_url: "/images/cats/lemon.jpeg",
      description:
        "A gray and black long-haired tabby cat wearing a santa claus hat.",
    },
    {
      name: "fish",
      image_url: "/images/cats/fish.jpeg",
      description:
        "An orange long-haired tabby cat peaking behind a plant pot.",
    },
  ];

  let selectedCat;
  let isLoading = true;
  let loaded = [];

  function selectCat(cat) {
    selectedCat = cat;
    isLoading = false;
  }

  onMount(() => {
    selectedCat = cats[0];
    isLoading = false;
  });

  function prefetch(cat) {
    if (loaded.includes(cat.image_url)) {
      return;
    }

    let image = new Image();
    image.src = cat.image_url;

    loaded = [...loaded, cat.image_url];
  }
</script>

<Folder>
  <svelte:fragment slot="folder" let:openFolder>
    <button on:click={openFolder}>
      <img
        src="/images/logos/folder.webp"
        alt="mac OS icon of folder"
        class="[ h-16 ]"
      />
      <span class="[ text-sm text-pearl font-medium drop-shadow-md ]">
        Images
      </span>
    </button>
  </svelte:fragment>

  <div
    slot="folderWindow"
    let:closeFolder
    class="[ md:-left-24 flex flex-col bg-canvas text-sm ]
           [ min-w-[18rem] md:min-w-[32rem] min-h-[18rem] ]
           [ rounded-lg shadow-xl border border-zinc-300 overflow-hidden ]"
  >
    <div class="[ flex h-full ]">
      <aside
        class="[ p-3 flex flex-col items-start bg-zinc-200 ] [ min-w-[8rem] ]"
      >
        <button
          on:click={closeFolder}
          class="[ h-4 w-4 bg-red-400 rounded-full ]"
        >
          <i
            class="fa-solid fa-xmark [ text-xs text-red-700 relative -top-0.5 ]"
            aria-hidden="true"
          />
          <span class="[ sr-only ]">Close tool info</span>
        </button>

        <div class="[ mt-4 w-full ]">
          <span class="[ text-xs opacity-50 font-medium ]">Cats</span>
          <nav
            class="[ mt-1 flex flex-col ]"
            aria-label="Navigation for Images folder"
          >
            {#each cats as cat}
              <button
                type="button"
                on:click={() => selectCat(cat)}
                on:mouseover={() => prefetch(cat)}
                on:focus={() => prefetch(cat)}
                class:font-medium={cat === selectedCat}
                class="[ capitalize py-0.5 px-1 text-left hover:bg-zinc-300 ] [ rounded ]"
              >
                {cat.name}
              </button>
            {/each}
          </nav>
        </div>
      </aside>

      <div class="[ flex flex-col items-center px-8 pt-8 pb-10 w-full ]">
        {#if selectedCat}
          <div class="[ flex border-4 border-pearl shadow-md max-h-72 ]">
            {#if isLoading}
              <div
                class="[ bg-zinc-200 w-full h-full min-h-[10rem] p-2 ] [ flex items-center ]"
              >
                <span>Loading cat pic...</span>
              </div>
            {:else}
              <img
                src={selectedCat.image_url}
                alt={selectedCat.description}
                class="[ w-full object-cover ]"
              />
            {/if}
          </div>

          <span class="[ mt-2 ]">{selectedCat.name}.jpeg</span>
        {/if}
      </div>
    </div>
  </div>
</Folder>
