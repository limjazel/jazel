<script>
  import "../css/app.css";
  import "../css/boilerplate.css";
  import Container from "../js/components/Container.svelte";
  import AppFooter from "../js/layouts/AppFooter.svelte";
  import AppHeader from "../js/layouts/AppHeader.svelte";
  import Page from "../js/layouts/Page.svelte";
</script>

<Container>
  <AppHeader />
</Container>

<main>
  <slot />
</main>

<AppFooter />
