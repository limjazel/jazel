<script>
  import Link from "../components/Link.svelte";
</script>

<nav class="[ py-4 md:py-6 flex flex-wrap items-center gap-x-10 ]">
  <a href="/">
    <span class="sr-only">go to home</span>
    <span class="font-heading text-3xl tracking-tight">Jazel Lim</span>
  </a>

  <Link href="/">
    <span>home</span>
  </Link>

  <Link href="/design">design</Link>
</nav>
