// ---------- fix-navbar ---------- //
window.onscroll = function () {
	myFunction()
}
var navbar = document.getElementById('navbar')
var sticky = navbar.offsetTop

function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add('sticky')
	} else {
		navbar.classList.remove('sticky')
	}
}
//---------- hamberger-menu ----------//
const nav = document.querySelector('.nav-grid')
const navCon = document.querySelector('.nav-container')
const hamburger = document.querySelector('.hamburger')
hamburger.addEventListener('click', toggleMenu)

function toggleMenu() {
	if (hamburger.classList.contains('change')) {
		hamburger.classList.remove('change')
		console.log('close')
		nav.classList.remove('open')
		navCon.style.display = 'none'
	} else {
		hamburger.classList.add('change')
		console.log('open')
		nav.classList.toggle('open')
		navCon.style.display = 'block'
	}
}

// ---------- intro slides ---------- //
let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
	showSlides((slideIndex += n))
}

function showSlides(n) {
	let i
	let slides = document.getElementsByClassName('slide')
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none'
	}
	slides[slideIndex - 1].style.display = 'block'
}
