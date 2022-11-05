const swiper = new Swiper('.postEx__swiper', {
		speed: 400,
		spaceBetween: 150,
		pagination: {
			el: '.swiper-pagination',
			clickable: 'true'
		},
		navigation: {
			nextEl: '.postEx__btn-next',
			prevEl: '.postEx__btn-prev',
		},
})

const reportsSlider = new Swiper('.report__w', {
	speed: 400,
	effect: 'slide',
	slidesPerView: 4,
	spaceBetween: 50,
	navigation: {
		nextEl: '.report__bnt-right',
		prevEl: '.report__bnt-left',
	},
	breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    577: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    769: {
      slidesPerView: 3,
      spaceBetween: 40
    },
		1100: {
			slidesPerView:4,
			spaceBetween: 50
		}
  }
})