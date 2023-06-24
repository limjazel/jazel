<script>
  import Folder from "../Folder.svelte";

  let cats = [
    { name: "ollie", image_url: "/images/cats/ollie.jpeg" },
    { name: "lemon", image_url: "/images/cats/lemon.jpeg" },
    { name: "fish", image_url: "/images/cats/fish.jpeg" },
  ];

  let selectedCat = cats[0];

  function selectCat(cat) {
    selectedCat = cat;
  }
</script>

<Folder>
  <svelte:fragment slot="folder" let:openFolder>
    <button on:click={openFolder}>
      <img
        src="/images/logos/folder.webp"
        alt="Images folder"
        class="[ h-16 ]"
      />
      <span class="[ text-sm text-pearl font-medium drop-shadow-md ]"
        >Images</span
      >
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
          <span class="[ text-sm text-zinc-400 font-medium ]">Cats</span>
          <nav class="[ mt-1 flex flex-col ]">
            {#each cats as cat}
              <button
                type="button"
                on:click={() => selectCat(cat)}
                class:font-medium={cat === selectedCat}
                class="[ capitalize py-0.5 px-1 text-left hover:bg-zinc-300 ] [ rounded ]"
              >
                {cat.name}
              </button>
            {/each}
          </nav>
        </div>
      </aside>

      <div class="[ flex flex-col items-center px-8 pt-8 pb-10 ]">
        {#if selectedCat}
          <div class="[ flex border-4 border-pearl shadow-md max-h-72 ]">
            <img
              src={selectedCat.image_url}
              alt={selectedCat.name}
              class="[ w-full object-cover ]"
            />
          </div>

          <span class="[ mt-2 ]">{selectedCat.name}.jpeg</span>
        {/if}
      </div>
    </div>
  </div>
</Folder>
