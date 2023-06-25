<script>
  import { createEventDispatcher } from "svelte";
  import Button from "./Button.svelte";

  const dispatch = createEventDispatcher();

  function closeDialog() {
    dispatch("close");
  }
</script>

<div
  autofocus
  tabindex="0"
  role="dialog"
  class="c-dialog
         [ fixed top-0 left-0 z-30 h-full w-full bg-stroke/50 backdrop-blur ]
         [ flex flex-col flex-nowrap justify-center items-center ]
         [ overflow-y-auto overscroll-auto ]"
>
  <div class="[ max-w-screen-md lg:max-w-screen-xl max-h-[70%] z-40 ]">
    <slot />
  </div>
</div>

<Button
  on:click={closeDialog}
  class="group [ py-4 ] [ fixed top-6 right-6 z-[31] ]"
>
  <i
    class="fa-solid fa-xmark [ text-accent group-hover:text-stroke ]"
    aria-hidden="true"
  />
  <span class="[ sr-only ]">close dialog</span>
</Button>
