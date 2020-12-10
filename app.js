    const faders = document.querySelectorAll('.fade-in');

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
		link.style.animation = `navLinkFade 0.2s ease forwards ${index / 7 + 0.5}s`;
		}

	});

		burger.classList.toggle('toggle');
	
	});
	
}

navSlide();


const appearOptions = {
	
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



