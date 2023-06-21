<script>
  export { className as class };
  let className = "";
</script>

<div class="c-card [ p-8 w-full rounded-xl shadow ] [ bg-canvas ] {className}">
  <slot />
</div>
