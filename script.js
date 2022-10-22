let i = 0;
let txt = 'Bring in \'da noise!'; /* The text */
let speed = 60; /* The speed/duration of the effect in milliseconds */
let fontSize = 10;
let scale = 100;
const el = document.getElementsByClassName("loader")[0];
const body = $('body');
const noise = $('.noise')[0];

$(window).on('load', addNoise);
// setTimeout(() => {
//   addNoise();
// }, 1000);
function addNoise() {
  $('.loader').text('');
  $('.noise-wrapper').css('opacity',1);

    typeWriter();
}

function typeWriter() {
    if (i < txt.length) {
        el.innerHTML += txt.charAt(i);
        el.style.fontSize = fontSize + 'vw';
        $(body).css({backgroundSize: `${scale}% ${scale}%`});
        $(noise).css({});

        i++;
        speed += 10;
        fontSize += 0.4;
        scale += 4;

        setTimeout(typeWriter, speed);
    }
    }

// function noise() {

// }