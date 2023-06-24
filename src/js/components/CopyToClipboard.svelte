<script>
  import { onMount } from "svelte";
  import { scale } from "svelte/transition";

  export let id = "";
  export let name = "";
  export let value = "";
  export let placeholder = "";
  export let timeout = 5000;

  let timer;
  let notification = false;
  let notificationTitle = "";
  let notificationMessage = "";

  function copy() {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(value)
        .then(() => {
          notification = true;
          notificationTitle = "URL copied";
          notificationMessage = "The URL has been copied to your clipboard.";
        })
        .catch(() => {
          notification = true;
          notificationTitle = "Something went wrong";
          notificationMessage =
            "Could not copy the URL to the clipboard, please try again.";
        });
    }
    timer = setTimeout(() => close(), timeout);
  }

  function close() {
    notification = false;
  }

  function handleMouseEnter() {
    clearTimeout(timer);
  }

  function handleMouseLeave() {
    timer = setTimeout(() => close(), timeout);
  }

  onMount(() => {
    timer = setTimeout(() => close(), timeout);
  });
</script>

<label for={id} class="[ sr-only ]"> Copy URL </label>

<input
  {id}
  {name}
  {value}
  {placeholder}
  readonly
  class="[ block w-full rounded outline-none px-5 py-2 ]
         [ border-2 bg-canvas ]
         [ placeholder-zinc-400 focus:ring-2 ring-offset-2 ring-stroke ]"
/>

<slot {copy} />

{#if notification}
  <div
    class="[ fixed bottom-2 right-2 px-4 pb-4 max-w-[340px] md:max-w-[360px] ] [ z-20 ]"
  >
    <div
      on:mouseenter={handleMouseEnter}
      on:mouseleave={handleMouseLeave}
      on:focus={handleMouseEnter}
      on:blur={handleMouseLeave}
      transition:scale={{ duration: 300 }}
      class="[ flex flex-col ] [ bg-white rounded shadow-md px-6 py-6 ]"
    >
      <button
        on:click={() => (notification = false)}
        class="[ absolute -mt-4 right-2 p-2 rounded-full h-8 w-8 ] [ hover:bg-neutral ] [ flex items-center justify-center ]"
      >
        <span class="[ sr-only ]">Close notification</span>
        <i aria-hidden="true" class="fa-solid fa-xmark [ text-shade ]" />
      </button>

      <h5 class="[ font-bold font-heading text-lg tracking-tight ]">
        {notificationTitle}
      </h5>
      <span>{notificationMessage}</span>
    </div>
  </div>
{/if}
