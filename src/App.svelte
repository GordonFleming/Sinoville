<script>
    function scrollDom1(event) {
        document.getElementById('about').scrollIntoView(true);
    }
    function scrollDom2(event) {
        document.getElementById('groups').scrollIntoView(true);
    }
    function scrollDom3(event) {
        document.getElementById('giving').scrollIntoView(true);
    }
    function scrollDom4(event) {
        document.getElementById('contact').scrollIntoView(true);
    }
</script>

<nav class="navbar navbar-expand-lg navbar-light sticky-top">
    <a class="navbar-brand" href="/">
        <img src="/images/circle-cropped-emblem.webp" width="70" height="70" class="d-inline-block align-top mr-4" alt="Emblem">
    </a>
    <h1>Sinoville Methodist Church</h1>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <a id="home_nav" on:click={() => window.scrollTo(0,0)} class="nav-link">Home</a>
        </li>
        <li class="nav-item">
            <a id="groups_nav" on:click={scrollDom2} class="nav-link">Groups</a>
        </li>
        <li class="nav-item">
            <a id="giving_nav" on:click={scrollDom3} class="nav-link">Giving</a>
        </li>
        <li class="nav-item">
            <a id="about_nav" on:click={scrollDom1} class="nav-link">About</a>
        </li>
        <li class="nav-item">
            <a id="contact_nav" on:click={scrollDom4} class="nav-link">Contact</a>
          </li>
      </ul>
    </div>
</nav>

<div id="parallax" class="jumbotron" style="background-image: url('/images/banner.webp');">
    <div class="row p-5">
        <div class="col-12 pt-5 pb-5 mb-5">
            <h1 class="display-3">A Welcoming Family of Worship, Fellowship, and Servanthood</h1>
        </div>
    </div>
</div>
<div id="corona" class="pb-3 pr-3 pl-3 mb-2 pt-3 card text-white col text-center">
    <a href="https://sacoronavirus.co.za" target="_blank" style="color:inherit;"><strong>Stay informed!</strong> Visit the SA Department of Health's website for COVID-19 updates: www.sacoronavirus.co.za</a>
</div>
<div class="container pt-5 pb-5">
    <div class="row mb-4">
        <div class="col-12 mt-3 mb-5">
            <h2 class="pb-5">Service Times</h2>
            <div class="row mt-5 text-center">
                <div class="col-md-4 col-sm-12 pt-4">
                    <h2>8:30</h2>
                    <h4 class="pt-3">Online and on-site service</h4>
                </div>
                <div class="col-md-4 col-sm-12">
                    <i class="fas fa-church fa-10x"></i>
                </div>
                <div class="col-md-4 col-sm-12">
                    <h2>7:30</h2>
                    <h4>Online Sunday School</h4>
                    <br>
                    <h2>9:30</h2>
                    <h4>Online Teen Church </h4>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 col-sm-6 text-center">
            <a href="https://drive.google.com/drive/folders/1M4JcYdRS-ZD2_7LHNUqGJ4iRyBL4fxVu?usp=sharing " target="_blank"><i class="fab fa-google-drive fa-4x icons"></i></a>
            <br><br>
            <p><strong>Weekly notices</strong></p>
        </div>
        <div class="col-md-6 col-sm-6 text-center">
            <a href="https://www.youtube.com/channel/UCS3KolbhflbyUfy8BI9F_vQ" target="_blank"><i class="fab fa-youtube fa-4x icons"></i></a>
            <br><br>
            <p id="groups"><strong>SMC YouTube Channel</strong></p>
        </div>
    </div>
    <!-- Groups -->
    <h1 class="mt-5">GROUPS</h1>
    <h3 class="mb-5 about">Weekly activities</h3>
    <div class="row  mb-5">
        <!-- <div class="col-md-4 col-sm-12 text-center">
            <div class="card" style="width: 20rem;">
                    <img class="card-img-top" src="/images/bible.webp" alt="Card cap" />
                <div class="card-body">
                    <h5 class="card-title">Bible Study Session</h5>
                    <h6 class="card-title">Wednesdays, in person at church @ 9:00 - 10:00</h6>
                    <h6 class="card-title">Wednesdays, online via Zoom @ 18:30 - 19:30</h6>
                    <p class="card-text"><strong>Topic:</strong> Will be based on the book “Discipleship Path - Deepening your relationship with Christ and
                        the Church” and reading material will be distributed before the time for everyone to read. An audio
                        file of the online session will also be shared for those people who cannot join one of the other
                        options. (All COVID protocols will be adhered to in the Church)</p>
                </div>
            </div>
        </div> -->
        <div class="col-md-4 col-sm-12 text-center">
            <div class="card" style="width: 20rem;">
                    <img class="card-img-top" src="/images/sunday_school.webp" alt="Card cap">
                <div class="card-body">
                    <h5 class="card-title">Sunday School</h5>
                    <h6 class="card-title">Sundays @ 7:30 (online)</h6>
                    <p class="card-text">From little children to Gr 7</p>
                    <p class="card-text">We share God's word and love with fun and laughter.</p>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12 text-center">
            <div class="card" style="width: 20rem;">
                    <img class="card-img-top" src="/images/cross.webp" alt="Card cap">
                <div class="card-body">
                    <h5 class="card-title">Confirmation</h5>
                    <h6 class="card-title">Request information about confirmation from the Google Form below:</h6>
                    <a style="color: blue;" href="https://forms.gle/kKNGGDt1mJLzkEGP8">https://forms.gle/kKNGGDt1mJLzkEGP8</a>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12 text-center">
            <div class="card" style="width: 20rem;">
                    <img class="card-img-top" src="/images/youth_group.webp" alt="Card cap">
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
        <!-- <div class="col-md-4 col-sm-12 text-center">
            <div class="card" style="width: 20rem;">
                <img class="card-img-top" src="coffee.webp" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Coffee@7</h5>
                    <h6 class="card-title">Fridays @ 19:00 (online)</h6>
                    <p class="card-text">Current societal topics are also covered with a theological reflection. The session is open to everybody.</p>
                </div>
            </div>
        </div> -->
        <div class="col-md-4 col-sm-12 text-center">
            <div class="card" style="width: 20rem;">
                    <img class="card-img-top" src="/images/teen_church.webp" alt="Card cap">
                <div class="card-body">
                    <h5 class="card-title">Teen Church</h5>
                    <h6 class="card-title">Sundays @ 9:30 (online)</h6>
                    <p class="card-text">Teen church is a place to belong, a place where any student can be “Home”.</p>
                </div>
            </div>
        </div>
    </div>
    <h3 class="mb-5 about">Monthly activities</h3>
    <div class="row  mb-5">
        <div class="col-md-4 col-sm-12 text-center">
            <div class="card" style="width: 20rem;">
                    <img class="card-img-top" src="/images/feed.webp" alt="Card cap">
                <div class="card-body">
                    <h5 class="card-title">Feed a Friend</h5>
                    <h6 class="card-title">Saturdays @ 8:00 (date confirmed before the time)</h6>
                    <p class="card-text">As they say, many hands make light work. Food packing where we feed the needy in Pretoria and surroundings. </p>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12 text-center">
            <div class="card" style="width: 20rem;">
                    <img class="card-img-top" src="/images/flowers2.webp" alt="Card cap">
                <div class="card-body">
                    <h5 class="card-title">Wednesday Women’s Auxiliary (WWA)</h5>
                    <h6 class="card-title">Every 3rd Wednesday of the month @ 9:30</h6>
                    <p class="card-text">For ladies to join in fellowship, caring and outreach while “Knowing Christ and making Him known”.</p>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12 text-center">
            <div class="card" style="width: 20rem;">
                    <img class="card-img-top" src="/images/men.webp" alt="Card cap">
                <div class="card-body">
                    <h5 class="card-title">Sinoville Methodist Men’s League (SMML)</h5>
                    <h6 class="card-title">Every 3rd Sunday of the month @ 10:30</h6>
                    <p class="card-text">Men of Faith that draw together through discipleship. Our motto: Each One – Reach One.</p>
                    <a href="https://web.facebook.com/SMCMensFellowship" target="_blank"><i class="fab fa-facebook fa-2x icons"></i></a>
                </div>
            </div>
        </div>
    </div>
    <!-- Second row -->
    <div class="row  mb-5">
        <div class="col-md-4 col-sm-12 text-center">
            <div class="card" style="width: 20rem;">
                    <img class="card-img-top" src="/images/flowers.webp" alt="Card cap">
                <div class="card-body">
                    <h5 class="card-title">Sunday Women’s Auxiliary (SWA)</h5>
                    <h6 class="card-title">Every 3rd Sunday of the month @ 11h00 - 12h00. </h6>
                    <p class="card-text">A body of Christ committed to spread the love and brighten the lives of those around us under the motto, " Knowing Christ and making Him known".</p>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12 text-center">
            <div class="card" style="width: 20rem;">
                    <img class="card-img-top" src="/images/young_adults.webp" alt="Card cap">
                <div class="card-body">
                    <h5 class="card-title">Young Adults Movement (YAM)</h5>
                    <h6 class="card-title">Every 4th Sunday of the month  @ 11:00</h6>
                    <p class="card-text">For young adults who are navigating life with God.</p>
                    <a href="https://web.facebook.com/Sinoville-Young-Adult-Movement-112136197217608" target="_blank"><i class="fab fa-facebook fa-2x icons"></i></a>
                </div>
            </div>
        </div>
    </div>

    <h3 class="mb-5 about">Support groups</h3>
    <div class="row  mb-5">
        <div class="col-md-4 col-sm-12 text-center">
            <div class="card" style="width: 20rem;">
                    <img class="card-img-top" src="/images/hands.webp" alt="Card cap">
                <div class="card-body">
                    <h5 class="card-title">GBV-F Support</h5>
                    <p class="card-text">Support for Gender Based Violence and Femicide victims. Contact the minister or office to access this support group.</p>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12 text-center">
            <div class="card" style="width: 20rem;">
                    <img class="card-img-top" src="/images/group.webp" alt="Card cap">
                <div class="card-body">
                    <h5 class="card-title">Alcoholics Anonymous</h5>
                    <h6 class="card-title">Thurs @ 19:30</h6>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-sm-12 text-center">
            <div class="card" style="width: 20rem;">
                    <img class="card-img-top" src="/images/man_in_field.webp" alt="Card cap">
                <div class="card-body">
                    <h5 class="card-title">Narcotics Anonymous</h5>
                    <h6 class="card-title">Mon @ 19:30-20:30</h6>
                </div>
            </div>
        </div>
    </div>
    <h5>For more information about activities happening, visit our <a id="link" href="https://www.facebook.com/Sinoville-Methodist-Church-159807964060665/" target="_blank">facebook page</a></h5>
    <!-- svelte-ignore a11y-missing-content -->
    <h5>or contact the Church office: <a id="link" href="mailto:office@sinovillemc.co.za">office@sinovillemc.co.za</a></h5>
    <div class="row">
        <div class="col text-center mb-5 mt-5">
            <h2 class="pb-3">Minister</h2>
            <div class="row">
                <div class="col-md-6 col-sm-12 pt-4 pr-5">
                    <div class="row">
                        <div class="col text-right pr-5 mr-5">
                            <img class="img-fluid" style="height: 200px;" src="/images/Storia.webp" alt="Storia">
                        </div>
                    </div>
                    <!-- <div class="row pt-3">
                        <div class="col text-right pr-5">
                            <img class="img-fluid" style="height: 200px;" src="Douw.webp" alt="Douw">
                        </div>
                    </div> -->
                </div>
                <div class="col-md-6 col-sm-12 pt-5">
                    <h3>Rev. Storia Seitisho</h3>
                    <br>
                    <a href="tel:012-567-2465"><em>Tel. </em>(012) 567-2465 (H)</a>
                    <br>
                    <a href="tel:072-598-5691"><em>Cell. </em>066 457 4017</a>
                    <br>
                    <a href="mailto:storia@sinovillemc.co.za">storia@sinovillemc.co.za</a>
                    <!-- <br><br><br><br><br>
                    <h3>Dcn. Douw Grobler</h3>
                    <br>
                    <a href="tel:083-374-4333"><em>Cell. </em>083 374 4333</a>
                    <br>
                    <a href="mailto:douw@sinovillemc.co.za">douw@sinovillemc.co.za</a> -->
                </div>
            </div>
            <div id="giving"></div>
        </div>
    </div>
    

    <h1 class="mt-5">GIVING</h1>
    <div class="row">
        <div class="col-12 text-center">
            <h3>Tithing and Donations</h3>
            <i class="fas fa-hand-holding-medical fa-7x pt-4 pb-4"></i>
            <div class="row">
                <div class="col-md-6 col-sm-12 text-center pt-4">
                    <p><strong>Bank:</strong> FNB</p>
                    <p><strong>Branch:</strong> Zambezi Drive (230145)</p>
                    <p><strong>Account Type:</strong> Current</p>
                    <p><strong>Account Number:</strong> 5104 109 4049</p>
                    <p><strong>Account Holder:</strong> MCSA - Sinoville Society</p>
                </div>
                <div class="col-md-6 col-sm-12 text-center">
                    <img src="/images/snap_scan.webp" alt="snap_scan">
                </div>
            </div>
        </div>
        <div class="col-12 text-center pt-5">
            <h3>Become a volunteer</h3>
            <i class="fas fa-hands-helping fa-7x pt-4 pb-4"></i>
            <p id="about">If you would like to volunteer your time, please speak to the minister or society stewards or send an email to the office. We always need door stewards, tea stewards, volunteers to do flowers in the church, Sunday School teachers and maintenance stewards. God says in 1 John 3:18; “Dear children, let us not love with words or speech but with actions and in truth.”</p>
            <br>
        </div>
    </div>

    <div class="row d-flex justify-content-center pt-5 pb-5">
        <div class="col text-center">
            <h1 class="mb-4">ABOUT US</h1>
            
            <h4 class="pt-4 about">History</h4>
            <p class="pb-4">In the late 1970’s a group of Methodist parents started a Sunday School in the garage of their home.  Up till then families travelled over the Magaliesburg to the Valley or Central Societies.</p>
            <div class="row">
                <div class="col-md-6 col-sm-12">
                    <img class="img-fluid pl-5 pr-5" src="/images/old_sinoville.webp" alt="old church">
                    <p class="pb-5 pt-2"><em>Old Sinoville Methodist Church in Zambezi Drive (now Sefako Makgatho Drive where the Dros is)</em></p>
                </div>
                <div class="col-md-6 col-sm-12">
                    <img class="img-fluid pl-5 pr-5" src="/images/new_sinoville.webp" alt="old church">
                    <p class="pb-5 pt-2"><em>Old Sinoville Methodist Church in Zambezi Drive</em></p>
                </div>
            </div>
            <p>Later they started a Methodist Society which met in the Northridge Primary School Hall.  Eventually enough funds were raised to build a small Church.</p>
            <div class="row pt-4">
                <div class="col-md-6 col-sm-12">
                    <img class="img-fluid pl-5 pr-5" src="/images/bishop.webp" alt="old church">
                    <p class="pb-5 pt-2"><em>Bishop Hansie Mattheys and Rev Rob Sim with the opening of the new church building.</em></p>
                </div>
                <div class="col-md-6 col-sm-12">
                    <img class="img-fluid pl-5 pr-5" src="/images/gathering.webp" alt="New church">
                </div>
            </div>
            <p>In 1982 the original Sinoville Methodist Church on Zambezi Drive (where Montana Crossing is today) was opened.  Then in 1996 the original church was enlarged.  Soon after the renovations, the building was sold as part of a turnkey deal and they relocated to the current property on 25 July 1999.  The new property included a hall and Sunday School buildings (which the original church did not have) as well as a property of 2 hectares.</p>
            <div class="row pt-4 pb-2">
                <div class="col-md-6 col-sm-12">
                    <img class="img-fluid pl-5 pr-5" src="/images/building_church.webp" alt="old church">
                </div>
                <div class="col-md-6 col-sm-12">
                    <img class="img-fluid pl-5 pr-5" src="/images/building_church2.webp" alt="New church">
                </div>
                <div class="col-12 mt-5">
                    <img class="img-fluid pl-5 pr-5" src="/images/current_church.webp" alt="Current church">
                </div>
            </div>
            <em>Photo credits: Thank you to Monty and Lettie Morris</em>
            <br><br><br>
            <h4 class="about">Our Vision</h4>
            <p>A welcoming family of worship, fellowship and servanthood – the practical outflowing of who we are as Jesus’ followers.</p>
            <p>We believe that the Church is called to make disciples who are committed to the mission of God as demonstrated in Jesus words and teaching. SMC strives to be a place where people can meet with the Risen Christ, engage with His teachings, heed His call to follow and be filled with His Holy Spirit.</p>
            <h4 class="pt-4 about">Our Community</h4>
            <p id="contact">We are a vibrant mix of cultures, backgrounds and people who worship predominantly in the common language of English. There is a place for everyone.</p>
        </div>
    </div>

    <h1 class="pt-5">CONTACT US</h1>
    <div class="row pt-2 text-center">
        <div class="col-md-6 col-sm-12 pt-5">
            <img class="img-fluid pl-5 pr-5" style="height: 120px;" src="/images/methodist_emblem.webp" alt="Methodist Church emblem">
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
            <form name='contact' method='POST' data-netlify="true">
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
                    <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter your subject" name="subject">
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

<footer class="footer footer_look">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-12 segment-one text-center pt-2">
                <img class="img-fluid" src="/images/circle-cropped-emblem.webp" alt="Sinoville Emblem" width="150" height="150">
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
                <div class="row text-center">
                    <div class="col-11">
                        <a href="https://www.mychurchmanagement.org/Account/Login" target="_blank"><i class="fas fa-cross fa-3x"></i></a>
                        <a href="https://www.facebook.com/Sinoville-Methodist-Church-159807964060665/" target="_blank"><i class="fab fa-facebook fa-3x"></i></a>
                        <a href="https://www.youtube.com/channel/UCS3KolbhflbyUfy8BI9F_vQ" target="_blank"><i class="fab fa-youtube fa-3x"></i></a>
                    </div>   
                </div>
                <div class="row text-center">
                    <div class="col-11">
                        <a href="https://www.instagram.com/p/B_SEHjzlMJG/?igshid=af6a43r2q43o" target="_blank"><i class="fab fa-instagram fa-3x"></i></a>
                        <a href="mailto:office@sinovillemc.co.za"><i class="far fa-envelope fa-3x"></i></a>
                        <a href="https://www.facebook.com/Big-Hearts-Community-Care-1570626643249767/?ref=page_internal" target="_blank"><i class="far fa-heart fa-3x"></i></a>
                    </div> 
                </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12 segment-three text-center">
                <h3>About us</h3>
                <p>A Welcoming Family of Worship, Fellowship and Servanthood</p>
                <div class="pt-3">
                    <button id="button" on:click={() => window.scrollTo(0,0)} type="button" class="btn btn-info">Scroll to top</button>
                </div>
            </div>
        </div>
    </div>
</footer>
<div id="btm-border">
    <div class="container text-center">
        <a href="https://splyce.dev" target="_blank">Designed by Splyce</a>
    </div>
</div>  