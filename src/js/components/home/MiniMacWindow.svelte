<script>
  import { createEventDispatcher } from "svelte";

  /**
   * @type {{ name: any; description: any; extensions: any; }}
   */
  export let selectedTool;

  const dispatch = createEventDispatcher();

  function close() {
    dispatch("close");
  }
</script>

<div
  class="[ mx-6 md:mx-auto ] [ bg-pearl min-h-[16rem] max-w-[40rem] ]
         [ rounded-lg shadow-lg overflow-hidden ]"
>
  <header class="[ p-2 flex items-center bg-zinc-200 ]">
    <button on:click={close} class="[ h-4 w-4 bg-red-400 rounded-full ]">
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
      <div class="[ mt-10 flex flex-col gap-1 ] [ text-zinc-500 text-sm ]">
        <span class="[ font-medium ]">Plugins I use:</span>
        <span>{selectedTool.extensions}</span>
      </div>
    {/if}
  </div>
</div>
