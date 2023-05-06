const burger = document.querySelector('.header__menu')
const backgourndOpacity = document.querySelector('.backgournd__opacity')

window.addEventListener(
	'resize',
	function (event) {
		if (window.innerWidth <= 576) {
			document.addEventListener('click', e => {
				const isDropdownButton = e.target.matches('[data-dropdown-menu]')
				if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return
				let currentDropdown
				if (isDropdownButton) {
					currentDropdown = e.target.closest('[data-dropdown]')
					currentDropdown.classList.toggle('active')
					backgourndOpacity.classList.toggle('active')
					if (burger.classList.value.match(/active/gm) == 'active') {
						document.querySelector('body').style.overflow = 'hidden'
						document.querySelector('body').style.opacity = '1'
					} else {
						document.querySelector('body').style.overflow = 'auto'
					}
				}
				document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
					if (dropdown === currentDropdown) return
					dropdown.classList.remove('active')
					backgourndOpacity.classList.remove('active')
					if (burger.classList.value.match(/header__menu/gm) == 'header__menu') {
						document.querySelector('body').style.overflow = 'auto'
					}
				})
			})
		} else {
			document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
				dropdown.classList.remove('active')
				backgourndOpacity.classList.remove('active')
				document.querySelector('body').style.overflow = 'auto'
			})
		}
	},
	true
)
if (window.innerWidth <= 576) {
	document.addEventListener('click', e => {
		const isDropdownButton = e.target.matches('[data-dropdown-menu]')
		if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return
		let currentDropdown
		if (isDropdownButton) {
			currentDropdown = e.target.closest('[data-dropdown]')
			currentDropdown.classList.toggle('active')
			backgourndOpacity.classList.toggle('active')
			if (burger.classList.value.match(/active/gm) == 'active') {
				document.querySelector('body').style.overflow = 'hidden'
				document.querySelector('body').style.opacity = '1'
			} else {
				document.querySelector('body').style.overflow = 'auto'
			}
		}
		document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
			if (dropdown === currentDropdown) return
			dropdown.classList.remove('active')
			backgourndOpacity.classList.remove('active')
			if (burger.classList.value.match(/header__menu/gm) == 'header__menu') {
				document.querySelector('body').style.overflow = 'auto'
			}
		})
	})
} else {
	document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
		dropdown.classList.remove('active')
		backgourndOpacity.classList.remove('active')
		document.querySelector('body').style.overflow = 'auto'
	})
}
