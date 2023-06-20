<script>
  export let href;
  export let external = false;
  export let type = "stroke";
  export { className as class };

  const baseStyle = `[ cursor-pointer underline underline-offset-2 decoration-2 ] [ font-semibold ]`;

  const types = {
    accent: "c-link--accent [ text-accent ]",
    stroke: "c-link--stroke [ text-stroke ]",
  };

  let className = "";
</script>

<a
  {href}
  on:click
  target={external ? "_blank" : "_self"}
  rel={external && "nofollow noreferrer"}
  class="c-link {baseStyle} {types[type]} {className}"
>
  <slot />
</a>
