<script>
  export { className as class };
  let className = "";
</script>

<div class="[ flex flex-col items-center ] [ px-6 ] max-w-[52rem] {className}">
  <slot />
</div>
