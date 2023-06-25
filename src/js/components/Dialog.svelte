<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function closeDialog() {
    dispatch("close");
  }
</script>

<div
  role="dialog"
  tabindex="0"
  class="c-dialog
         [ fixed top-0 left-0 z-30 h-full w-full bg-stroke/50 ]
         [ flex flex-col flex-nowrap justify-center items-center ]
         [ overflow-y-auto overscroll-contain ]"
>
  <button on:click={closeDialog} class="bg-white fixed top-0 right-0 z-[31]">
    close dialog
  </button>

  <div class="[ max-w-screen-md lg:max-w-screen-xl max-h-[70%] z-40 ]">
    <slot />
  </div>
</div>
