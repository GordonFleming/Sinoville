<script>

</script>

<style>
    .btn{
        background-color: #004E89;
    }
    .jumbotron{
        margin-bottom:0 !important;
        padding: 10rem;
    }
    .about:after{
        content: "";
        display: block;
        margin: 0 auto;
        width: 8%;
        padding-top: 10px;
        border-bottom: 1px solid black;
    }
    h1,h4{
        text-align: center;
        padding-bottom: 1rem;
    }
    h2, h3, h5{
        text-align: center;
    }
    a{
        color: black;
    }
    p{
        font-size: 18px;
        /* text-align: justify; */
    }
    .display-3{
        font-family: 'Indie Flower', cursive;
        color: black;
        padding-left: 8rem;
        padding-right: 8rem;
    }
    #parallax{
        background-image: url('banner.jpg');
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
    }
    .card{
        background-color: inherit;
    }
</style>

<svelte:head>
	<title>Home | Sinoville Church</title>
</svelte:head>

<div id="parallax" class="jumbotron" style="background-image: url('banner.jpg');">
    <div class="row h-100">
        <div class="col-md-12 align-self-center">
            <h1 class="display-3">A Welcoming Familiy of Worship, Fellowship, and Servanthood</h1>
        </div>
    </div>
</div>

<div class="container pt-5 pb-5">

    <div class="row mb-4">
        <div class="col-12 mt-3 mb-5">
            <h2 class="pb-5">Service Times</h2>
            <div class="row mt-5 text-center">
                <div class="col-md-4 col-sm-12">
                    <h2>8:30</h2>
                    <br>
                    <h4>Online Sunday School</h4>
                </div>
                <div class="col-md-4 col-sm-12">
                    <i class="fas fa-church fa-10x"></i>
                </div>
                <div class="col-md-4 col-sm-12">
                    <h2>9:30</h2>
                    <h5><strong>We are reopening from 4 Oct.</strong></h5>
                    <br>
                    <h4 class="pt-3" id="groups">Online Service</h4>
                </div>
            </div>
        </div>
    </div>

    <!-- Groups -->
    <h1 class="mt-5">GROUPS</h1>
    <h3 class="mb-5 about">Weekly activities</h3>
    <div class="row  mb-5">
        <div class="col-md-4 col-sm-12 text-center">
            <div class="card" style="width: 20rem;">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img class="card-img-top" src="bible.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Bible Study Session</h5>
                    <h6 class="card-title">Wednesdays @ 19:00 (online)</h6>
                    <p class="card-text">Current course: Hand-in-Hand where the objective is to equip churches to have a positive impact in preventing and responding to sexual violence in their church and community.</p>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12 text-center">
            <div class="card" style="width: 20rem;">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img class="card-img-top" src="coffee.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Coffee@7</h5>
                    <h6 class="card-title">Wednesdays @ 19:00 (online)</h6>
                    <p class="card-text">Current societal topics are also covered with a theological reflection. The session is open to everybody.</p>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12 text-center">
            <div class="card" style="width: 20rem;">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img class="card-img-top" src="youth_group.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Youth Group</h5>
                    <h6 class="card-title">Fridays @ 19:00 (will restart when lockdown ends)</h6>
                    <p class="card-text">Gr 7 – 12</p>
                </div>
            </div>
        </div>
    </div>
    <!-- Second row -->
    <div class="row  mb-5">
        <div class="col-md-4 col-sm-12 text-center">
            <div class="card" style="width: 20rem;">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img class="card-img-top" src="sunday_school.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Sunday School</h5>
                    <h6 class="card-title">Sundays @ 8:30 (online)</h6>
                    <p class="card-text">From little children to Gr 7</p>
                    <p class="card-text">We share God's word and love with fun and laughter.</p>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12 text-center">
            <div class="card" style="width: 20rem;">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img class="card-img-top" src="cross.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Confirmation</h5>
                    <h6 class="card-title">Times and dates to be confirmed in new year</h6>
                    <p class="card-text"></p>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12 text-center">
            <div class="card" style="width: 20rem;">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img class="card-img-top" src="teen_church.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Teen Church</h5>
                    <h6 class="card-title">Sundays @ 10:15 (online)</h6>
                    <p class="card-text">Teen church is a place to belong, a place where any student can be “Home”.</p>
                </div>
            </div>
        </div>
    </div>
    
    <h3 class="mb-5 about">Monthly activities</h3>
    <div class="row  mb-5">
        <div class="col-md-4 col-sm-12 text-center">
            <div class="card" style="width: 20rem;">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img class="card-img-top" src="feed.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Feed a Friend</h5>
                    <h6 class="card-title">Saturdays @ 8:00 (date confirmed before the time)</h6>
                    <p class="card-text">As they say, many hands make light work. Food packing where we feed the needy in Pretoria and surroundings. </p>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12 text-center">
            <div class="card" style="width: 20rem;">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img class="card-img-top" src="flowers.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Wednesday Women’s Auxiliary (WWA)</h5>
                    <h6 class="card-title">Every 3rd Wednesday of the month @ 9:30</h6>
                    <p class="card-text">For ladies to join in fellowship, caring and outreach while “Knowing Christ and making Him known”.</p>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12 text-center">
            <div class="card" style="width: 20rem;">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img class="card-img-top" src="men.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Sinoville Methodist Men’s Fellowship (SMMF)</h5>
                    <h6 class="card-title">Every 3rd Sunday of the month @ 10:30</h6>
                    <p class="card-text">Motto: Each one, bring one.</p>
                </div>
            </div>
        </div>
    </div>
    <!-- Second row -->
    <div class="row  mb-5">
        <div class="col-md-4 col-sm-12 text-center">
            <div class="card" style="width: 20rem;">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img class="card-img-top" src="flowers2.png" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Sunday Women’s Auxiliary (SWA)</h5>
                    <h6 class="card-title">Every 3rd Sunday of the month @ 11h00 - 12h00. </h6>
                    <p class="card-text">A body of Christ committed to spread the love and brighten the lives of those around us under the motto, " Knowing Christ and making Him known".</p>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12 text-center">
            <div class="card" style="width: 20rem;">
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img class="card-img-top" src="young_adults.jpg" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Young Adults</h5>
                    <h6 class="card-title">Every 4th Sunday of the month  @ 11:00</h6>
                    <p class="card-text">For young adults who are navigating life with God.</p>
                </div>
            </div>
        </div>
    </div>
    <h5>For more information about events happening, visit our <a href="https://www.facebook.com/Sinoville-Methodist-Church-159807964060665/" target="_blank">facebook page.</a></h5>
    
    <div class="row">
        <div class="col text-center mb-5 mt-5">
            <h2 class="pb-3">Ministers</h2>
            <div class="row">
                <div class="col-md-4 col-sm-12 pt-5">
                    <h3>Dcn. Douw Grobler</h3>
                    <br>
                    <a href="tel:012-543-0412"><em>Tel.</em>(012) 543-0412 (H)</a>
                    <br>
                    <a href="tel:083-374-4333"><em>Cell.</em>083 374 4333</a>
                    <br>
                    <a href="mailto:douw@sinovillemc.co.za">douw@sinovillemc.co.za</a>
                </div>
                <div class="col-md-4 col-sm-12">
                    <img src="Ministers.png" alt="Ministers">
                </div>
                <div class="col-md-4 col-sm-12 pt-5">
                    <h3>Rev. Storia Seitisho</h3>
                    <br>
                    <a href="tel:012-567-2465"><em>Tel.</em>(012) 567-2465 (H)</a>
                    <br>
                    <a href="tel:072-598-5691"><em>Cell.</em>072 598 5691</a>
                    <br>
                    <a href="mailto:storia@sinovillemc.co.za">storia@sinovillemc.co.za</a>
                </div>
            </div>
            <div id="giving"></div>
        </div>
    </div>

    <h1 class="mt-5">GIVING</h1>
    <div class="row">
        <div class="col-md-6 col-sm-12 text-center">
            <h3>Tithing and Donations</h3>
            <i class="fas fa-hand-holding-medical fa-7x pt-4 pb-4"></i>
            <p><strong>Bank:</strong> FNB</p>
            <p><strong>Branch:</strong> Zambezi Drive (230145)</p>
            <p><strong>Account Type:</strong> Current</p>
            <p id="about"><strong>Account Number:</strong> 5104 109 4049</p>
            <p><strong>Account Holder:</strong> MCSA - Sinoville Society</p>
        </div>
        <div class="col-md-6 col-sm-12 text-center">
            <h3>Become a volunteer</h3>
            <i class="fas fa-hands-helping fa-7x pt-4 pb-4"></i>
            <p>If you would like to volunteer, you can speak to any of the ministers or society stewards.</p>
            <p></p>
        </div>
    </div>

    <div class="row d-flex justify-content-center pt-5 pb-5">
        <div class="col text-center">
            <h1 class="mb-4">ABOUT US</h1>
            
            <h4 class="pt-4 about">History</h4>
            <p class="pb-4">In the late 1970’s a group of Methodist parents started a Sunday School in the garage of their home.  Up till then families travelled over the Magaliesburg to the Valley or Central Societies.</p>
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <div class="row">
                <div class="col-md-6 col-sm-12">
                    <img class="img-fluid pl-5 pr-5" src="old_sinoville.png" alt="old church">
                    <p class="pb-5 pt-2"><em>Old Sinoville Methodist Church in Zambezi Drive (now Sefako Makgatho Drive where the Dros is)</em></p>
                </div>
                <div class="col-md-6 col-sm-12">
                    <img class="img-fluid pl-5 pr-5" src="new_sinoville.png" alt="New church">
                    <p class="pb-5 pt-2"><em>New Sinoville Methodist Church in 3rd Avenue</em></p>
                </div>
            </div>
            <p>Later they started a Methodist Society which met in the Northridge Primary School Hall.  Eventually enough funds were raised to build a small Church.</p>
            <div class="row pt-4 pb-4">
                <div class="col-md-6 col-sm-12">
                    <img class="img-fluid pl-5 pr-5" src="building_church.png" alt="old church">
                </div>
                <div class="col-md-6 col-sm-12">
                    <img class="img-fluid pl-5 pr-5" src="building_church2.png" alt="New church">
                </div>
            </div>
            <p >In 1982 the original Sinoville Methodist Church on Zambezi Drive (where Montana Crossing is today) was opened.  Then in 1996 the original church was enlarged.  Soon after the renovations, the building was sold as part of a turnkey deal and they relocated to the current property on 25 July 1999.  The new property included a hall and Sunday School buildings (which the original church did not have) as well as a property of 2 hectares..</p>
            <div class="row pt-4 pb-4">
                <div class="col-md-6 col-sm-12">
                    <img class="img-fluid pl-5 pr-5" src="bishop.png" alt="old church">
                    <p class="pb-5 pt-2"><em>Bishop Hansie Mattheys and Rev Rob Sim with the opening of the new church building.</em></p>
                </div>
                <div class="col-md-6 col-sm-12">
                    <img class="img-fluid pl-5 pr-5" src="gathering.png" alt="New church">
                </div>
            </div>

            <h4 class="about">Our Vision</h4>
            <p>A Welcoming Family of Worship, Fellowship and Servanthood - the practical outflowing of who we are as Jesus’ Followers. Making Disciples - obedience to Jesus’ call in Matt 28:18</p>
            <p>Believing that the Church is called to make Disciples who are committed to the Mission of God as demonstrated in Jesus words and teaching; SMC strives to be a place where people can meet with the Risen Christ, Engage with His teachings, Heed His call to follow and, filled by the His Spirit, live each day for God’s Kingdom.</p>
            <h4 class="pt-4 about">Our Community</h4>
            <p id="contact">We are a vibrant mix of cultures, backgrounds and people who worship predominantly in the common language of English.  As a result our Leadership Team reflects who we are. </p>
        </div>
    </div>

    <h1 class="pt-5">CONTACT US</h1>
    <div class="row pt-2 text-center">
        <div class="col-md-6 col-sm-12 pt-5">
            <i class="fas fa-phone-alt fa-4x d-block pb-4 pt-5"></i>
            <a href="tel:012-567-0065"><em>Tel:</em> (012) 567-0065</a>
            <i class="fas fa-map-marker-alt fa-4x d-block pt-4 pb-4"></i>
            <i class="pt-3">Cnr 3rd Ave & Jan Bantjies Rd, Sinoville PTA</i>
            <br>
            <i>E 28.14' 08.3"</i>
            <br>
            <i class="pb-3">S 23.40' 03.1"</i>
            <i class="far fa-envelope fa-4x d-block pt-4 pb-4"></i>
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
                <div class="form-group">
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

</div>