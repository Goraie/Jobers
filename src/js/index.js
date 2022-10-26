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

// const sitesAll = document.querySelectorAll('.sites__row'),
// 			desktopCarousel = document.querySelector('.sites__carousel'),
// 			mobileCarousel = document.querySelector('.sites__mobile')

// // window.addEventListener('resize', (e) => runSitesSlider())

// function runSitesSlider(){
// }

// // 

function animateSlider(el, duration, dir) {
  const innerEl = el.querySelector('.sites__carousel');
  const innerWidth = innerEl.offsetWidth;
  const cloneEl = innerEl.cloneNode(true);
  el.appendChild(cloneEl);
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
			cloneEl.style.transform = `translate3d(0,-${translateY}px , 0)`;
		} else if(dir ==='h'){
			innerEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
			cloneEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
		}
    requestAnimationFrame(step);
  });
}
animateSlider(document.querySelector('.sites__slider-w'), 20000, window.innerWidth > 992 ? 'v' : 'h' );
