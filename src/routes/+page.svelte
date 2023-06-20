<script>
  import Button from "../js/components/Button.svelte";
  import Input from "../js/components/Input.svelte";
  import Link from "../js/components/Link.svelte";
</script>

<p class="text-3xl">
  I am a designer with experience on building web apps. I am a designer with
  experience on building web apps.I am a designer with experience on building
  web apps.
</p>

<div class="[ mt-10 py-10 ]">
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
</div>

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
    <Input id="input" name="an-input" placeholder="I am an input" />
    <Input
      id="input"
      name="an-input"
      placeholder="I am a readonly input"
      readonly={true}
    />
    <Input
      id="input"
      name="an-input"
      placeholder="I display an error message"
      error={true}
    />
  </div>
</div>
