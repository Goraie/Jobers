const rateBtns = document.querySelectorAll('.rate__btn')
const tariff = document.querySelectorAll('.rate__tariff .rate__flex .rate__once')
function changeTariffData() {
	for(let i =0 ; i < tariff.length; i++){
		tariff[i].classList.toggle('none')
	}
}

rateBtns.forEach(item => {
	item.addEventListener('click', () => {
		if(!item.classList.contains('active')){
			rateBtns.forEach(elem => {
				elem.classList.toggle('active')
				tariff.forEach(item => {
					if(item.classList.contains('none')){
						item.classList.remove('none')
					} else {
						item.classList.add('none')
					}
				})
			})
		}
	})
})

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
animateSlider(document.querySelector('.sites__slider-w'), window.innerWidth > 992 ? 20000 : 50000 , window.innerWidth > 992 ? 'v' : 'h' );
