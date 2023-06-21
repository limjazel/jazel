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
    base: "c-input--base [ px-5 py-3 ]",
  };

  const dispatch = createEventDispatcher();

  function handleInput(event) {
    value = event.target.value;
    dispatch("input", { value });
  }

  let className = "";
</script>

<span>
  <input
    {id}
    {name}
    {value}
    {type}
    {placeholder}
    {readonly}
    on:input={handleInput}
    class:c-input--error={error}
    class:border-red-600={error}
    class:ring-red-600={error}
    class:c-input--readonly={readonly}
    class:bg-canvas={readonly}
    class:cursor-not-allowed={readonly}
    class="c-input
        [ block w-full rounded outline-none ]
        [ border border-2 placeholder-zinc-400 focus:ring-2 ring-offset-2 ring-stroke ]
        {Sizes[size]} {className}"
  />

  {#if error}
    <span class="[ text-sm text-red-600 ]">
      I am an example of an error message.</span
    >
  {/if}
</span>
