import * as sapper from '@sapper/app';
import 'bootstrap/dist/css/bootstrap.min.css';

sapper.start({
	target: document.querySelector('#sapper')
}).then(() => {
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
});