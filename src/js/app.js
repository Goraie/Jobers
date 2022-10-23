function isWebp() {
	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
		}
		
		testWebP(function (support) {
		if (support == true) {
			document.querySelector('body').classList.add('webp');
		}else{
			document.querySelector('body').classList.add('no-webp');
		}
		});
}

isWebp()

// import Swiper, { Navigation, Pagination } from 'swiper';


const menu = document.querySelectorAll('.header__item')

function menuSelect() {
	menu.forEach(item => {
		if(item.querySelector('.header__dropdown')){
			let el = item.querySelector('.header__dropdown')
			item.addEventListener('mouseenter', () => {
				el.style.display = 'block'
				el.classList.add('active')
			})
			item.addEventListener('mouseleave', () => {
				el.classList.remove('active')
				setTimeout(()=>{
					el.style.display = 'none'
				}, 120)
				// el.style.display = 'none'
			})
		}
	})
}


menuSelect()

const blogCategories = document.querySelectorAll('.categories__btn')
blogCategories.forEach(el => {
	el.addEventListener('click', (e) => {
		if(!el.classList.contains('active')){
			blogCategories.forEach(item => item.classList.remove('active'))
			el.classList.add('active')
		}
	})
})

// Аккордион в футере на мобильной версии
const acc = document.querySelectorAll('.footer-mobile__acc');
acc.forEach(item => {
	item.addEventListener('click', () => {
		let open = item.nextElementSibling
		if(item.classList.contains('active')){
			open.style.maxHeight = 0
		} else {
			open.style.maxHeight = open.scrollHeight + 'px'
		}
		item.classList.toggle('active')
		open.classList.toggle('active')
	})
})

// Кнопка вверх
const goTopBtn = document.querySelector('.go-top')
window.addEventListener('scroll', () => {
	const clientHeight = window.outerHeight
	if(window.pageYOffset > clientHeight*2){
		goTopBtn.classList.add('show')
		goTopBtn.addEventListener('click', (e) => sctollTop(e))
	} else {
		goTopBtn.classList.remove('show')
		goTopBtn.removeEventListener('click', (e) => sctollTop(e))
	}
})

function sctollTop(e){
	e.preventDefault()
	window.scrollTo(0, 0)
}

// меню гамбургер
const menuIcon = document.querySelector('.burger'),
			mobileMenu = document.querySelector('.header__menu_mobile')

// console.dir(mobileMenu.scrollHeight);
function setTranslateValue(item, valY, valX = 0){
	item.style.transform = `translate(${valX}px,${valY}px)`
}
const mobileScrollHeight = mobileMenu.scrollHeight + 25
mobileMenu.style.height = mobileScrollHeight + 'px'
setTranslateValue(mobileMenu, -mobileScrollHeight)

menuIcon.addEventListener('click', () => {
	menuIcon.classList.toggle('active')
	if(menuIcon.classList.contains('active')){
		mobileMenu.style.overflow = 'scroll'
		document.querySelector('body').style.overflow = 'hidden'
	}	else {
		document.querySelector('body').style.overflow = 'visible'
	}
	setTranslateValue(mobileMenu, menuIcon.classList.contains('active') ? 0 : -mobileScrollHeight)
});



// registration and login

const regBtn = document.querySelector('.header__reg'),
			registrationSect = document.querySelector('.registration')

regBtn.addEventListener('click', (e) => {
	e.preventDefault()
	registrationSect.style.display = 'block'
})

const loginBtn = document.querySelector('.header__login'),
			loginSect = document.querySelector('.login')

loginBtn.addEventListener('click', (e) => {
	e.preventDefault()
	console.log(loginSect);
	loginSect.style.display = 'block'
})