<script>
  import Button from "../Button.svelte";
  import CopyToClipboard from "../CopyToClipboard.svelte";
  import Card from "../Card.svelte";
</script>

<Card class="[ py-10 ]">
  <span class="[ text-sm font-medium relative -top-3 ]">Copy to clipboard</span>
  <p class="[ text-shade relative -top-1 ]">Copy my website link for no reason to see a notification pop up!</p>

  <div class="[ mt-8 flex ]">
    <CopyToClipboard let:copy id="copy-to-clipboard-sample" name="copy-to-clipboard-sample" value="https://jazellim.com" placeholder="Website link">
      <Button on:click={copy} class="[ -ml-1 rounded-l-none  ]">Copy</Button>
    </CopyToClipboard>
  </div>
</Card>
