<script>
  import { offset, shift } from "svelte-floating-ui/dom";
  import { createFloatingActions } from "svelte-floating-ui";

  export let placement = "bottom-start";
  export { className as class };

  const [floatingRef, floatingContent] = createFloatingActions({
    strategy: "absolute",
    placement: placement,
    middleware: [offset(6), shift({ padding: 10 })],
  });

  let open = false;
  let className = "";

  function openFolder() {
    open = true;
  }

  function closeFolder() {
    open = false;
  }
</script>

<div class="c-dropdown">
  <div use:floatingRef>
    <slot name="folder" {openFolder} {closeFolder} />
  </div>

  <nav
    use:floatingContent
    class="[ absolute ] [ grid grid-col ] [ rounded mt-2 ] {className}"
    class:hidden={!open}
  >
    <slot name="folderWindow" {openFolder} {closeFolder} />
  </nav>
</div>
