<script>
  import "../css/app.css";
  import "../css/boilerplate.css";
  import Container from "../js/components/Container.svelte";
  import AppFooter from "../js/layouts/AppFooter.svelte";
  import AppHeader from "../js/layouts/AppHeader.svelte";
</script>

<Container class="[ py-6 ]">
  <AppHeader />
</Container>

<main>
  <slot />
</main>

<AppFooter />
