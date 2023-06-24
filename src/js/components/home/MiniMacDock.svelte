<script>
  import { createEventDispatcher } from "svelte";

  /**
   * @type {any}
   */
  export let tools;

  /**
   * @type {any}
   */
  export let selectedTool;

  export let showInfo;

  const dispatch = createEventDispatcher();

  /**
   * @param {any} tool
   */
  function toggle(tool) {
    dispatch("toggle", { tool });
  }
</script>

<div class="[ flex justify-center ]">
  <div
    class="[ mb-1 pt-1 pb-3 px-1 ] [ glass-effect rounded-xl ] [ flex flex-wrap gap-1 justify-center ]"
  >
    {#each tools as tool (tool.name)}
      <div class="group [ flex flex-col items-center ]">
        <span
          class="[ absolute -top-11 py-1 px-2 z-10 ] [ hidden group-hover:block ]
                 [ glass-effect rounded ] [ text-sm whitespace-nowrap ]"
        >
          {#if tool.name !== "Visual Studio Code"}
            {tool.name}
          {:else}
            VS Code
          {/if}
        </span>

        <button
          on:click={() => toggle(tool)}
          class="[ flex flex-col items-center ]"
        >
          <span>
            <img src={tool.icon_url} alt="mac OS app icon for" class="[ h-12 ]" />
          </span>
          <span class="[ sr-only ]">{tool.name}</span>
        </button>

        <span
          class:block={selectedTool === tool}
          class:hidden={selectedTool !== tool || !showInfo}
          class="[ mt-1 h-1 w-1 bg-stroke rounded-full ] [ absolute -bottom-2 ]"
        >
          <span class="[ sr-only ]">selected app indicator</span>
        </span>
      </div>
    {/each}
  </div>
</div>
