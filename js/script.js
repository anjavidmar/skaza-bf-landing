var h = window.innerHeight;
var w = window.innerWidth;

console.log('screen height = ' + h, 'screen width = ' + w);

var header = document.getElementById('header');
var header_h = header.offsetHeight;
var header_w = header.offsetWidth;
var background_image = document.getElementsByClassName('background-image');

var countdown = document.getElementById('countdown');
var countDownTo = new Date('Nov 30, 2019 00:00:00').getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var timeRemaining = countDownTo - now;

    var h = Math.floor(timeRemaining / (1000 * 60 * 60));
    var m = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    if (h < 10) {
        h = '0' + h;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }

    countdown.innerHTML = h + ':' + m + ':' + s;

    // header
    h = window.innerHeight;
    w = window.innerWidth;
    header_h = header.offsetHeight;
    header_w = header.offsetWidth;

    if (w > header_h * 1.5) {
        background_image[0].classList.remove('mobile');
        background_image[0].classList.add('desktop');
    } else {
        background_image[0].classList.add('mobile');
        background_image[0].classList.remove('desktop');
    }

    // stop countdown
    if (timeRemaining < 0) {
        clearInterval(x);
        countdown.innerHTML = 'akcija končana';
    }
}, 1000);
