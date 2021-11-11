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
    {#each npmsQueryResult.results as result}
      <p>
        <button
          class="btn btn-rounded btn-sm"
          type="button"
          on:click={() => showNpmPackage(result.package.name)}
        >
          {result.package.name}
        </button>
        {result.package.description}
      </p>
    {/each}
  </div>
{/if}
