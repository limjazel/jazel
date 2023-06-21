<script>
  import { onMount } from "svelte";
  import { scale } from "svelte/transition"

  export let id = "";
  export let name = "";
  export let value = "";
  export let timeout = 3000;

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

{#if notification}
  <div
    class="[ fixed bottom-0 right-0 px-4 pb-4 max-w-[340px] md:max-w-[360px] ]"
  >
    <div
      on:mouseenter={handleMouseEnter}
      on:mouseleave={handleMouseLeave}
      transition:scale={{ duration: 300 }}
      class="[ flex flex-col ] [ bg-canvas rounded shadow px-8 py-5 ]"
    >
      <button
        on:click={() => (notification = false)}
        class="[ absolute -mt-3 right-6 p-2 bg-red-100 ]">x</button
      >
      <span class="[ font-bold ]">{notificationTitle}</span>
      <span>{notificationMessage}</span>
    </div>
  </div>
{/if}

<label for={id} class="[ sr-only ]"> Copy URL </label>

<input
  {id}
  {name}
  {value}
  readonly
  class="[ block w-full rounded outline-none px-5 py-3 ]
         [ border border-2 bg-canvas ]
         [ placeholder-zinc-400 focus:ring-2 ring-offset-2 ring-stroke ]"
/>

<slot {copy} />
