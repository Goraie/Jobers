const rewrAcc = document.querySelectorAll('.rewriting-acc__el');
rewrAcc.forEach(item => {
	item.addEventListener('click', () => {
		let open = item.nextElementSibling
		if(item.classList.contains('active')){
			open.style.maxHeight = 0
		} else {
			open.style.maxHeight = open.scrollHeight + 20 + 'px'
		}
		item.classList.toggle('active')
		open.classList.toggle('active')
	})
})
