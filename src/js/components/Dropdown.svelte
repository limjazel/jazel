<script>
  import { clickOutside } from "../actions/on-click-outside";

  let open = false;
  let selected = "";
  let menu;

  function toggleMenu() {
    open = !open;
  }

  function closeMenu() {
    open = false;
  }
</script>

<div use:clickOutside on:click-outside={() => (open = false)}>
  <slot name="trigger" {toggleMenu} {closeMenu} />

  <nav
    bind:this={menu}
    class="[ absolute z-10 ] [ grid grid-col max-w-[16rem] ] [ bg-canvas rounded mt-2 ]"
    class:hidden={!open}
  >
    <slot name="menu" {toggleMenu} {closeMenu} />
  </nav>
</div>
