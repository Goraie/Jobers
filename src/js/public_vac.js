// const btns = document.querySelectorAll('.tariftoplace__btn')
const tarifItems = document.querySelectorAll('.tariftoplace__item'),
			tarifToggle = document.querySelectorAll('.tarif__toggle'),
			tarifBtns = document.querySelectorAll('.tariftoplace__btn')


// tarifItems.forEach(card => {
// 	console.log(card.querySelectorAll('.tariftoplace__places.tarif__toggle'))

// 	// console.log(Array.from(card.querySelectorAll('.tariftoplace__places')).filter(el => {return !el.classList.contains('toggle')})[0].querySelectorAll('.tariftoplace__i').length);
// 	card.querySelector('.tariftoplace__span').innerText = `(${Array.from(card.querySelectorAll('.tariftoplace__places.tarif__toggle')).filter(el => {return !el.classList.contains('toggle')})[0].querySelectorAll('.tariftoplace__i').length})`
// })
tarifBtns.forEach(btn => {
	setCountImages(tarifItems)
	calcPrice(tarifItems)
	btn.addEventListener('click', () => {
		if(!btn.classList.contains('active')){
			tarifBtns.forEach(el => {
				el.classList.toggle('active')
			})
			tarifToggle.forEach(item => {
				item.classList.toggle('toggle')
			})
			setCountImages(tarifItems)
			calcPrice(tarifItems)
		}
	})
})


function calcPrice(cards){
	cards.forEach(card => {
		const price = Array.from(card.querySelectorAll('.tariftoplace__price')).filter((elem) => {return !elem.classList.contains('toggle')})[0].innerText.replace(' ₽','')
		const btn = card.querySelector('.tariftoplace__buy')
		btn.innerText = `Заказать за ${(+price)*0.9} ₽`
	})
}
function setCountImages(cards){
	cards.forEach(card => {
		card.querySelector('.tariftoplace__span').innerText = `(${Array.from(card.querySelectorAll('.tariftoplace__places')).filter(el => {return !el.classList.contains('toggle')})[0].querySelectorAll('.tariftoplace__i').length})`
	})
}

// function el(btns){
// 	btns.forEach(item => {
// 		item.addEventListener('click', () => {
// 			if(!item.classList.contains('active')){
// 				btns.forEach(el => {
// 					el.classList.toggle('active')
// 				})
// 			}
// 		})
// 	})
// }

// if(btns.length)
// 	el(btns)

const tarifToPlaces = document.querySelectorAll('.tariftoplace__item')
tarifToPlaces.forEach(item => {
	item.querySelector('.tariftoplace__span').innerText = `(${item.querySelectorAll('.tariftoplace__i').length})`
})

const labels = document.querySelectorAll('.tariftoplace__label')
labels.forEach(item => {
	item.addEventListener('click', () => {
		item.querySelector('.tariftoplace__mask').classList.toggle('active')
	})
})

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