<script>
  import Button from "../components/Button.svelte";
  import Link from "../components/Link.svelte";

  let navIsOpen = false;

  function openNav() {
    navIsOpen = true;
  }

  function closeNav() {
    navIsOpen = false;
  }

  function handleKeydown(event) {
    if (navIsOpen && event.key === "Escape") {
      closeNav();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<header>
  <nav
    aria-label="primary navigation"
    class="[ py-4 flex flex-wrap md:flex-nowrap items-center justify-between gap-2 md:gap-10 ]"
  >
    <Link href="/">
      <span class="sr-only">go to home</span>
      <span class="[ flex max-w-[8rem] md:min-w-[10rem] relative -top-0.5 ]">
        <img
          src="/images/logos/main-logo-w-color.svg"
          alt="a hand drawn logo"
          class="[ w-full object-contain ]"
        />
      </span>
      <span class="[ sr-only ]"> Jazel Lim </span>
    </Link>

    <span class="[ hidden md:flex items-center gap-6 ]">
      <Link href="/">home</Link>
      <Link href="/design">design</Link>
      <Link href="https://github.com/limjazel" class="group [ px-1 ]">
        <span class="[ sr-only ]">Github profile</span>
        <i
          class="fa-brands fa-github-alt [ group-hover:text-stroke text-lg relative top-px ]"
          aria-hidden="true"
        />
      </Link>
    </span>
  </nav>

  <div class="[ fixed bottom-0 inset-x-0 z-10 md:hidden ]">
    <div
      class="[ fixed inset-0 bg-stroke/50 z-[21] ]"
      class:hidden={!navIsOpen}
    />

    <div class="[ z-30 absolute bottom-3 right-3 ]" class:hidden={navIsOpen}>
      <Button
        type="neutral"
        size="small"
        on:click={openNav}
        class="[ py-2 ] [ block md:hidden shadow-md ]"
      >
        <i class="fa-solid fa-bars" aria-hidden="true" />
        <span class="[ sr-only ]">Open navigation</span>
      </Button>
    </div>

    <div
      class="z-30 absolute bottom-0 [ w-full shadow-lg ]"
      class:hidden={!navIsOpen}
    >
      <div
        class="[ flex flex-col items-start bg-pearl rounded-t-lg ] [ px-6 pt-6 pb-20 ]"
      >
        <Button
          size="small"
          type="neutral"
          on:click={closeNav}
          class="[ py-2 ] [ absolute bottom-3 right-3 ]"
        >
          <i class="fa-solid fa-xmark" aria-hidden="true" />
          <span class="[ sr-only ]">Close navigation</span>
        </Button>

        <nav class="[ grid gap-1 ]">
          <Link href="/" class="[ py-1 ]">home</Link>
          <Link href="/design" class="[ py-1 ]">design</Link>
          <Link href="https://github.com/limjazel" class="group [ px-1 ]">
            <span class="[ sr-only ]">Github profile</span>
            <i
              class="fa-brands fa-github-alt [ group-hover:text-stroke text-lg ] [ -ml-1 mt-1 py-1 ]"
              aria-hidden="true"
            />
          </Link>
        </nav>
      </div>
    </div>
  </div>
</header>
