<script>
  import Link from "../components/Link.svelte";
</script>

<header>
  <nav
    aria-label="primary navigation"
    class="[ py-4 md:py-6 flex flex-wrap items-center gap-x-10 ]"
  >
    <Link href="/">
      <span class="sr-only">go to home</span>
      <span class="font-heading text-3xl text-stroke tracking-tight">Jazel Lim</span>
    </Link>

    <Link href="/">home</Link>

    <Link href="/design">design</Link>
  </nav>
</header>
