<script>
  export let id = "";
  export let name = "";
  export let value = "";
  export { className as class };

  let className;
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
</script>

{#if notification}
  <div>
    <span class="[ font-semibold ]">{notificationTitle}</span>
    <span>{notificationMessage}</span>
  </div>
{/if}

<label for={id} class="[ sr-only ]"> Copy URL </label>

<input
  {id}
  {name}
  {value}
  readonly
  class="[ block w-full rounded outline-none px-5 ]
         [ border border-shade bg-canvas ]
         [ placeholder-zinc-400 focus:ring-2 ring-offset-2 ring-stroke ]"
/>

<slot {copy} />
