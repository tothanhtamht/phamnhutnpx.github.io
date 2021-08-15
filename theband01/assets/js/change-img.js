var i = 0;
var images = [];

var time = 3000;
// list img
images[0] = './assets/img/chicago.jpg';
images[1] = './assets/img/la.jpg';
images[2] = './assets/img/ny.jpg';

// change img
function changeImages() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImages()", time);
}
window.onload = changeImages;