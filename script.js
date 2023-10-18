var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
}
function validate(form) {
  var reason = "";

  if (form.username.value == "" || /[^a-zA-z]/.test(form.username.value))
      reason += "Ошибка имени ";
  if (form.password.value == "" || /[^0-9]/.test(form.password.value))
      reason += "Ошибка пароля ";

  if (reason == "")
      return true;  
  else {
      alert(reason);  
      return false;
  }
}
