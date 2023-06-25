<script>
  import Container from "../../js/components/Container.svelte";
  import Dialog from "../../js/components/Dialog.svelte";
  import DialogBody from "../../js/components/DialogBody.svelte";
  import Button from "../../js/components/Button.svelte";

  let images = [
    {
      name: "Humans",
      image_url: "/images/graphics/humans-colored-1.png",
      image_alt: "An illustration with different creatures floating mid-air.",
    },
    {
      name: "Receipts",
      image_url: "/images/graphics/receipts-1.png",
      image_alt:
        "One dark haired man and a lady wearing a hijab are holding receipts while other receipts are floating around them.",
    },
    {
      name: "Muse",
      image_url: "/images/graphics/muse-1.png",
      image_alt:
        "A poster that says 'Write. Mention. And More.' And a text logo written as muse on the bottom right.",
    },
    {
      name: "The End of Evangelion",
      image_url: "/images/graphics/eva-1.png",
      image_alt:
        "A poster that says, 'the fate of destruction is also the joy of rebirth, The End of Evangelion' as the title. Then, written by Hideaki Anno, Directed by Kazuya Tsurumaki and Hideaki Anno, Poster design Jazel Lim. Followed by, 1997 July 19, Episode 25 and 26, Titled The door to summer and Sincerly yours respectively. Neon Genesis Evangelion, Produced by Mitsuhisa Ishikawa and Music by Shiro Sagisu.",
    },
    {
      name: "Orders",
      image_url: "/images/graphics/orders.png",
      image_alt:
        "One long haired lady with is making a box float around her arms while a curly haired man is watching in awe while holding a box.",
    },
  ];

  let selectedImage;

  let imagePreviewIsOpen = false;

  function viewImage(image) {
    imagePreviewIsOpen = true;
    selectedImage = image;
    document.body.classList.add("overflow-hidden");
  }

  function closeImagePreview() {
    document.body.classList.remove("overflow-hidden");
    imagePreviewIsOpen = false;
  }

  function handleKeydown(event) {
    if (imagePreviewIsOpen && event.key === "Escape") {
      closeImagePreview();
    }
  }
</script>

<svelte:head>
  <title>Jazel Lim — design</title>
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

<section class="design-page [ bg-stroke ]">
  {#if imagePreviewIsOpen}
    <Dialog on:close={closeImagePreview}>
      <DialogBody>
        <img src={selectedImage.image_url} alt={selectedImage.image_alt} />
      </DialogBody>
    </Dialog>
  {/if}

  <Container class="[ py-24 md:py-40 ]">
    <div class="[ mx-auto max-w-2xl px-6 pb-20 md:px-8 ] [ text-center ]">
      <h1 class="[ text-4xl text-accent ]">Illustrations and Posters</h1>

      <p class="[ mt-3 text-lg text-canvas ]">
        I get to draw and make other things sometimes. 
      </p>
    </div>

    <!-- humans -->
    <div class="[ group ]">
      <Button
        type="none"
        size="none"
        tabindex="0"
        on:click={() => viewImage(images[0])}
        class="[ absolute bg-stroke/75 inset-0 z-10 ] 
               [ opacity-0 group-hover:opacity-100 focus:opacity-100 ]"
      >
        <span class="[ text-accent font-medium ]">{images[0].name}</span>
      </Button>

      <img src={images[0].image_url} alt={images[0].image_alt} />
    </div>

    <div class="[ mt-6 grid grid-cols-2 items-start gap-6 ]">
      <div class="[ col-span-1 flex flex-col gap-6 ]">
        <!-- muse -->
        <div class="[ group ]">
          <Button
            type="none"
            size="none"
            tabindex="0"
            on:click={() => viewImage(images[2])}
            class="[ absolute bg-stroke/75 inset-0 z-10 ] [ opacity-0 group-hover:opacity-100 focus:opacity-100 ]"
          >
            <span class="[ text-accent font-medium ]">{images[2].name}</span>
          </Button>

          <img src={images[2].image_url} alt={images[2].image_alt} />
        </div>

        <!-- orders -->
        <div class="[ group ]">
          <Button
            type="none"
            size="none"
            tabindex="0"
            on:click={() => viewImage(images[4])}
            class="[ absolute bg-stroke/75 inset-0 z-10 ] [ opacity-0 group-hover:opacity-100 focus:opacity-100 ]"
          >
            <span class="[ text-accent font-medium ]">{images[4].name}</span>
          </Button>

          <img src={images[4].image_url} alt={images[4].image_alt} />
        </div>
      </div>

      <div class="[ col-span-1 flex flex-col gap-6 ]">
        <!-- receipts -->
        <div class="[ group ]">
          <Button
            type="none"
            size="none"
            tabindex="0"
            on:click={() => viewImage(images[1])}
            class="[ absolute bg-stroke/75 inset-0 z-10 ] [ opacity-0 group-hover:opacity-100 focus:opacity-100 ]"
          >
            <span class="[ text-accent font-medium ]">{images[1].name}</span>
          </Button>

          <img src={images[1].image_url} alt={images[1].image_alt} />
        </div>

        <!-- eva -->
        <div class="[ group ]">
          <Button
            type="none"
            size="none"
            tabindex="0"
            on:click={() => viewImage(images[3])}
            class="[ absolute bg-stroke/75 inset-0 z-10 ] [ opacity-0 group-hover:opacity-100 focus:opacity-100 ]"
          >
            <span class="[ text-accent font-medium ]">{images[3].name}</span>
          </Button>

          <img src={images[3].image_url} alt={images[3].image_alt} />
        </div>
      </div>
    </div>
  </Container>
</section>
