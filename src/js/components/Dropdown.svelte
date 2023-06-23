<script>
  import { clickOutside } from "../actions/on-click-outside";
  import { onDestroy } from "svelte";
  import {
    computePosition,
    flip,
    offset,
    autoUpdate,
    shift,
  } from "@floating-ui/dom";

  export let placement = "bottom-start";
  export let middleware = [flip(), offset(4), shift({ padding: 4 })];
  export { className as class };

  let open = false;
  let selected = "";
  let trigger;
  let menu;
  let cleanup;
  let className = "";

  function toggleMenu() {
    updateMenuPosition();
    open = !open;
  }

  function closeMenu() {
    open = false;
    if (typeof cleanup === "function") {
      cleanup();
    }
  }

  function handleKeydown(event) {
    if (open && event.key === "Escape") {
      closeMenu();
    }
  }

  function updateMenuPosition() {
    cleanup = autoUpdate(trigger, menu, () => {
      computePosition(trigger, menu, {
        placement: placement,
        middleware: middleware,
      }).then(({ x, y }) => {
        Object.assign(menu.style, {
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

<svelte:window on:keydown={handleKeydown} />

<div use:clickOutside on:click-outside={closeMenu} class="c-dropdown">
  <div bind:this={trigger}>
    <slot name="trigger" {toggleMenu} {closeMenu} />
  </div>

  <nav
    bind:this={menu}
    class="[ absolute z-10 ] [ grid grid-col max-w-[16rem] ] [ rounded mt-2 ] {className}"
    class:hidden={!open}
  >
    <slot name="menu" {toggleMenu} {closeMenu} />
  </nav>
</div>
