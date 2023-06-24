<script>
  import { clickOutside } from "../actions/on-click-outside";
  import { offset, shift, flip } from "svelte-floating-ui/dom";
  import { createFloatingActions } from "svelte-floating-ui";

  export let placement = "bottom-end";
  export let middleware = [flip(), offset(4), shift({ padding: 4 })];
  export { className as class };

  const [floatingRef, floatingContent] = createFloatingActions({
    strategy: "absolute",
    placement: placement,
    middleware: middleware,
  });

  let open = false;
  let selected = "";
  let trigger;
  let menu;
  let className = "";

  function toggleMenu() {
    open = !open;
  }

  function closeMenu() {
    open = false;
  }

  function handleKeydown(event) {
    if (open && event.key === "Escape") {
      closeMenu();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div use:clickOutside on:click-outside={closeMenu} class="c-dropdown">
  <div bind:this={trigger} use:floatingRef>
    <slot name="trigger" {toggleMenu} {closeMenu} />
  </div>

  <div
    bind:this={menu}
    use:floatingContent
    class="[ absolute z-10 ] [ grid grid-col max-w-[16rem] ] [ rounded mt-2 ] {className}"
    class:hidden={!open}
  >
    <slot name="menu" {toggleMenu} {closeMenu} />
  </div>
</div>
