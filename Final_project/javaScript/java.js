var current = 0,
    slides = document.getElementsByTagName("img");

setInterval(function() {
for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
}
current = (current != slides.length - 1) ? current + 1 : 0;
slides[current].style.opacity = 1;
}, 3000);

var formData = new FormData();
formData.append("#email");
formData.append("key_two", "Second value");
formData.append("key_three", "Thrid value");

for (var pair of formData.entries()) {
    console.log("");
}