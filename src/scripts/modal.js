function closeEsc(event) {
	if (event.key === 'Escape') {
		const openedPopup = document.querySelector('.popup_is-opened')
		if (openedPopup) {
			closePopup(openedPopup)
		}
	}
}

function openPopup(popup) {
	popup.classList.add('popup_is-opened')
	document.addEventListener('keydown', closeEsc)
}

function closePopup(popup) {
	popup.classList.remove('popup_is-opened')
	document.removeEventListener('keydown', closeEsc)
}

export { openPopup, closePopup }
