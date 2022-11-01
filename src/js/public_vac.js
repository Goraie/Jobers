const btns = document.querySelectorAll('.tariftoplace__btn')

function el(btns){
	btns.forEach(item => {
		item.addEventListener('click', () => {
			if(!item.classList.contains('active')){
				btns.forEach(el => {
					el.classList.toggle('active')
				})
			}
		})
	})
}

if(btns.length)
	el(btns)

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