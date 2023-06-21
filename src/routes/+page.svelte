<script>
  import Button from "../js/components/Button.svelte";
  import Card from "../js/components/Card.svelte";
  import CopyToClipboard from "../js/components/CopyToClipboard.svelte";
  import Dropdown from "../js/components/Dropdown.svelte";
  import Input from "../js/components/Input.svelte";
  import Link from "../js/components/Link.svelte";

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

<p class="text-3xl">
  I am a designer with experience on building web apps. I am a designer with
  experience on building web apps.I am a designer with experience on building
  web apps.
</p>

<section>
  <h1>a thing</h1>

  <Card class="[ mt-10 py-10 ]">
    <h2>Buttons</h2>

    <div class="[ flex items-start gap-x-8 ]">
      <div class="[ flex flex-col items-start gap-4 ]">
        <Button type="primary">Primary</Button>
        <Button type="primary" disabled>Primary</Button>
      </div>

      <div class="[ flex flex-col items-start gap-4 ]">
        <Button type="primary" size="small">Primary</Button>
        <Button type="primary" size="base">Primary</Button>
        <Button type="primary" size="large">Primary</Button>
      </div>

      <div class="[ flex flex-col items-start gap-4 ]">
        <Button type="neutral">Neutral</Button>
        <Button type="neutral" disabled>Neutral</Button>
      </div>

      <div class="[ flex flex-col items-start gap-4 ]">
        <Button type="neutral" size="small">Neutral</Button>
        <Button type="neutral" size="base">Neutral</Button>
        <Button type="neutral" size="large">Neutral</Button>
      </div>
    </div>
  </Card>

  <div class="[ mt-10 py-10 ]">
    <h2>Link</h2>

    <Link href="/design">I will go to design page</Link>
    <Link href="/design" external={true} type="accent" class="[ bg-stroke ]"
      >I will open a new tab to design page</Link
    >
  </div>

  <div class="[ mt-10 py-10 ]">
    <h2>Input</h2>

    <div class="[ grid md:grid-cols-3 gap-4 ]">
      <div>
        <label for="input" class="[ block mb-1 text-sm font-semibold ]">
          A normal input box
        </label>
        <Input id="input" name="an-input" placeholder="I am an input" />
      </div>

      <div>
        <label
          for="readonly-input"
          class="[ block mb-1 text-sm font-semibold ]"
        >
          A readonly input box
        </label>
        <Input
          id="readonly-input"
          name="an-input"
          placeholder="I am a readonly input"
          readonly={true}
        />
      </div>

      <div>
        <label for="error-input" class="[ block mb-1 text-sm font-semibold ]">
          An input box with an error message
        </label>
        <Input
          id="error-input"
          name="an-input"
          placeholder="I display an error message"
          error={true}
        />
      </div>
    </div>
  </div>

  <div class="[ mt-10 py-10 ]">
    <h2>Dropdown</h2>

    <p>
      you can also close dropdown menu when you press escape key or click
      outside the menu.
    </p>

    <Dropdown>
      <div slot="trigger" let:toggleMenu>
        <Button on:click={toggleMenu}>
          {#if !selected}
            Select an option
          {:else}
            {selected}
          {/if}
        </Button>
      </div>

      <nav
        slot="menu"
        let:closeMenu
        class="[ px-6 py-5 min-w-[14rem] ] [ bg-stroke ]"
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
              class="[ py-1 text-sm text-canvas hover:text-accent block cursor-pointer ] [ peer-focus:ring-2 ring-accent rounded ]"
            >
              {option.value}
            </label>
          </div>
        {/each}
      </nav>
    </Dropdown>
  </div>

  <div class="[ mt-10 py-10 ]">
    <h2>Copy to clipboard</h2>

    <div class="[ flex ]">
      <CopyToClipboard let:copy value="https://jazellim.com">
        <Button on:click={copy}>Copy</Button>
      </CopyToClipboard>
    </div>
  </div>
</section>
