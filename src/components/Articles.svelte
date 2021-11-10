<script>
  import { articles } from "../constants/articles";
</script>

<div class="card">
  <h2 class="card-title">Articles</h2>
  {#each articles as { date, url, title }}
    <p>
      <span>{date} &#183; </span>
      <a href={url} target="_blank">
        {title}
      </a>
    </p>
  {/each}
</div>
