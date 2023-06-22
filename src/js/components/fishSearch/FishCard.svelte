<script>
  /**
   * @type {{ name: any; image_uri: any; price: any; availability: { location: any; rarity: any; }; museum_phrase: any; }}
   */
   export let selectedFish;
</script>

<div class="flex flex-col">
  <span>{selectedFish.name}</span>
  <img src={selectedFish.image_uri} alt={selectedFish.name} />
  <span>{selectedFish.price} bells</span>
  <span>{selectedFish.availability.location}</span>
  <span>{selectedFish.availability.rarity}</span>

  <span>{selectedFish.museum_phrase}</span>
</div>
