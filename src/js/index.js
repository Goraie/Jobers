const rateBtns = document.querySelectorAll('.rate__btn')

rateBtns.forEach(item => {
	item.addEventListener('click', () => {
		if(!item.classList.contains('active')){
			rateBtns.forEach(elem => {
				elem.classList.toggle('active')
			})
		}
	})
})

const sitesAll = document.querySelectorAll('.sites__row'),
			desktopCarousel = document.querySelector('.sites__carousel'),
			mobileCarousel = document.querySelector('.sites__mobile')

// window.addEventListener('resize', (e) => runSitesSlider())

function runSitesSlider(){
}

console.log(sitesAll);