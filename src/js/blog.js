const blogCategories = document.querySelectorAll('.categories__btn'),
			blog = document.querySelectorAll('.blog-card')

blogCategories.forEach(el => {
	el.addEventListener('click', (e) => {
		if(!el.classList.contains('active')){
			blogCategories.forEach(item => item.classList.remove('active'))
			el.classList.add('active')
			if(el.dataset.categories != 0){
				blog.forEach(item => {
					if(item.classList.contains(el.dataset.categories)){
						item.classList.remove('none')
					} else {
						item.classList.add('none')
					}
				})
			} else {
				blog.forEach(item => {
					if(item.classList.contains('none')){
						item.classList.remove('none')
					}
				})
			}
		}
	})
	console.log();
})