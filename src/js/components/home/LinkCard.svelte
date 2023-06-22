<script>
  import Link from "../Link.svelte";
  import Card from "../Card.svelte";
</script>

<Card
  class="[ py-10 min-w-[20rem] ] [ flex flex-wrap justify-between gap-y-8 ]"
>
  <div>
    <span class="[ text-sm relative -top-2 ]">Link</span>
    <p>Here is something about these links,</p>
  </div>

  <div class="[ lg:mt-10 flex flex-col gap-y-4 ]">
    <Link href="/design">I will go to design page</Link>
    <Link href="/design" external={true} class="[whitespace-nowrap ]">
      I will open design page in a new tab
    </Link>
  </div>
</Card>
