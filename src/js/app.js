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

const inputEmail = document.querySelector("#phone-email"),
			inputReg = document.querySelector("#phone-reg"),
			inputCall = document.querySelector("#phone-call")
const inputs = [
	[inputEmail,'.mail__input_w'],
	[inputReg, '.registration__input_w'],
	[inputCall, '.callback_w']
]
inputs.forEach(item => {
	window.intlTelInput(item[0], {
		// allowDropdown: false,
		autoHideDialCode: true,
		autoPlaceholder: "(999) 999 99-99",
		dropdownContainer: document.querySelector(item[1]),
		// excludeCountries: ["us"],
		formatOnDisplay: true,
		geoIpLookup: function(callback) {
			$.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
				var countryCode = (resp && resp.country) ? resp.country : "";
				callback(countryCode);
			});
		},
		customPlaceholder: function(selectedCountryPlaceholder, selectedCountryData) {
			return "e.g. " + selectedCountryPlaceholder;
		},
		// hiddenInput: "full_number",
		initialCountry: "ru",
		singleDialCode: true,
		// localizedCountries: { 'de': 'Deutschland' },
		nationalMode: false,
		// onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
		placeholderNumberType: "MOBILE",
		preferredCountries: ['ru', 'by'],
		separateDialCode: true,
		utilsScript: "../js/utils.js",
	});
	item[0].style.paddingLeft = '90px'
})


const menu = document.querySelectorAll('.header__item')

menuSelect()
function menuSelect() {
	menu.forEach(item => {
		if(item.querySelector('.header__dropdown')){
			let el = item.querySelector('.header__dropdown')
			item.addEventListener('mouseenter', (e) => {
				el.style.display = 'block'
				el.classList.add('active')
				checkMouseLeaveMoment(item, 200)
			})
			item.addEventListener('mouseleave' ,() => {
				el.classList.remove('active')
				el.style.display = 'none'
			})
		}
	})
}

function sleep(time){
	let k = Date.now()
	let def = 0
	do{
		def = Date.now() - k
	} while(def < time)
	delete k
	delete def
}

function checkMouseLeaveMoment(item,time){
	item.addEventListener('mousemove', (e) => {
		if(e.toElement.className !== 'header__item'){
			sleep(time)
		}
	})
}


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

function setTranslateValue(item, valY, valX = 0){
	item.style.transform = `translate(${valX}px,${valY}px)`
}
const mobileScrollHeight = Math.max(mobileMenu.scrollHeight + 25, window.innerHeight)

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
			mailCLose = document.querySelector('.mail-wrap__i'),
			body = document.querySelector('body')

email.addEventListener('click', (e) => {
	if(!mailWrap.classList.contains('active')){
		mailWrap.classList.add('active')
		mailOverlay.classList.add('active')
		body.style.overflow = 'hidden'
	}
})

mailCLose.addEventListener('click', () => {
	mailWrap.classList.remove('active')
	mailOverlay.classList.remove('active')
	body.style.overflow = 'visible'
})

window.addEventListener('click', (e) => {
	if(e.target.classList.contains('overlay')){
		mailWrap.classList.remove('active')
		mailOverlay.classList.remove('active')
		body.style.overflow = 'visible'
	}
})
// callback popup

const callback = document.querySelector('.cta__phone'),
			callbackWrap = document.querySelector('.callback-wrapp'),
			headerMobileCallback = document.querySelector('.header-mob__link_callback'),
			callbackOverlay = document.querySelector('.callback-wrapp .overlay'),
			callbackCLose = document.querySelector('.callback-wrap__i'),
			headerPhone = document.querySelector('.header__phone')



callback.addEventListener('click', (e) => {
	if(!callbackWrap.classList.contains('active')){
		callbackWrap.classList.add('active')
		callbackOverlay.classList.add('active')
		body.style.overflow = 'hidden'
	}
})
headerMobileCallback.addEventListener('click', (e) => {
	if(!callbackWrap.classList.contains('active')){
		e.preventDefault()
		callbackWrap.classList.add('active')
		callbackOverlay.classList.add('active')
		body.style.overflow = 'hidden'
	}
})
headerPhone.addEventListener('click', (e) => {
	if(!headerPhone.classList.contains('active')){
		callbackWrap.classList.add('active')
		callbackOverlay.classList.add('active')
		body.style.overflow = 'hidden'
	}
})

callbackCLose.addEventListener('click', () => {
	callbackWrap.classList.remove('active')
	callbackOverlay.classList.remove('active')
	body.style.overflow = 'visible'
})

window.addEventListener('click', (e) => {
	if(e.target.classList.contains('overlay')){
		callbackWrap.classList.remove('active')
		callbackOverlay.classList.remove('active')
		body.style.overflow = 'visible'
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
