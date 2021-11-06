<script>
  import halfmoon from "halfmoon";
  import Fa from "svelte-fa";
  import { faMoon } from "@fortawesome/free-solid-svg-icons";
</script>

<div
  class="btn btn-action mr-5"
  on:click={() => halfmoon.toggleDarkMode()}
  data-test-id="toggle-theme-button"
  data-toggle="tooltip"
  data-placement="left"
  data-title="Toggle Dark Mode"
>
  <Fa icon={faMoon} />
</div>
