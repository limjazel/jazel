<script>
  import Button from "../Button.svelte";
  import Card from "../Card.svelte";
</script>

<Card class="[ py-10 ]">
  <span class="[ text-sm font-medium relative -top-3 ]">Buttons</span>

  <div
    class="[ mt-6 md:mt-2 flex flex-wrap lg:flex-nowrap justify-center items-start gap-10 ]"
  >
    <div>
      <h1 class="[ mb-2 tracking-tight ]">Accent buttons</h1>
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
      <h1 class="[ mb-2 tracking-tight ]">Secondary buttons</h1>
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
      <h1 class="[ mb-2 tracking-tight ]">Outline buttons</h1>
      <div class="[ flex gap-4 ]">
        <div class="[ flex flex-col items-start gap-4 ]">
          <Button type="outline" size="large">Outline</Button>
          <Button type="outline" size="base">Outline</Button>
          <Button type="outline" size="small">Outline</Button>
        </div>

        <div class="[ flex flex-col items-start gap-4 ]">
          <Button type="outline" size="large" disabled>Outline</Button>
          <Button type="outline" size="base" disabled>Outline</Button>
          <Button type="outline" size="small" disabled>Outline</Button>
        </div>
      </div>
    </div>
  </div>
</Card>
