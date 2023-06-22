<script>
  import Button from "../Button.svelte";
  import CopyToClipboard from "../CopyToClipboard.svelte";
  import Card from "../Card.svelte";
</script>

<Card class="[ py-10 ]">
  <span class="[ text-sm relative -top-2 ]">Copy to clipboard</span>
  <p>something about copy to clipboard</p>

  <div class="[ mt-10 flex ]">
    <CopyToClipboard let:copy value="https://jazellim.com">
      <Button on:click={copy} class="[ -ml-1 rounded-l-none  ]">Copy</Button>
    </CopyToClipboard>
  </div>
</Card>
