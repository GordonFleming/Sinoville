<script>

</script>

<style>
.footer_look {
    background: #6288CF;
    padding: 30px;
    margin-top: auto;
}
.segment-two h3{
    color: cornsilk;
    font-size: 22px;
    text-transform: uppercase;   
    margin: 10px 0;
    white-space: nowrap;
}
.segment-two ul{
    margin: 0;
    padding: 0;
    list-style: none;
}
.segment-two ul li{
    padding-bottom: 3px;
    text-align: left;
    padding-left: 6vw;
}
.segment-two ul li{
    color: white;
}
.segment-three h3{
    color: cornsilk;
    font-size: 22px;
    text-transform: uppercase;   
    margin: 10px 0;
}
.segment-three a{
    margin-top: 20px;
    margin-left: 30px;
    color: white;
    width: 40px;
    height: 40px;
    display: inline-block;
    border-radius: 30%;
}
.btn-info{
    background-color: #004E89;
}
i:hover{
    color: #9AD6F9;
}
a {
	color: #d8d0d0c0;
}
#btm-border{
    height: 2vh;
    background-color: #004E89;
}
</style>

 <!-- Footer  -->
 <footer class="footer footer_look">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-12 segment-one text-center pt-2">
                <img class="img-fluid" src="circle-cropped-emblem.png" alt="Sinoville Emblem" width="150" height="150">
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12 segment-two text-center">
                <h3>Address</h3>
                <ul>
                    <li>Cnr of Jan Bantjies & 3rd Ave,</li>
                    <li>Sinoville,</li>
                    <li>Gauteng,</li>                           
                    <li>South Africa</li>
                </ul>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12 segment-three text-center">
                <h3>Follow US</h3>
                <a href="https://www.facebook.com/Sinoville-Methodist-Church-159807964060665/" target="_blank"><i class="fab fa-facebook fa-3x"></i></a>
                <a href="https://www.instagram.com/p/B_SEHjzlMJG/?igshid=af6a43r2q43o" target="_blank"><i class="fab fa-instagram fa-3x"></i></a>
                <a href="mailto:office@sinovillemc.co.za"><i class="far fa-envelope fa-3x"></i></a>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12 segment-three text-center pt-5">
                <button on:click={() => window.scrollTo(0,0)} type="button" class="btn btn-info">Scroll to top</button>
            </div>
        </div>
        <div class="row d-flex justify-content-center mt-3">
            <a href="https://splyce.dev" target="_blank">Designed by Splyce</a>
        </div>
    </div>   
</footer>
<div id="btm-border"></div>   