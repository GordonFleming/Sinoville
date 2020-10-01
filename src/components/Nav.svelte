<script>
    function scrollDom1(event) {
        var elementOne =  document.getElementById('about');
        elementOne.scrollIntoView();
    }
    function scrollDom2(event) {
        var elementTwo =  document.getElementById('groups');
       elementTwo.scrollIntoView();
    }
    function scrollDom3(event) {
        var elementThree =  document.getElementById('giving');
        elementThree.scrollIntoView();
    }
    function scrollDom4(event) {
        var elementFour =  document.getElementById('contact');
        elementFour.scrollIntoView();
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
    cursor: pointer;
}
.navbar-brand{
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 40px;
    padding-left: 2rem;
}
li a:hover{
    font-size: 20.5px;
}

.nav-link{
    margin-left: 1rem;
}
</style>

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
            <a on:click={() => window.scrollTo(0,0)} class="nav-link" href=".">Home</a>
        </li>
        <li class="nav-item">
            <a  on:click={scrollDom2} class="nav-link" href=".">Groups</a>
        </li>
        <li class="nav-item">
            <a on:click={scrollDom3} class="nav-link" href=".">Giving</a>
        </li>
        <li class="nav-item">
            <a on:click={scrollDom1} class="nav-link" href=".">About</a>
        </li>
        <li class="nav-item">
            <a on:click={scrollDom4} class="nav-link" href=".">Contact</a>
          </li>
      </ul>
    </div>
  </nav>