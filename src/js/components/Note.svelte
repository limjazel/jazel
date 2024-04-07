<script>
  export { className as class };
  let className = "";
</script>

<div
  class="[ bg-accent ] [ max-w-[360px] ] [ transition hover:rotate-0 hover:-translate-y-4 ] [ shadow-lg ] [ relative ] {className}"
>
  <slot />
</div>
