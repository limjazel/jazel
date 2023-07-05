<script>
  import Container from "../../../js/components/Container.svelte";
</script>

<Container>
  <span>Sidedoor</span>
  <h1 class="[ text-4xl ]">Sidebar filter to a Horizontal filter</h1>

  <span class="bg-red-100">UI/UX</span>
  <span class="bg-red-100">Front-end</span>

  <p>
    This case study focuses on how we updated the sidebar product filter for
    products into a horizontal filter to make space for the (incoming)
    collection sidebar.
  </p>

  <div class="[ mt-8 ]">
    <img
      src="/images/case-study/horizontal-filter-banner.png"
      alt="a screenshot of a product catalog"
    />
  </div>

  <div class="[ grid md:grid-cols-2 gap-8 ] [ my-10 ]">
    <div>
      <h2>Overview</h2>
      <p>
        While the Sidedoor user base has been steadily growing, so have the
        features, like in this scenario, to make space for new ones, we make
        changes to improve what had already been built.
      </p>
      <p>
        In this case study, it will be broken down how we ended up transforming
        the sidebar product filter into a horizontal one.
      </p>
    </div>

    <div>
      <h2>Problems</h2>
      <ul class="list-disc">
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

  <img
    src="/images/case-study/sidebar-filter.png"
    alt="a screenshot of the product catalog"
  />

  <div>
    <h2>Proposed solution</h2>
    <p>
      Update the current sidebar product filter into a horizontal product
      filter. With this, labels will also be added for the currently selected
      filters.
    </p>
  </div>

  <div>
    <h2>Scoping the work</h2>
    <p>
      We are firm believers of “make it work first, then make it pretty later”.
      It was one of the bad habits I had before, and actually removing
      distractions (aka being bothered by things not looking nice) made me focus
      better on how to understand what I’m working on and how to handle it
      properly.
    </p>

    <ul class="list-decimal">
      <li>
        Make a list of all the current product filters
        <ul class="[ list-disc ]">
          <li>
            Doing them in a check list format and ticking them out one by one
            once the actual coding starts keeps track of what is and what isn’t
            done.
          </li>
          <li>
            Never, never, never underestimate the power of a list. Regardless if
            it’s written on a paper, written on Basecamp, Notion or your phone
            notepad, a list helps to keep you grounded when things start to get
            overwhelming or off-track.
          </li>
        </ul>
      </li>

      <li>
        Sketch out how it will look like
        <ul class="[ list-disc ]">
          Usually we do sketches over a goodnotes page, or even directly
          “frankenstein-ing”/combining screenshots from our current work. To get
          a good look of how it will look like. And it’s usually faster than
          multiple passes of pure mockup designs.
        </ul>

        <img src="/images/case-study/goodnotes.jpeg" alt="" />
      </li>

      <li>
        Actual coding

        <ul>
          <li>
            During this stage, multiple things are considered. Right from the
            start, button states, mobile screen layout, accessibility and how
            the elements are going to interact with each other etc.
          </li>
          <li>
            Usually more issues arise as this stage progresses, just like in
            this situation.
          </li>
        </ul>
      </li>
    </ul>
  </div>
</Container>
