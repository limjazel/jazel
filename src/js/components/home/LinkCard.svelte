<script>
  import Link from "../Link.svelte";
  import Card from "../Card.svelte";
  import SheepImage from "./SheepImage.svelte";
</script>

<Card
  class="[ py-10 min-w-[20rem] ] [ flex flex-wrap justify-between gap-y-8 ]"
>
  <div>
    <span class="[ text-sm font-medium relative -top-3 ]">Link</span>
    <p class="[ text-shade relative -top-1 ]">Same 'ol links.</p>
  </div>

  <div class="[ flex flex-col gap-y-4 w-full ]">
    <Link
      href="https://en.wikipedia.org/wiki/Valais_Blacknose"
      class="mb-4 mx-auto"
    >
      <div aria-hidden="true">
        <SheepImage />
      </div>

      <span class="[ sr-only ]">
        Opens link to Valais Blacknose sheep wikipedia page
      </span>
    </Link>

    <Link href="/design">I will go to design page</Link>
    <Link href="/design" external={true} class="[whitespace-nowrap ]">
      I will open design page in a new tab
    </Link>
  </div>
</Card>
