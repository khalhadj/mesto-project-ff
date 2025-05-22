let currentEscHandler = null

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
	currentEscHandler = closeEsc
	document.addEventListener('keydown', currentEscHandler)
}

function closePopup(popup) {
	popup.classList.remove('popup_is-opened')

	if (currentEscHandler) {
		document.removeEventListener('keydown', currentEscHandler)
		currentEscHandler = null
	}
}

function openImagePopup(name, link, popupImage, popupImgElement, popupCaption) {
	popupImgElement.src = link
	popupImgElement.alt = name
	popupCaption.textContent = name

	openPopup(popupImage)
}

export { openPopup, closePopup, openImagePopup }
