<script>

</script>

<style>
    .btn{
        background-color: #004E89;
    }
    .about:after{
        content: "";
        display: block;
        margin: 0 auto;
        width: 8%;
        padding-top: 10px;
        border-bottom: 1px solid black;
    }
    h1{
        text-align: center;
    }
    a{
        color: black;
    }
</style>

<svelte:head>
	<title>Home | Sinoville Church</title>
</svelte:head>

<h1 class="pb-4">SERVICE TIMES</h1>
<div class="row pb-5">
    <div class="col-6 text-center">
        <h2>8:30</h2>
        <br>
        <h4>Online Sunday School</h4>
    </div>
    <div class="col-6 text-center">
        <h2>9:30</h2>
        <br>
        <h4>Online Service</h4>
    </div>
</div>

<div class="row d-flex justify-content-center pt-5 pb-5">
    <div class="col text-center">
        <h1>ABOUT US</h1>
        <h3 class="pb-3 about">OUR VISION</h3>
        <p>A Welcoming Family of Worship, Fellowship and Servanthood - the practical outflowing of who we are as Jesus’ Followers. Making Disciples - obedience to Jesus’ call in Matt 28:18</p>
        <br>
        <p>Believing that the Church is called to make Disciples who are committed to the Mission of God as demonstrated in Jesus words and teaching; SMC strives to be a place where people can meet with the Risen Christ, Engage with His teachings, Heed His call to follow and, filled by the His Spirit, live each day for God’s Kingdom.</p>
        <h3 class="pb-3 pt-4 about">WHAT WE DO</h3>
        <p>To that end we want to become a church of Small Groups where every member is connected, growing and serving.</p>
        <br>
        <p>Our Sunday worship reflects our desire to be a people who worship in spirit and truth.  And, although our worship becomes progressively ‘noisier’ through the day, we strive to worship in the tradition of our Methodist movement.</p>
        <br>
        <p>Our Sunday School (07h45 and 09h30 when services at the church are allowed again) is a safe place where children are encouraged to know and love Jesus. </p>
        <br>
        <p id="about">Our Teen church (Sunday 09h30) and Youth (Friday 19h00) is a place where young people are able to explore their faith in relevant ways</p>
        <br>
        <p>Preaching is Bible based and seeks to help people connect with God, in Christ.</p>
        <br>
        <p>The Alpha Course (#TryAlpha) is a place where we invite people to explore the Christian faith in a non-threatening environment with fun and food.  We also encourage all new members to #TryAlpha as it’s the simplest way to connect with people here at SMC.</p>
        <h3 class="pb-3 pt-4 about">OUR COMMUNITY</h3>
        <p>We are a vibrant mix of cultures, backgrounds and people who worship predominantly in the common language of English.  As a result our Leadership Team reflects who we are. </p>
        <h3 class="pb-3 pt-4 about">HISTORY</h3>
        <p>In the late 1970’s a group of Methodist parents started a Sunday School in the garage of their home.  Up till then families travelled over the Magaliesburg to the Valley or Central Societies.</p>
        <br>
        <p>Later they started a Methodist Society which met in the Northridge Primary School Hall.  Eventually enough funds were raised to build a small Church.</p>
        <br>
        <p>In 1982 the original Sinoville Methodist Church on Zambezi Drive (where Montana Crossing is today) was opened.  Then in 1996 the original church was enlarged.  Soon after the renovations, the building was sold as part of a turnkey deal and they relocated to the current property on 25 July 1999.  The new property included a hall and Sunday School buildings (which the original church did not have) as well as a property of 2 hectares..</p>
    </div>
</div>

<h1 class="pt-5">CONTACT US</h1>
<div class="row pt-2 text-center">
    <div class="col-md-6 col-sm-12 pt-5">
        <i class="fas fa-phone-alt fa-4x d-block pb-3 pt-5"></i>
        <a href="tel:012-567-0065"><em>Tel:</em> (012) 567-0065</a>
        <i class="fas fa-map-marker-alt fa-4x d-block pt-4"></i>
        <p class="pt-3">Cnr 3rd Ave & Jan Bantjies Rd, Sinoville PTA</p>
        <p>E 28.14' 08.3"</p>
        <p class="pb-3">S 23.40' 03.1"</p>
        <i class="far fa-envelope fa-4x d-block pb-3"></i>
        <a href="mailto:office@sinovillemc.co.za"><em>Email:</em> office@sinovillemc.co.za</a>
    </div>
    <div class="col-md-6 col-sm-12 pt-5">
        <form name='contact' method='POST'><input type='hidden' name='form-name' value='contact' />
            <fieldset>
            <div class="form-group">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label>Name</label>
                <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter your name" name="name">
            </div>
            <div class="form-group">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label>Surname</label>
                <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter your surname" name="surname">
            </div>
            <div id="contact" class="form-group">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label>Email address</label>
                <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter your email" name="email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label>Subject</label>
                <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter your subject" name="subject">
            </div>
            <div class="form-group">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <label>Your message...</label>
                <textarea name="message" class="form-control" id="exampleTextarea" rows="8"></textarea>
            </div>
            <button type="submit" class="btn btn-primary submit">Submit</button>
            </fieldset>
        </form>
    </div>
</div>
<div class="row mt-5">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.1085164715164!2d28.232515815656487!3d-25.66769724861095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebfdee92e9a1707%3A0xe2c4d11fc83c723f!2sSinoville%20Methodist%20Church!5e0!3m2!1sen!2sza!4v1600851803348!5m2!1sen!2sza" width="1500" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" title="Location"></iframe>
</div>