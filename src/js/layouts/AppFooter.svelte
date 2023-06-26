<script>
  import Container from "../components/Container.svelte";
  import Link from "../components/Link.svelte";
</script>

<footer>
  <Container class="[ py-6 ]">
    <div class="[ flex flex-wrap justify-between items-center gap-3 ]">
      <Link href="/">
        <span class="sr-only">go to home</span>
        <span class="[ flex md:w-[10rem] relative -top-0.5 ]">
          <img
            src="/images/logos/main-logo-w-color.svg"
            alt="a hand drawn logo"
            class="[ w-full object-contain ]"
          />
        </span>
        <span class="[ sr-only ]"> Jazel Lim </span>
      </Link>

      <span class="[ text-sm text-zinc-600 ]">Made with Svelte Kit, Tailwind CSS, Floating UI, and Fuse.js.</span>
    </div>
  </Container>
</footer>
