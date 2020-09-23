<script>
    let domName = '';
    function changeName(name) {
        domName = name;
    }
    function scrollDom(event) {
        document.getElementById(domName).scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
</script>

<style>
nav{
    background-color: #6288CF;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    padding-right: 5rem;
    border-bottom: 0.4vh solid #004E89;
}
a{
    font-size: 20px;
    color: #012646;
}
.navbar-brand{
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 40px;
    padding-left: 3rem;
}
li a:hover{
    font-size: 20.5px;
}

.nav-link{
    margin-left: 2rem;
}
</style>

<nav class="navbar navbar-expand-lg navbar-light sticky-top">
    <a class="navbar-brand" href=".">
        <img src="circle-cropped-emblem.png" width="80" height="80" class="d-inline-block align-top mr-5" alt="Emblem">
    </a>
    <h1>Sinoville Methodist Church</h1>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <a class="nav-link" href=".">HOME</a>
        </li>
        <li class="nav-item">
          <a on:click={changeName('about'), scrollDom} class="nav-link" href=".">ABOUT</a>
        </li>
        <li class="nav-item">
          <a  on:click={changeName('about'), scrollDom} class="nav-link" href=".">COMMUNITY</a>
        </li>
        <li class="nav-item">
          <a on:click={changeName('contact'), scrollDom} class="nav-link" href=".">GIVING</a>
        </li>
        <li class="nav-item">
            <a on:click={changeName('contact'), scrollDom} class="nav-link" href=".">Contact</a>
          </li>
      </ul>
    </div>
  </nav>