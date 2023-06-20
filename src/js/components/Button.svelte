<script>
  export let size = "base";
  export let type = "primary";
  export let submit = false;
  export let role = "";
  export let disabled = false;
  export let tabindex = undefined;
  export { className as class };

  const baseStyle = `
    [ border rounded inline-flex items-center justify-center ]
    [ outline-none focus:ring-2 ring-offset-2 ring-accent2 ]
    [ transition-colors duration-100 ease-in-out ]
  `;

  const sizes = {
    none: "",
    base: "c-button--base [ px-5 py-2 font-semibold ]",
    small: "c-button--small [ px-3 py-1 font-semibold text-sm ]",
    large:
      "c-button--large [ px-8 py-3 font-semibold text-lg tracking-tight w-full flex ]",
  };

  const types = {
    none: "",
    primary:
      "c-button--primary [ bg-stroke text-accent border-stroke ] [ hover:bg-accent hover:text-stroke hover:border-accent ]",
    accent:
      "c-button--accent [ bg-accent text-stroke border-accent ] [ hover:bg-white hover:text-stroke hover:border-white ]",
    neutral:
      "c-button--neutral [ bg-neutral text-stroke border-neutral ] [ hover:bg-[#B6AE9D] ] [ focus:bg-[#B6AE9D] ]",
  };

  let className = "";
</script>

<button
  type={submit ? "submit" : "button"}
  {disabled}
  {tabindex}
  on:click
  class="c-button {className} {baseStyle} {sizes[size]} {types[type]}"
  class:opacity-50={disabled}
  class:pointer-events-none={disabled}
  role={role || "button"}
>
  <slot />
</button>
