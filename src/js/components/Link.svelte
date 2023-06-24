<script>
  export let href;
  export let external = false;
  export let type = "stroke";
  export { className as class };

  const baseStyle = `[ cursor-pointer hover:underline underline-offset-2 decoration-2 ]
                    [ focus:ring-2 ring-offset-2 ring-stroke ] 
                    [ font-medium rounded ]`;

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
