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
	setPrice(rateCols,'.rate__select','.rate__buy')
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
function getPrice(col, btnClass, selectClass, quaries = 0){
	const btn = col.querySelector(btnClass)
	let num = 0
	col.querySelectorAll('.rate__price').forEach(el => {
		if(!el.classList.contains('none')){
			num = el.innerText.replace(' руб','').replace(' ','')
			if(!quaries){
				btn.innerText = `Подключить за ${mainPrice(+num,getSelectValue(col,selectClass))} ₽`
			}
		}
	});
	if(quaries){
		let name = col.querySelector('.rate__name').innerText
		return {btn, num, name}
	}
}

function mainPrice(price, num){
	return Math.round(price*num*(1- ( num == 10 ? 0.15 : num >= 5 ? 0.1 : 0)))
}
function getSelectValue(col,selectClass){
	const select = col.querySelector(selectClass)
	return select.value
}

addHash(rateCols)

function addHash(cols){
	cols.forEach(col => {
		let {btn} = getPrice(col, '.rate__buy', '', 1)
		btn.addEventListener('click', (e) => {
			let {num, name} = getPrice(col, '.rate__buy', '', 1)
			e.preventDefault()
			let baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + 'register.html';
			let URL = baseUrl + 
			'?tariff_code=' + `${translateTariffNames(name)}` +
			'&cost=' + `${mainPrice(+num,getSelectValue(col,'.rate__select'))}`
			console.log(URL);
			window.location.href = URL
		})
	})
}
function translateTariffNames(name){
	let ru = ['Минимальный', 'Оптимальный', 'Максимальный'],
			en = ['starting', 'advanced', 'maximum']
	for(let i = 0; i < ru.length; i++){
		if(ru[i] === name){
			return en[i]
		}
	}
}


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

const collectBtn = document.querySelector('.collect__btn'),
			collectOverlay = document.querySelector('.collect .overlay')

collectBtn.addEventListener('click', (e) => {
	collectOverlay.classList.add('active')
	activeQuiz(i)
	document.querySelector('body').style.overflow = 'hidden'
})

collectOverlay.addEventListener('click', (e) => {
	if(e.target.classList[0] === 'overlay_cont'){
		collectOverlay.classList.remove('active')
		document.querySelector('body').style.overflow = 'visible'
	}
})

const quizNext = document.querySelector('.quiz__btn_next')
const quizNextText = document.querySelector('.quiz__btn_next span')
const quizPrev = document.querySelector('.quiz__btn_prev')
const quizItems = document.querySelectorAll('.quiz__item')
const quizTop = document.querySelector('.quiz-top')
const quizCounter = document.querySelector('.quiz-top__span')
const quizProgress = document.querySelector('.quiz__progress')
const quizProgressSpan = document.querySelector('.quiz__progress span')
let i = 0;


function activeQuiz(i){
	addDisabled()
	addActive(i)
	quizCounter.innerText = `${calcActive() + 1}/6`
	quizProgressSpan.style.width = (quizProgress.offsetWidth / 6)*calcActive() + 'px'
	if(i === 6) {
		quizTop.style.display = 'none'
		quizProgress.style.display = 'none'
	}
	if(quizTop.style.display = 'none' && i != 6){
		quizTop.style.display = 'block'
		quizProgress.style.display = 'block'
	}
	quizNext.addEventListener('click', () => {
		if(i<6){
			if(i < 5){
				quizNextText.textContent = 'Вперед'
			} else if( i === 5 ){
				quizNextText.textContent = 'Далее'
			}
			i = i + 1
			activeQuiz(i)
			return false
		}else {
			document.location.href = document.location.href + '/thank-you.html'
		}
	})
	if(i>0){
		quizPrev.classList.remove('quiz__btn_disabled')
	} else {
		quizPrev.classList.add('quiz__btn_disabled')
	}
	quizPrev.addEventListener('click', () => {
		if(i>0){
			i = i - 1
			activeQuiz(i)
			return false
		}
	})
}

function calcActive(){
	let i = 0
	for(let j = 0; j < quizItems.length; j++){
		if(!quizItems[j].classList.contains('quiz-disabled')){
			i = j
		}
	}
	return i
}

function addDisabled(){
	quizItems.forEach(e => {
		e.classList.add('quiz-disabled')
	});
}
function addActive(index){
	quizItems[index].classList.remove('quiz-disabled')
}






function outputUpdate(vol) {
	const output = document.querySelector('#volume');
	const k = document.querySelector('#fader').offsetWidth / 100
	output.value = vol;
	output.style.left = k*vol - 4 + 'px';
	if(output.value > 16){
		output.style.left = k*vol - 8 + 'px';
	}
	if(output.value > 24){
		output.style.left = k*vol - 10 + 'px';
	}
	if(output.value > 32){
		output.style.left = k*vol - 16 + 'px';
	}
	if(output.value > 48){
		output.style.left = k*vol - 20 + 'px';
	}
	if(output.value > 58){
		output.style.left = k*vol - 24 + 'px';
	}
	if(output.value > 95){
		output.style.left = k*vol - 28 + 'px';
	}
}

for (let e of document.querySelectorAll('#fader.slider-progress')) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}
