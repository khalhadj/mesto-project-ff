const popupImage = document.querySelector('.popup_type_image')
const popupImgElement = popupImage.querySelector('.popup__image')
const popupCaption = popupImage.querySelector('.popup__caption')
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

function openImagePopup(name, link) {
	popupImgElement.src = link
	popupImgElement.alt = name
	popupCaption.textContent = name

	openPopup(popupImage)
}

export { openPopup, closePopup, openImagePopup }
