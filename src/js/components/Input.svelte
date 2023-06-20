<script>
  import { createEventDispatcher } from "svelte";

  export let id;
  export let name;
  export let value = "";
  export let type = "text";
  export let placeholder = "";
  export let error = false;
  export let readonly = false;
  export let size = "base";
  export { className as class };

  const Sizes = {
    none: "",
    base: "c-input--base [ px-5 py-3  ]",
  };

  const dispatch = createEventDispatcher();

  function handleInput(event) {
    value = event.target.value;
    dispatch("input", { value });
  }

  let className = "";
  let element;
</script>

<input
  {id}
  {name}
  {value}
  {type}
  {placeholder}
  {readonly}
  bind:this={element}
  on:input={handleInput}
  class="c-input [ block w-full rounded outline-none ]
        [ border border-stroke placeholder-neutral-500 focus:ring-2 ring-offset-2 ring-accent2 ]
        {Sizes[size]} {className}"
/>
