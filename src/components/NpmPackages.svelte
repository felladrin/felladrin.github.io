<script>
  /** @type import("../types/NpmsQueryResult").NpmsQueryResult */
  let npmsQueryResult;

  fetch("https://api.npms.io/v2/search?q=maintainer%3Afelladrin")
    .then((response) => response.json())
    .then((result) => {
      npmsQueryResult = result;
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
