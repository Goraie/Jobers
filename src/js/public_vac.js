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