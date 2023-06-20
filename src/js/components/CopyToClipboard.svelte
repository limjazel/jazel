<script>
  export let value = "";
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
  <span class="[ font-semibold ]">{notificationTitle}</span>
  <span>{notificationMessage}</span>
{/if}

<label id="copy-to-clipboard" for="copy-to-clipboard" class="[ sr-only ]">
  Copy URL
</label>

<input type="text" {value} readonly />

<slot {copy} />
