const rateBtns = document.querySelectorAll('.rate__btn'),
			rateBtnMobile = document.querySelector('.rate__btn_m')
const tariff = document.querySelectorAll('.rate__tariff .rate__once'),
			tariffMobile = document.querySelectorAll('.rate-m__card .rate__once')
const rateCols = document.querySelectorAll('.rate__tariff'),
			rateColsMobile = document.querySelectorAll('.rate-m__card ')

rateBtns.forEach(item => {
	item.addEventListener('click', () => {
		if(!item.classList.contains('active')){
			rateBtns.forEach(elem => {
				elem.classList.toggle('active')
			})
			changeTariffData(tariff)
			setPrice(rateCols,'.rate__select','.rate__buy')
		}
	})
})
let startValue = rateBtnMobile.value
rateBtnMobile.addEventListener('change', () => {
	if(!(startValue === rateBtnMobile.value)){
		changeTariffData(tariffMobile)
		setPrice(rateColsMobile,'.rate__select','.rate__buy')
		startValue = rateBtnMobile.value
	}
})



function changeTariffData(tariff) {
	for(let i =0 ; i < tariff.length; i++){
		tariff[i].classList.toggle('none')
	}
}
function setPrice(rateCols, selectClass, btnClass){
	rateCols.forEach(col => {
		getPrice(col,btnClass, selectClass)
		const select = col.querySelector(selectClass)
		col.addEventListener('click', () => getPrice(col, btnClass, selectClass))
		select.addEventListener('change', () => getPrice(col,btnClass, selectClass))
	})
}
function getPrice(col, btnClass, selectClass){
	const btn = col.querySelector(btnClass)
	col.querySelectorAll('.rate__price').forEach(el => {
		if(!el.classList.contains('none')){
			const num = el.innerText.replace(' руб','').replace(' ','')
			btn.innerText = `Подключить за ${mainPrice(+num,getSelectValue(col,selectClass))} ₽`
		}
	});
}
function mainPrice(price, num){
	return Math.round(price*num*(1- ( num == 10 ? 0.15 : num >= 5 ? 0.1 : 0)))
}
function getSelectValue(col,selectClass){
	const select = col.querySelector(selectClass)
	return select.value
}

// const rateBtns = document.querySelectorAll('.rate__btn'),
// 			tariff = document.querySelectorAll('.rate__tariff .rate__once'),
// 			tariffMobile = document.querySelectorAll('.rate-m__card .rate__once'),
// 			rateSelect = document.querySelector('.rate__btn_m')
			
// const rateCols = document.querySelectorAll('.rate__tariff')

// rateBtns.forEach(item => {
// 	item.addEventListener('click', () => {
// 		if(!item.classList.contains('active')){
// 			rateBtns.forEach(elem => {
// 				elem.classList.toggle('active')
// 			})
// 			tariff.forEach(el => el.classList.toggle('none'))
// 			changeData('.rate__buy','.rate__select')
// 		}
// 	})
// })
// function changeData(btnClass,selectClass){
// 	rateCols.forEach(item => {
// 		const btn = item.querySelector(btnClass),
// 					select = item.querySelector(selectClass),
// 					priceArr = item.querySelector('.rate__price')
// 	})
// }

// function setPrice(priceArr, select, btn){
// 	let price = 0
// 	priceArr.forEach(elem => {
// 		if(!elem.classList.contains('none')){
// 			price = +(elem.innerText.replace(' ','').replace(' руб', '')) * select.value*( +(select.value) >= 5 ? 0.9 : +(select.value) === 10 ? 0.85 : 1)
// 		}
// 	})
// 	btn.innerText = `Подключить за ${price} ₽`
// }



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
animateSlider(document.querySelector('.sites__slider-w'),
							window.innerWidth > 992 ? 20000 : 50000 ,
							window.innerWidth > 992 ? 'v' : 'h' )
window.addEventListener('resize', () => 
animateSlider(
	document.querySelector('.sites__slider-w'),
	window.innerWidth > 992 ? 20000 : 50000 ,
	window.innerWidth > 992 ? 'v' : 'h' )
)