<script>
  import Articles from "./Articles.svelte";
  import ContactForm from "./ContactForm.svelte";
  import Intro from "./Intro.svelte";
  import NpmPackages from "./NpmPackages.svelte";
</script>

<div class="content-wrapper">
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-6">
        <Intro />
        <Articles />
      </div>
      <div class="col-lg-6">
        <NpmPackages />
        <ContactForm />
      </div>
    </div>
  </div>
</div>
