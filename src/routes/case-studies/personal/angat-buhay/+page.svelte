<script>
  import Container from "../../../../js/components/Container.svelte";
  import NoteBlock from "../../NoteBlock.svelte";
</script>

<svelte:head>
  <title>Study – Angat Buhay website redesign</title>
</svelte:head>

<NoteBlock class="[ pt-20 px-6 ] [ mx-auto ]">
  <header class="[ flex flex-col items-center ]">
    <h1 class="[ text-4xl mt-1 text-center ]">Angat Buhay website redesign</h1>

    <div class="[ mt-6 ]">
      <span
        class="[ bg-canvas border border-neutral ] [ rounded-full px-3 py-1 ] [ italic text-shade ]"
      >
        UI/UX
      </span>
      <span
        class="[ bg-canvas border border-neutral ] [ rounded-full px-3 py-1 ] [ italic text-shade ]"
      >
        Website design
      </span>
    </div>

    <p class="[ mt-6 text-lg ]">
      Angat Buhay is a non-government organization that inspires hope and
      bayanihan by harnessing the energies of partners, volunteers, and
      supporters to empower Filipino communities, especially the marginalized.
    </p>
  </header>
</NoteBlock>

<Container>
  <div class="[ mx-6 rounded-lg overflow-hidden shadow-lg ]">
    <img
      src="/images/case-study/angat-buhay/get-involved.png"
      alt="a screenshot of a product catalog"
    />
  </div>
</Container>

<NoteBlock class="[ mt-10 mx-auto ]">
  <div>
    <h2 class="[ text-2xl ]">Overview</h2>
    <p class="[ mt-1 ]">
      Angat Buhay is a foundation that aims to continue the anti-poverty and
      pandemic response programs started during Robredo's tenure as vice
      president, which all went under the same umbrella name of "Angat Buhay"
      (a Tagalog word meaning 'improve life's condition'; lit. 'Lift Life').
    </p>

    <p class="italic [ mt-2 ]">
      Disclaimer: This case study is entirely personal and has no direct bearing
      on the organization.
    </p>
  </div>

  <div class="[ w-full ] [ mt-20 ]">
    <h2 class="[ text-2xl ]">Problems</h2>
    <ul class="[ mt-1 ml-6 list-disc ] [ grid gap-2 ]">
      <li>
        The overall structure of the website is disorganized

        <ul class="[ list-disc ml-6 mt-1 ] [ grid gap-1 ]">
          <li>
            The pages on the current website are redundant, or the contents that
            should be grouped together are separated.
          </li>
          <li>
            Some pages contain minor content that seem irrelevant on their own.
          </li>
          <li>The navigation contains too many items</li>
        </ul>
      </li>

      <li>The call-to-action lacks emphasis.</li>
    </ul>
  </div>
</NoteBlock>

<Container>
  <div class="[ mt-8 mx-6 ]">
    <img
      src="/images/case-study/angat-buhay/current-site.png"
      alt="a screenshot of angat buhay ph website"
    />
  </div>

  <span class="[ block text-sm text-center italic font-normal ]">
    Angat Buhay website home page.
  </span>
</Container>

<NoteBlock class="[ mt-20 mx-auto ]">
  <div
    class="[ w-full p-6 ] [ border border-dashed border-neutral rounded-lg bg-pearl/50 ]"
  >
    <h2 class="[ text-2xl ]">Proposed solutions</h2>

    <ul class="[ mt-1 ml-6 list-disc ] [ grid gap-2 ]">
      <li>
        Restructuring the sitemap to fit the purpose of the website better.
      </li>
      <li>
        Improving the UI while maintaining a branding similar to the what the
        current website is using (since I have no access to official branding)
      </li>
      <li>Add emphasis to call-to-action.</li>
    </ul>
  </div>
</NoteBlock>

<NoteBlock class="[ mt-20 mx-auto ]">
  <div class="[ w-full ]">
    <h2 class="[ text-2xl ]">Sitemap</h2>

    <p class="[ mt-1 ]">
      After doing a UX audit for the website, I created a sitemap that will
      serve as the website’s foundation. With this general overview, it’s easier
      to view the hierarchy and determine the unique pages that will be designed
      and built.
    </p>
  </div>
</NoteBlock>

<Container>
  <div class="[ mx-6 rounded-lg overflow-hidden shadow-lg ]">
    <img
      src="/images/case-study/angat-buhay/sitemap.png"
      alt="a screenshot of angat buhay ph website"
    />
  </div>
</Container>

<NoteBlock class="[ mt-20 mx-auto ]">
  <div class="[ w-full ]">
    <h2 class="[ text-2xl ]">Wireframes</h2>
  </div>
</NoteBlock>

<Container class="[ pt-5 ]">
  <div class="[ mx-6 rounded-lg overflow-hidden shadow-lg ]">
    <img
      src="/images/case-study/angat-buhay/wireframes.png"
      alt="a screenshot of angat buhay ph website"
    />
  </div>
</Container>
