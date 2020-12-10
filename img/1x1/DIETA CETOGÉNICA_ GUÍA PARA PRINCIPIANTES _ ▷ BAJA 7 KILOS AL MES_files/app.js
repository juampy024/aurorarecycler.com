 const faders = document.querySelectorAll('.fade-in');
 const sliders = document.querySelectorAll('.slide-in');

	const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	
	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');

	navLinks.forEach((link, index) => {
		if(link.style.animation){
			link.style.animation = '';

		}else{
		link.style.animation = `navLinkFade 0.5s ease-in forwards ${index / 7 + 0.5}s`;
		}

	});

		burger.classList.toggle('toggle');
	
	});

	
}

navSlide();

/* Ends Nav Settings */

const appearOptions = {

	threshold: 0,
	rootMargin: "0px -100px -150px 0px"

	
};
const appearOnScroll = new IntersectionObserver
(function(
entries,
appearOnScroll
) {
	entries.forEach(entry => {
	
		if(!entry.isIntersecting) {
			return;
		} else {
				entry.target.classList.add('appear');
				appearOnScroll.unobserve(entry.target);

			}
		});
},
appearOptions);

faders.forEach(fader => {
	appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
	appearOnScroll.observe(slider);
});

/* ends Observor */

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

/* Ends Testimonial Carousel */
