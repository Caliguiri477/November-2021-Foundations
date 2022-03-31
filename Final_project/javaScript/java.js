var current = 0,
    slides = document.getElementsByTagName("img");

setInterval(function() {
for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
}
current = (current != slides.length - 1) ? current + 1 : 0;
slides[current].style.opacity = 1;
}, 3000);

var nameInput = document.getElementById('name');

document.querySelector('form.form').addEventListener('submit', function (e) {

    e.preventDefault();

    console.log("Name: "+ nameInput.value);    
});

var numberInput = document.getElementById('number');

document.querySelector('form.form').addEventListener('submit', function (e) {

    e.preventDefault();

    console.log("Phone number: "+ numberInput.value);    
});

var mailInput = document.getElementById('email');

document.querySelector('form.form').addEventListener('submit', function (e) {

    e.preventDefault();

    console.log("E-mail: "+ mailInput.value);    
});

var addressInput = document.getElementById('address');

document.querySelector('form.form').addEventListener('submit', function (e) {

    e.preventDefault();

    console.log("Address: "+ addressInput.value);    
});