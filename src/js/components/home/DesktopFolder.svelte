<script>
  import Folder from "../Folder.svelte";
</script>

<Folder>
  <svelte:fragment slot="folder" let:openFolder>
    <button on:click={openFolder} class="bg-red-200 p-4"> I am a foler </button>
  </svelte:fragment>

  <div
    slot="folderWindow"
    let:closeFolder
    class="[ z-20 md:-left-24 flex flex-col min-w-[16rem] md:min-w-[24rem] ]
           [ rounded-lg shadow-lg overflow-hidden ]"
  >
    <header class="[ p-2 flex items-center bg-zinc-200 ]">
      <button
        on:click={closeFolder}
        class="[ h-4 w-4 bg-red-400 rounded-full ]"
      >
        <i
          class="fa-solid fa-xmark [ text-xs text-red-700 relative -top-1 ]"
          aria-hidden="true"
        />
        <span class="[ sr-only ]">Close tool info</span>
      </button>
    </header>

    <div class="[ flex flex-col px-10 pt-10 pb-12 ] [ bg-canvas ]">
      <span> am folder window</span>
    </div>
  </div>
</Folder>
