<script>
  import Container from "../../../../js/components/Container.svelte";
  import Link from "../../../../js/components/Link.svelte";
</script>

<svelte:head>
  <title>Study – Sidebar filter to a Horizontal filter</title>
</svelte:head>

<Container class="[ flex flex-col items-center max-w-[52rem] pb-48 ]">
  <header class="[ flex flex-col items-center ]">
    <h1 class="[ text-4xl mt-1 text-center ]">
      Sidebar filter to a Horizontal filter
    </h1>

    <div class="[ mt-6 ]">
      <span
        class="[ bg-canvas border border-neutral ] [ rounded-full px-3 py-1 ] [ italic text-shade ]"
      >
        UI/UX
      </span>
      <span
        class="[ bg-canvas border border-neutral ] [ rounded-full px-3 py-1 ] [ italic text-shade ]"
      >
        Front-end
      </span>
    </div>

    <p class="[ mt-6 text-lg ]">
      This case study is focused on how we updated the sidebar product filter
      for products into a horizontal filter to make space for the (incoming)
      collection sidebar.
    </p>
  </header>

  <div class="[ mt-8 mx-6 rounded-lg overflow-hidden shadow-lg ]">
    <img
      src="/images/case-study/horizontal-filter-banner.png"
      alt="a screenshot of a product catalog"
    />
  </div>

  <div class="[ grid gap-10 ] [ my-20 ]">
    <div class="[ max-w-lg justify-self-start ]">
      <h2 class="[ text-2xl ]">Overview</h2>
      <p class="[ mt-1 ]">
        While the Sidedoor user base has been steadily growing, so have the
        features, like in this scenario, to make space for new ones, we make
        changes to improve what had already been built.
      </p>
      <p class="[ mt-2 ]">
        In this case study, it will be broken down how we ended up transforming
        the sidebar product filter into a horizontal one.
      </p>
    </div>

    <div class="[ mx-6 rounded-lg overflow-hidden shadow-lg ]">
      <img
        src="/images/case-study/sidebar-filter.png"
        alt="a screenshot of the product catalog"
      />
    </div>

    <div class="[ max-w-lg justify-self-end ]">
      <h2 class="[ text-2xl ]">Problems</h2>

      <ul class="[ mt-1 ml-4 list-disc grid gap-2 ]">
        <li>
          Considering the addition of the collection sidebar, it will cause the
          browsing space for the products to be narrow.
        </li>
        <li>
          The current sidebar product filter also takes quite a bit of user
          effort since it requires vertical scrolling when all filters are
          expanded.
        </li>
        <li>
          It's about time to add the specific filters currently selected to help
          users when navigating and filtering through products.
        </li>
      </ul>
    </div>
  </div>

  <div
    class="[ mb-20 p-6 ] [ border border-dashed border-neutral rounded-lg bg-pearl/50 ]"
  >
    <h2 class="[ text-3xl ]">Proposed solution</h2>
    <p class="[ mt-1 ]">
      Update the current sidebar product filter into a horizontal product
      filter. With this, labels will also be added for the currently selected
      filters.
    </p>
  </div>

  <div>
    <h2 class="[ text-2xl ]">Scoping the work</h2>
    <p class="[ mt-1 ]">
      We are firm believers of “make it work first, then make it pretty later”.
      It was one of the bad habits I had before, and actually removing
      distractions (aka being bothered by things not looking nice) made me focus
      better on how to understand what I’m working on and how to handle it
      properly.
    </p>

    <div class="[ mt-12 grid gap-12 ]">
      <div>
        <span
          class="[ ml-1 text-lg text-stroke font-bold ] [ hover:underline underline-offset-1 ]"
        >
          – Make a list of all the current product filters
        </span>

        <div class="[ ml-1 mt-1 ] [ flex flex-col space-y-4 ]">
          <span>
            Doing them in a check list format and ticking them out one by one
            once the actual coding starts keeps track of what is and what isn’t
            done.
          </span>

          <span>
            Never, never, never underestimate the power of a list. Regardless if
            it’s written on a paper, written on Basecamp, Notion or your phone
            notepad, a list helps to keep you grounded when things start to get
            overwhelming or off-track.
          </span>
        </div>
      </div>

      <div>
        <span
          class="[ ml-1 text-lg text-stroke font-bold ] [ hover:underline underline-offset-1 ]"
        >
          – Sketch out how it will look like
        </span>

        <p class="[ ml-1 mt-1 ]">
          Usually we do sketches over a goodnotes page, or even directly
          “frankenstein-ing”/combining screenshots from our current work. To get
          a good look of how it will look like. And it’s usually faster than
          multiple passes of pure mockup designs.
        </p>

        <div class="[ mt-6 mx-6 rounded-lg overflow-hidden shadow-lg ]">
          <img
            src="/images/case-study/goodnotes.jpeg"
            alt="a sketch of a wireframe"
          />
        </div>

        <span class="[ mt-4 block text-sm text-center italic font-normal ]">
          Note: This sketch does not include the magic sidebar since it was an
          upcoming separate project.
        </span>
      </div>

      <div class="[ mt-6 ]">
        <span
          class="[ ml-1 text-lg text-stroke font-bold ] [ hover:underline underline-offset-1 ]"
        >
          – Actual coding
        </span>

        <div class="[ ml-1 mt-1 ]">
          <span>
            During this stage, multiple things are considered. Right from the
            start, button states, mobile screen layout, accessibility and how
            the elements are going to interact with each other etc.
          </span>

          <span>
            Usually more issues arise as this stage progresses, just like in
            this situation.
          </span>
        </div>
      </div>
    </div>

    <div class="[ mt-12 ]">
      <h2 class="[ text-2xl ]">Further issues</h2>

      <div class="[ mt-6 mx-6 rounded-lg overflow-hidden shadow-lg ]">
        <video width="100%" height="auto" controls>
          <source
            src="/images/case-study/tabbing-across-the-horizontal-filter.mov"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <p class="[ mt-6 ]">
        If you'll notice, using the keyboard to tab from the "Sort by" filter
        jumps to the product name, instead of the next filter, which is the
        "Category". This is caused by the positioning of the dropdown menu and
        the header (which is sticky on scroll), which are both floating
        elements.
      </p>

      <p class="[ mt-4 ]">
        But, with the help of
        <Link href="https://github.com/romkor/svelte-portal">
          svelte-portal
        </Link>, we were able to fix things a bit easier!
      </p>

      <div class="[ mt-16 ]">
        <h2 class="[ text-4xl ]">Voila!</h2>
        <p class="[ mt-2 ]">
          An accessible sticky horizontal filter.
        </p>

        <div class="[ mt-6 mx-6 rounded-lg overflow-hidden shadow-lg ]">
          <video width="100%" height="auto" controls>
            <source
              src="/images/case-study/tabbing-across-the-horizontal-filter-fixed.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </div>
</Container>
