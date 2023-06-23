<script>
  import { onDestroy } from "svelte";
  import {
    computePosition,
    flip,
    offset,
    autoUpdate,
    shift,
  } from "@floating-ui/dom";

  export let placement = "bottom-start";
  export { className as class };

  let open = false;
  let folder;
  let folderWindow;
  let cleanup;
  let className = "";

  function openFolder() {
    updateFolderPosition();
    open = true;
  }

  function closeFolder() {
    open = false;
    if (typeof cleanup === "function") {
      cleanup();
    }
  }

  function updateFolderPosition() {
    cleanup = autoUpdate(folder, folderWindow, () => {
      computePosition(folder, folderWindow, {
        placement: placement,
        middleware: [flip(), offset(4)],
      }).then(({ x, y }) => {
        Object.assign(folderWindow.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      });
    });
  }

  onDestroy(() => {
    if (typeof cleanup === "function") {
      cleanup();
    }
  });
</script>

<div class="c-dropdown">
  <div bind:this={folder}>
    <slot name="folder" {openFolder} {closeFolder} />
  </div>

  <nav
    bind:this={folderWindow}
    class="[ absolute z-10 ] [ grid grid-col ] [ rounded mt-2 ] {className}"
    class:hidden={!open}
  >
    <slot name="folderWindow" {openFolder} {closeFolder} />
  </nav>
</div>
