
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
		goTopBtn.addEventListener('click', (e) => {
			e.preventDefault()
			window.scrollTo(0, 0)
		})
	} else {
		goTopBtn.classList.remove('show')
	}
})

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
	setTranslateValue(mobileMenu, menuIcon.classList.contains('active') ? 0 : -mobileScrollHeight)
});

// popups

// popups

// function addPopup(elememt, wrapAndOverlay, addOrRemove, overlayCondition = false){
// 	elememt.addEventListener('click', (e) => {
// 		if(overlayCondition && e.target.classList.contains('overlay'))
// 			addPopupClasses(wrapAndOverlay, addOrRemove)
// 		else 
// 			addPopupClasses(wrapAndOverlay, addOrRemove)
// 	})
// }
// function addPopupClasses(elmts, addOrNot){
// 	elmts.forEach(element => {
// 		console.log(element, 'add or remove:		', addOrNot);
// 	});
// }

// // email popup

// const email = document.querySelector('.cta__email'),
// 			mailWrapAndOverlay = [document.querySelector('.mail-wrap'), document.querySelector('.mail-wrap .overlay')],
// 			mailCLose = document.querySelector('.mail-wrap__i')

// addPopup(email, mailWrapAndOverlay, true)
// addPopup(mailCLose, mailWrapAndOverlay, false)
// addPopup(window, mailWrapAndOverlay, false, true)

// // callback popup 

// // const elementsOpeningPopup = [document.querySelector('.cta__phone') , document.querySelector('.header__phone')],
// // 			callbackOverlay = document.querySelector('.callback-wrapp .overlay'),
// // 			callbackWrap = document.querySelector('.callback-wrapp'),
// // 			callbackCLose = document.querySelector('.callback-wrap__i')

// // elementsOpeningPopup.forEach(item => {
// // 	addPopup(item, [callbackWrap, callbackOverlay], true)
// // })

// // addPopup(callbackCLose, [callbackWrap, callbackOverlay], false)
// // addPopup(window, [callbackWrap, callbackOverlay], false, true)


// Имейл

const email = document.querySelector('.cta__email'),
			mailOverlay = document.querySelector('.mail-wrap .overlay'),
			mailWrap = document.querySelector('.mail-wrap'),
			mailCLose = document.querySelector('.mail-wrap__i')

email.addEventListener('click', (e) => {
	if(!mailWrap.classList.contains('active')){
		mailWrap.classList.add('active')
		mailOverlay.classList.add('active')
	}
})

mailCLose.addEventListener('click', () => {
	mailWrap.classList.remove('active')
	mailOverlay.classList.remove('active')
})

window.addEventListener('click', (e) => {
	if(e.target.classList.contains('overlay')){
		mailWrap.classList.remove('active')
		mailOverlay.classList.remove('active')
	}
})
// callback popup

const callback = document.querySelector('.cta__phone'),
			callbackOverlay = document.querySelector('.callback-wrapp .overlay'),
			callbackWrap = document.querySelector('.callback-wrapp'),
			callbackCLose = document.querySelector('.callback-wrap__i'),
			headerPhone = document.querySelector('.header__phone')

console.log(callback);

callback.addEventListener('click', (e) => {
	if(!callbackWrap.classList.contains('active')){
		callbackWrap.classList.add('active')
		callbackOverlay.classList.add('active')
	}
})
headerPhone.addEventListener('click', (e) => {
	if(!headerPhone.classList.contains('active')){
		callbackWrap.classList.add('active')
		callbackOverlay.classList.add('active')
	}
})

callbackCLose.addEventListener('click', () => {
	callbackWrap.classList.remove('active')
	callbackOverlay.classList.remove('active')
})

window.addEventListener('click', (e) => {
	if(e.target.classList.contains('overlay')){
		callbackWrap.classList.remove('active')
		callbackOverlay.classList.remove('active')
	}
})

