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

const menu = document.querySelectorAll('.header__item')

function menuSelect() {
	menu.forEach(item => {
		if(item.querySelector('.header__dropdown')){
			let el = item.querySelector('.header__dropdown')
			item.addEventListener('mouseenter', (e) => {
				const target = e.target, x = e.x, y = e.y
				console.dir(target);
				el.style.display = 'block'
				el.classList.add('active')
			})
			item.addEventListener('mouseleave' ,() => {
				el.classList.remove('active')
				el.style.display = 'none'
			})
			// setTimeout(() => {
			// 	item.addEventListener('mouseleave', () => {
			// 		el.classList.remove('active')
			// 		el.style.display = 'none'
			// 		// el.style.display = 'none'
			// 	})
			// }, 120)
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
const mobileScrollHeight = Math.max(mobileMenu.scrollHeight + 25, window.innerHeight)

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
	loginSect.style.display = 'block'
})

// Имейл

const email = document.querySelector('.cta__email'),
			mailOverlay = document.querySelector('.mail-wrap .overlay'),
			mailWrap = document.querySelector('.mail-wrap'),
			mailCLose = document.querySelector('.mail-wrap__i')

email.addEventListener('click', (e) => {
	if(!mailWrap.classList.contains('active')){
		mailWrap.classList.add('active')
		mailOverlay.classList.add('active')
		document.querySelector('body').style.overflow = 'hidden'
	}
})

mailCLose.addEventListener('click', () => {
	mailWrap.classList.remove('active')
	mailOverlay.classList.remove('active')
	document.querySelector('body').style.overflow = 'visible'
})

window.addEventListener('click', (e) => {
	if(e.target.classList.contains('overlay')){
		mailWrap.classList.remove('active')
		mailOverlay.classList.remove('active')
		document.querySelector('body').style.overflow = 'visible'
	}
})
// callback popup

const callback = document.querySelector('.cta__phone'),
callbackWrap = document.querySelector('.callback-wrapp'),
			callbackOverlay = document.querySelector('.callback-wrapp .overlay'),
			callbackCLose = document.querySelector('.callback-wrap__i'),
			headerPhone = document.querySelector('.header__phone')



callback.addEventListener('click', (e) => {
	if(!callbackWrap.classList.contains('active')){
		callbackWrap.classList.add('active')
		callbackOverlay.classList.add('active')
		document.querySelector('body').style.overflow = 'hidden'
	}
})
headerPhone.addEventListener('click', (e) => {
	if(!headerPhone.classList.contains('active')){
		callbackWrap.classList.add('active')
		callbackOverlay.classList.add('active')
		document.querySelector('body').style.overflow = 'hidden'
	}
})

callbackCLose.addEventListener('click', () => {
	callbackWrap.classList.remove('active')
	callbackOverlay.classList.remove('active')
	document.querySelector('body').style.overflow = 'visible'
})

window.addEventListener('click', (e) => {
	if(e.target.classList.contains('overlay')){
		callbackWrap.classList.remove('active')
		callbackOverlay.classList.remove('active')
		document.querySelector('body').style.overflow = 'visible'
	}
})

const indexRunning = document.querySelector('.sites__slider-w'),
			findRunning = document.querySelector('.good__running')

function animateSlider(el, duration, dir, searchEls, numClone = 1) {
  const innerEl = el.querySelector(searchEls);
  const innerWidth = innerEl.offsetWidth;
	const clones = []
	for(let i = 0; i < numClone; i++){
		clones.push(innerEl.cloneNode(true))
		el.appendChild(clones[i])
	}
  let start = performance.now();
  let progress;
  let translateX;
  let translateY;
  requestAnimationFrame(function step(now) {
    progress = (now - start) / duration;
    if (progress > 1) {
    	progress %= 1;
      start = now;
    }
    translateX = innerWidth * progress;
    translateY = innerHeight * progress;
    if(dir === 'v'){
			innerEl.style.transform = `translate3d(0,-${translateY}px , 0)`;
			clones.forEach(item => {
				item.style.transform = `translate3d(0,-${translateY}px , 0)`;
			})
		} else if(dir ==='h'){
			innerEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
			clones.forEach(item => {
				item.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
			})
		}
    requestAnimationFrame(step);
  });
}

if(indexRunning){
	if(window.innerWidth > 992){
		animateSlider(indexRunning, 20000,'v', '.sites__carousel');
	} else {
		animateSlider(indexRunning, 40000,'h', '.sites__carousel');
	}
}
if(findRunning)
	animateSlider(findRunning, 22000, 'h', '.good__row', 3);


const clickableImages = document.querySelectorAll('.report__i'),
			reportBtns = document.querySelectorAll('.report__btn'),
			reportOverlay = document.querySelector('.report .overlay'),
			reportIframe = document.querySelector('.report__iframe')

const reportIframeLinks = [
	'0dZVAxEMnro','ouIgCNyO960','P58_YI2Ncaw','0IQty8jOyTc',
	'Y4v9pmz1xD0','yQPhY3XY6JA','zYU8B_pORfo'
]

clickableImages.forEach((item, i) => {
	item.addEventListener('click', () => showIframe(i))
})
reportBtns.forEach((item, i) => {
	item.addEventListener('click', () => showIframe(i))
})

function addRemoveReportsClass(move, i){
	if(move){
		reportIframe.src = `https://www.youtube.com/embed/${reportIframeLinks[i]}`
		reportOverlay.classList.add('active')
		reportIframe.classList.add('active')
		document.querySelector('body').style.overflow = 'hidden'
	} else {
		reportIframe.src = `https://www.youtube.com/embed/`
		reportOverlay.classList.remove('active')
		reportIframe.classList.remove('active')
		document.querySelector('body').style.overflow = 'visible'
	}
}

function showIframe(i){
	addRemoveReportsClass(true, i)
	window.addEventListener('click', (e) => {
		if(e.target.classList.value === 'report__place' || e.target.classList.value === 'report__exit')
			addRemoveReportsClass(false , i)
	})
}

const postExWrap = document.querySelector('.postEx__wrapp'),
			postExSlides = postExWrap.querySelectorAll('.swiper-slide'),
			postExClose = document.querySelector('.postEx__exit'),
			postExSwiper = document.querySelector('.postEx__swiper')

const postExArray = [postExSwiper.offsetHeight, postExSwiper.offsetWidth]

postExSlides.forEach(item => {
	item.addEventListener('click', (e) => {
		postExWrap.classList.add('active')
		calcSizes(postExSwiper)
		document.querySelector('body').style.overflow = 'hidden'
	})
})


function calcSizes (elem) {
	const height = postExWrap.offsetHeight
	const width = height * 0.9
	setSizes(elem, [height,width])
}
function setSizes (item, [h,w]) {
	item.style.height = h + 'px'
	item.style.width = w + 'px'
}

postExClose.addEventListener('click', () => {
	postExWrap.classList.remove('active')
	setSizes(postExSwiper, postExArray)
	document.querySelector('body').style.overflow = 'visible'
})
