let i = 0;
let txt = 'Bring in \'da noise!'; /* The text */
let speed = 60; /* The speed/duration of the effect in milliseconds */
let fontSize = 10;
const el = document.getElementsByClassName("loader")[0];

$(window).on('load', addNoise);
// setTimeout(() => {
//   addNoise();
// }, 1000);
// addNoise();
function addNoise() {
  $('.loader').text('');
  $('.noise-wrapper').css('opacity',1);

    typeWriter();
}

function typeWriter() {
    if (i < txt.length) {
        el.innerHTML += txt.charAt(i);
        el.style.fontSize = fontSize + 'vw';
        i++;
        speed += 10;
        fontSize += 0.4;
        setTimeout(typeWriter, speed);
    }
    }