<script>
  import Input from "../Input.svelte";
  import Card from "../Card.svelte";
</script>

<Card class="[ py-10 ]">
  <span class="[ text-sm font-medium relative -top-3 ]">Input</span>

  <div class="[ mt-6 grid md:grid-cols-2 gap-4 ]">
    <div>
      <label for="input" class="[ block mb-1 text-sm font-semibold ]">
        A normal input box
      </label>
      <Input id="input" name="an-input" placeholder="I am an input" />
    </div>

    <div>
      <label for="readonly-input" class="[ block mb-1 text-sm font-semibold ]">
        A readonly input box
      </label>
      <Input
        id="readonly-input"
        name="an-input"
        placeholder="I am a readonly input"
        readonly={true}
      />
    </div>
  </div>
</Card>
