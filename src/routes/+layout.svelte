<script>
  import "../css/app.css";
  import AppHeader from "../js/layouts/AppHeader.svelte";
  import Page from "../js/layouts/Page.svelte";
</script>

<Page>
  <AppHeader />

  <slot />
</Page>
