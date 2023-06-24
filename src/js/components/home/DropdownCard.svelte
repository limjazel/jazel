<script>
  import Button from "../Button.svelte";
  import Dropdown from "../Dropdown.svelte";
  import Card from "../Card.svelte";

  let selected = "";

  let options = [
    {
      id: "option-1",
      value: "Option 1",
    },
    {
      id: "option-2",
      value: "Option 2",
    },
  ];

  function selectOption(event) {
    selected = event.target.value;
  }
</script>

<Card class="[ py-10 ] [ flex flex-wrap items-center justify-between gap-y-8 ]">
  <div class="[ max-w-lg ]">
    <span class="[ text-sm font-medium relative -top-3 ]">Dropdown</span>
    <p class="[ text-shade relative -top-1 ]">
      You can also close dropdown menu when you press escape key or click
      outside the menu.
    </p>
  </div>

  <div>
    <Dropdown placement="bottom-start">
      <svelte:fragment slot="trigger" let:toggleMenu>
        <Button on:click={toggleMenu}>
          {#if !selected}
            Select an option
          {:else}
            {selected}
          {/if}
        </Button>
      </svelte:fragment>

      <nav
        slot="menu"
        let:closeMenu
        class="[ px-6 py-5 min-w-[12rem] rounded ] [ bg-stroke/95 shadow-md ]"
        aria-label="sample dropdown options"
      >
        {#each options as option (option.id)}
          <div>
            <input
              type="radio"
              bind:group={selected}
              id={option.id}
              name={option.id}
              on:click={selectOption}
              on:click={closeMenu}
              value={option.value}
              class="[ peer fixed opacity-0 ]"
            />
            <label
              for={option.id}
              class="[ py-1 text-sm text-canvas hover:text-accent font-normal block cursor-pointer ] [ peer-focus:ring-2 ring-accent rounded ]"
            >
              {option.value}
            </label>
          </div>
        {/each}
      </nav>
    </Dropdown>
  </div>
</Card>
