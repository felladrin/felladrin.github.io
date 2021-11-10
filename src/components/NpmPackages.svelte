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
        <a href={"#"} on:click={() => showNpmPackage(result.package.name)}>
          {result.package.name}
        </a>
        <span> &#183; {result.package.description}</span>
      </p>
    {/each}
  </div>
{/if}
