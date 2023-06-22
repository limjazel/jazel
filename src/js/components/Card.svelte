<script>
  export let color = "pearl";
  export { className as class };
  let className = "";

  const colors = {
    canvas: "bg-canvas",
    pearl: "bg-pearl",
  };
</script>

<div
  class="c-card [ p-8 w-full rounded-xl shadow ] {colors[color]} {className}"
>
  <slot />
</div>
