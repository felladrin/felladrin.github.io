<script>
  import { onMount } from "svelte";

  /** @type import("../types/NpmsQueryResult").NpmsQueryResult */
  let npmsQueryResult;

  onMount(async () => {
    const response = await fetch(`https://api.npms.io/v2/search?q=maintainer%3Afelladrin`);
    npmsQueryResult = await response.json();
  });
</script>

{#if npmsQueryResult}
  <div class="card">
    <h2 class="card-title">NPM Packages</h2>
    <table class="table table-hover">
      <tbody>
        {#each npmsQueryResult.results as result}
          <tr>
            <td style="white-space: nowrap;">
              <a href={result.package.links.npm} target="_blank">
                {result.package.name}
              </a>
            </td>
            <td>{result.package.description}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
{/if}
