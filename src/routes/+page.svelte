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

<h1 class="text-3xl">
  I am a designer with experience on building web apps. I am a designer with
  experience on building web apps.I am a designer with experience on building
  web apps.
</h1>

<section class="[ mt-20 ]">
  <h1 class="[ text-3xl ]">I am a title</h1>

  <div class="[ mt-10 grid gap-10 ]">
    <Card class="[ py-10 ]">
      <span class="[ text-sm relative -top-2 ]">Buttons</span>
      <p>Here is something about these buttons,</p>

      <div class="[ mt-10 flex flex-wrap md:flex-nowrap items-start gap-10 ]">
        <div>
          <h3 class="[ mb-2 tracking-tight ]">Accent buttons</h3>
          <div class="[ flex gap-4 ]">
            <div class="[ flex flex-col items-start gap-4 ]">
              <Button type="primary" size="large">Primary</Button>
              <Button type="primary" size="base">Primary</Button>
              <Button type="primary" size="small">Primary</Button>
            </div>

            <div class="[ flex flex-col items-start gap-4 ]">
              <Button type="primary" size="large" disabled>Primary</Button>
              <Button type="primary" size="base" disabled>Primary</Button>
              <Button type="primary" size="small" disabled>Primary</Button>
            </div>
          </div>
        </div>

        <div>
          <h3 class="[ mb-2 tracking-tight ]">Secondary buttons</h3>
          <div class="[ flex gap-4 ]">
            <div class="[ flex flex-col items-start gap-4 ]">
              <Button type="neutral" size="large">Neutral</Button>
              <Button type="neutral" size="base">Neutral</Button>
              <Button type="neutral" size="small">Neutral</Button>
            </div>

            <div class="[ flex flex-col items-start gap-4 ]">
              <Button type="neutral" size="large" disabled>Neutral</Button>
              <Button type="neutral" size="base" disabled>Neutral</Button>
              <Button type="neutral" size="small" disabled>Neutral</Button>
            </div>
          </div>
        </div>
        
        <div>
          <h3 class="[ mb-2 tracking-tight ]">Outline buttons</h3>
          <div class="[ flex gap-4 ]">
            <div class="[ flex flex-col items-start gap-4 ]">
              <Button type="outline" size="large">Neutral</Button>
              <Button type="outline" size="base">Neutral</Button>
              <Button type="outline" size="small">Neutral</Button>
            </div>

            <div class="[ flex flex-col items-start gap-4 ]">
              <Button type="outline" size="large" disabled>Neutral</Button>
              <Button type="outline" size="base" disabled>Neutral</Button>
              <Button type="outline" size="small" disabled>Neutral</Button>
            </div>
          </div>
        </div>

      </div>
    </Card>

    <Card class="[ py-10 min-w-[20rem] ]">
      <span class="[ text-sm relative -top-2 ]">Link</span>
      <p>Here is something about these links,</p>

      <div class="[ mt-10 flex flex-col gap-y-4 ]">
        <Link href="/design">I will go to design page</Link>
        <Link href="/design" external={true} class="[whitespace-nowrap ]">
          I will open design page in a new tab
        </Link>
      </div>
    </Card>

    <Card class="[ py-10 ]">
      <span class="[ text-sm relative -top-2 ]">Input</span>
      <p>Here is something about these inputs,</p>

      <div class="[ mt-10 grid md:grid-cols-3 gap-4 ]">
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

        <!-- <div>
          <label for="error-input" class="[ block mb-1 text-sm font-semibold ]">
            An input box with an error message
          </label>
          <Input
            id="error-input"
            name="an-input"
            placeholder="I display an error message"
            error={true}
          />
        </div> -->
      </div>
    </Card>

    <Card class="[ py-10 ]">
      <span class="[ text-sm relative -top-2 ]">Dropdown</span>
      <p>
        you can also close dropdown menu when you press escape key or click
        outside the menu.
      </p>

      <div class="[ mt-10 ]">
        <Dropdown>
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

    <Card class="[ py-10 ]">
      <span class="[ text-sm relative -top-2 ]">Copy to clipboard</span>
      <p>something about copy to clipboard</p>

      <div class="[ mt-10 flex ]">
        <CopyToClipboard let:copy value="https://jazellim.com">
          <Button on:click={copy} class="[ -ml-1 rounded-l-none  ]">Copy</Button>
        </CopyToClipboard>
      </div>
    </Card>
  </div>
</section>
