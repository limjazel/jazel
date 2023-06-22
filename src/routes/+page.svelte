<script>
  import Container from "../js/components/Container.svelte";
  import Search from "../js/components/fishSearch/Search.svelte";
  import ButtonCard from "../js/components/home/ButtonCard.svelte";
  import CopyToClipboardCard from "../js/components/home/CopyToClipboardCard.svelte";
  import DropdownCard from "../js/components/home/DropdownCard.svelte";
  import InputCard from "../js/components/home/InputCard.svelte";
  import LinkCard from "../js/components/home/LinkCard.svelte";

  export let data
</script>

<!-- banner -->
<Container>
  <div class="[ flex flex-wrap items-center lg:justify-between min-h-[60vh] ]">
    <div class="[ max-w-2xl py-20 ]">
      <h1 class="[ text-6xl ]">Hello! I am a sturgeon.</h1>
      <p class="[ mt-4 text-xl leading-relaxed ]">
        I am a designer with experience on building web apps. I am a designer
        with experience on building web apps.I am a designer with experience on
        building web apps.
      </p>
    </div>

    <img
      src="https://placehold.co/400"
      alt="sample banner photo"
      class="[ mx-auto lg:mx-0 ]"
    />
  </div>
</Container>


<section>
  <Container>
    <h1 class="text-2xl">Searchable something! Wow!</h1>
    <Search {data}/>
  </Container>
</section>

<section class="[ py-20 ]">
  <Container>
    <h1 class="[ text-5xl ]">I am a title</h1>

    <div class="[ mt-10 grid gap-6 grid-cols-3 ]">
      <div class="col-span-3">
        <ButtonCard />
      </div>

      <div class="[ col-span-3 lg:col-span-1 ] [ flex items-stretch ]">
        <LinkCard />
      </div>

      <div class="col-span-3 lg:col-span-2 grid gap-6">
        <DropdownCard />

        <InputCard />
      </div>

      <div class="[ col-span-3 ]">
        <CopyToClipboardCard />
      </div>
    </div>
  </Container>
</section>

