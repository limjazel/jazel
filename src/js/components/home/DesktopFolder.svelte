<script>
  import Folder from "../Folder.svelte";
</script>

<Folder>
  <svelte:fragment slot="folder" let:openFolder>
    <button on:click={openFolder}>
      <img
        src="src/images/logos/folder.webp"
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
    class="[ z-20 md:-left-24 flex flex-col bg-canvas text-sm ] 
           [ min-w-[16rem] md:min-w-[24rem] min-h-[18rem] ]
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

        <div class="[ mt-4 ]">
          <span class="[ text-sm text-zinc-400 font-medium ]">Cats</span>
          <nav class="[ mt-1 flex flex-col items-start ]">
            <button>Ollie</button>
            <button>Lemon</button>
            <button>Fish</button>
          </nav>
        </div>
      </aside>

      <div class="[ flex flex-col px-10 pt-10 pb-12 ] [ w-full ]">
        <span> am folder window</span>
      </div>
    </div>
  </div>
</Folder>
