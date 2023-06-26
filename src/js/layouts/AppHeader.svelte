<script>
  import Link from "../components/Link.svelte";
</script>

<header>
  <nav
    aria-label="primary navigation"
    class="[ py-4 flex flex-wrap md:flex-nowrap items-center justify-between gap-2 md:gap-10 ]"
  >
    <Link href="/">
      <span class="sr-only">go to home</span>
      <span class="[ flex md:min-w-[12rem] relative -top-0.5 ]">
        <img
          src="/images/logos/main-logo-w-color.svg"
          alt="a hand drawn logo"
          class="[ w-full object-contain ]"
        />
      </span>
      <span class="[ sr-only ]"> Jazel Lim </span>
    </Link>

    <ul class="[ flex gap-6 ]">
      <Link href="/">home</Link>
      <Link href="/design">design</Link>
    </ul>
  </nav>
</header>
