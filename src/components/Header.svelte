<script>
  import ToggleThemeButton from "./ToggleThemeButton.svelte";
</script>

<nav class="navbar">
  <div class="navbar-brand">
    <a
      class="navbar-brand"
      href="images/avatar.jpg"
      data-toggle="tooltip"
      data-placement="right"
      data-title="Willing to see my face? :) Click on it!"
    >
      <img src="images/avatar.jpg" class="border rounded-circle" alt="Avatar" />
    </a>
    Victor Nogueira
  </div>
  <div class="navbar-content ml-auto">
    <ToggleThemeButton />
  </div>
</nav>
