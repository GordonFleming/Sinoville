import * as sapper from '@sapper/app';
import 'bootstrap/dist/css/bootstrap.min.css';

sapper.start({
	target: document.querySelector('#sapper')
}).then(() => {
    // Do stuff here if needed

    var home = document.getElementById('home_nav');
    home.addEventListener("click",function(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
         });
    })
    var groups = document.getElementById('groups_nav');
    groups.addEventListener("click",function(){
        document.getElementById('groups').scrollIntoView(true);
    })
    var giving = document.getElementById('giving_nav');
    giving.addEventListener("click",function(){
        document.getElementById('giving').scrollIntoView(true);
    })
    var about = document.getElementById('about_nav');
    about.addEventListener("click",function(){
        document.getElementById('about').scrollIntoView(true);
    })
    var contact = document.getElementById('contact_nav');
    contact.addEventListener("click",function(){
        document.getElementById('contact').scrollIntoView(true);
    })
    var btn = document.getElementById('button');
    btn.addEventListener("click",function(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
         });
    })
});