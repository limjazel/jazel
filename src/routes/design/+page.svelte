<script>
  import Container from "../../js/components/Container.svelte";
  import Dialog from "../../js/components/Dialog.svelte";
  import DialogBody from "../../js/components/DialogBody.svelte";
  import Button from "../../js/components/Button.svelte";

  let images = [
    {
      name: "Humans (colored)",
      image_url: "/images/graphics/humans-colored-1.png",
      image_alt: "Illustration for humans in color.",
    },
    {
      name: "Receipts",
      image_url: "/images/graphics/receipts.png",
      image_alt:
        "One dark haired man and a lady wearing a hijab are holding receipts while other receipts are floating around them. ",
    },
    {
      name: "Muse (on dark)",
      image_url: "/images/graphics/muse-1.png",
      image_alt:
        "A poster that says 'Write. Mention. And More.' And a text logo written as muse on the bottom right.",
    },
  ];

  let selectedImage;
  let modal;

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
  <title>Jazel Lim | Design</title>
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

<section class="">
  <h1>Design</h1>

  {#if imagePreviewIsOpen}
    <Dialog on:close={closeImagePreview}>
      <DialogBody>
        <img src={selectedImage.image_url} alt={selectedImage.image_alt} />
      </DialogBody>
    </Dialog>
  {/if}

  <Container>
    <div class="[ group ]">
      <Button
        type="none"
        size="none"
        tabindex="0"
        on:click={() => viewImage(images[0])}
        class="[ absolute bg-stroke/75 inset-0 z-10 ] [ opacity-0 group-hover:opacity-100 focus:opacity-100 ]"
      >
        <span class="[ text-accent font-medium ]">{images[0].name}</span>
      </Button>

      <img src={images[0].image_url} alt={images[0].image_alt} />
    </div>

    <div class="[ mt-6 grid grid-cols-2 items-start gap-6 ]">
      <div class="bg-purple-100">
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
      </div>

      <div class="bg-green-100 col-span-1">
        <div class="bg-purple-100">
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
        </div>
      </div>
    </div>
  </Container>
</section>
