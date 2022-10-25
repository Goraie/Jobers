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



