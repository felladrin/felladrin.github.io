<script>
  /** @type import("../types/Article").Article[] */
  const articles = [
    {
      date: "2021-09-19",
      url: "https://dev.to/felladrin/cat-goric-escape-from-the-warp-chamber-post-mortem-57gc",
      title: "Cat Goric: Escape from the Warp Chamber - Post-Mortem",
    },
    {
      date: "2020-02-16",
      url: "https://www.linkedin.com/pulse/lessons-from-publishing-npm-package-victor-nogueira/",
      title: "Lessons from publishing an NPM Package",
    },
    {
      date: "2016-07-06",
      url: "https://medium.com/@felladrin/keysmiths-in-a-hurry-post-mortem-from-ludum-dare-35-d2df42516a99",
      title: "Keysmith’s in a hurry! — Post-Mortem from Ludum Dare 35",
    },
  ];
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
