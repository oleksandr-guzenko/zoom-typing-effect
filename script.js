let i = 0;
let txt = 'Bring in \'da noise!'; /* The text */
let speed = 60; /* The speed/duration of the effect in milliseconds */
let fontSize = 10;
let scale = 100;
const el = document.getElementById("loader");
const body = $('body');
const noise = $('#noise');

$(window).on('load', addNoise);

function addNoise() {
  $('#loader').text('');
  $('#noise-wrapper').css('opacity',1);

    typeWriter();
}

function typeWriter() {
    if (i < txt.length) {
        el.innerHTML += txt.charAt(i);
        el.style.fontSize = fontSize + 'vw';
        $(body).css({backgroundSize: `${scale}% ${scale}%`});

        i++;
        speed += 10;
        fontSize += 0.4;
        scale += 4;

        setTimeout(typeWriter, speed);
    }
    }
