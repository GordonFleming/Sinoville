<script>
    // import Nav from '../components/Nav.svelte';
    import Footer from '../components/Footer.svelte';

    function scrollDom1(event) {
        document.getElementById('about').scrollIntoView(true)
    }
    function scrollDom2(event) {
        document.getElementById('groups').scrollIntoView(true)
    }
    function scrollDom3(event) {
        document.getElementById('giving').scrollIntoView(true)
    }
    function scrollDom4(event) {
        document.getElementById('contact').scrollIntoView(true)
    }
</script>

<style>
</style>
<!-- <Nav/> -->

<nav class="navbar navbar-expand-lg navbar-light sticky-top">
    <a class="navbar-brand" href=".">
        <img src="circle-cropped-emblem.png" width="70" height="70" class="d-inline-block align-top mr-4" alt="Emblem">
    </a>
    <h1>Sinoville Methodist Church</h1>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <!-- svelte-ignore a11y-missing-attribute -->
            <a on:click={() => window.scrollTo(0,0)} class="nav-link">Home</a>
        </li>
        <li class="nav-item">
            <!-- svelte-ignore a11y-missing-attribute -->
            <a  on:click={scrollDom2} class="nav-link">Groups</a>
        </li>
        <li class="nav-item">
            <!-- svelte-ignore a11y-missing-attribute -->
            <a on:click={scrollDom3} class="nav-link">Giving</a>
        </li>
        <li class="nav-item">
            <!-- svelte-ignore a11y-missing-attribute -->
            <a on:click={scrollDom1} class="nav-link">About</a>
        </li>
        <li class="nav-item">
            <!-- svelte-ignore a11y-missing-attribute -->
            <a on:click={scrollDom4} class="nav-link">Contact</a>
          </li>
      </ul>
    </div>
  </nav>

    <!-- The slot is where for example the about page will be inserted -->
    <slot></slot>

<Footer/>
