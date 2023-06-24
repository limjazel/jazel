<script>
  import Button from "../Button.svelte";
  import CopyToClipboard from "../CopyToClipboard.svelte";
  import Card from "../Card.svelte";
</script>

<Card class="[ py-10 ]">
  <span class="[ text-sm relative -top-2 ]">Copy to clipboard</span>
  <p>something about copy to clipboard</p>

  <div class="[ mt-10 flex ]">
    <CopyToClipboard let:copy id="copy-to-clipboard-sample" name="copy-to-clipboard-sample" value="https://jazellim.com" placeholder="Website link">
      <Button on:click={copy} class="[ -ml-1 rounded-l-none  ]">Copy</Button>
    </CopyToClipboard>
  </div>
</Card>
