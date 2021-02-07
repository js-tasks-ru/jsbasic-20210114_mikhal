/* eslint-disable indent */
function initCarousel() {
	const carousel = document.querySelector('.carousel__inner');
	const leftArrow = document.querySelector('.carousel__arrow_left');
	const rightArrow = document.querySelector('.carousel__arrow_right');
	const offsetWidth = document.querySelector('.carousel__inner').offsetWidth;

	const imagesNumber = document.querySelectorAll('.carousel__slide').length;
	const imagesArray = document.querySelectorAll('.carousel__slide');

	let currentImage = 1;

	// leftArrow.style.display = 'none';

	const checkArrowVisibility = () => {
		if (currentImage == 1) {
			leftArrow.style.display = 'none';
		} else if (currentImage == imagesNumber) {
			rightArrow.style.display = 'none';
		} else {
			leftArrow.style.display = '';
			rightArrow.style.display = '';
		}
	};


	checkArrowVisibility();

	const moveLeft = () => {
		carousel.style.transform = 'translateX(' + (offsetWidth - offsetWidth * (currentImage - 1)) + 'px)';
		currentImage--;
		console.log(currentImage);
		checkArrowVisibility();
	};

	const moveRight = () => {
		carousel.style.transform = 'translateX(' + -offsetWidth * currentImage + 'px)';
		currentImage++;
		console.log(currentImage);
		checkArrowVisibility();
	};

	leftArrow.addEventListener('click', () => moveLeft());
	rightArrow.addEventListener('click', () => moveRight());
}