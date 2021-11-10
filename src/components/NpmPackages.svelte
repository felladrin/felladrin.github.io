<script lang="ts">
  import { onMount } from "svelte";
  import { fetchNpmPackages } from "../functions/fetchNpmPackages";
  import { showNpmPackage } from "../functions/showNpmPackage";
  import type { NpmsQueryResult } from "../types/NpmsQueryResult";

  let npmsQueryResult: NpmsQueryResult;

  onMount(async () => {
    npmsQueryResult = await fetchNpmPackages();
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
              <button
                class="btn btn-link"
                type="button"
                on:click={() => showNpmPackage(result.package.name)}
                >{result.package.name}</button
              >
            </td>
            <td>{result.package.description}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
{/if}
