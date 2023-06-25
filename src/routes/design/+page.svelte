<script>
  import Container from "../../js/components/Container.svelte";
  import Dialog from "../../js/components/Dialog.svelte";
  import DialogBody from "../../js/components/DialogBody.svelte";

  let images = [
    {
      name: "Humans (colored)",
      image_url: "/images/graphics/humans-colored.png",
      image_alt: "Illustration for humans in color",
    },
    {
      name: "Muse (on dark)",
      image_url: "/images/graphics/muse-1.png",
      image_alt:
        "A poster that says 'Write. Mention. And More.' And a text logo written as muse on the bottom right",
    },
  ];

  let selectedImage = {};

  let imagePreviewIsOpen = false;

  function viewImage(image) {
    imagePreviewIsOpen = true;
    selectedImage = image;
  }

  function closeImagePreview() {
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

<Container>
  <h1>Design</h1>

  {#if imagePreviewIsOpen}
    <Dialog on:close={closeImagePreview}>
      <DialogBody>
        <img src={selectedImage.image_url} alt={selectedImage.image_alt} />
      </DialogBody>
    </Dialog>
  {/if}

  <div class="grid justify-center gap-y-6">
    {#each images as image (image.name)}
      <div class="[ group flex justify-center ]">
        <button
          on:click={() => viewImage(image)}
          class="[ absolute bg-stroke/75 inset-0 z-10 ] [ opacity-0 group-hover:opacity-100 ]"
        >
          <span class="[ text-accent font-medium ]">{image.name}</span>
        </button>

        <img src={image.image_url} alt={image.image_alt} />
      </div>
    {/each}
  </div>
</Container>
