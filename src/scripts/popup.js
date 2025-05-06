const allPopups = document.querySelectorAll('.popup')
const editPopup = document.querySelector('.popup_type_edit')
const editButton = document.querySelector('.profile__edit-button')
const addButton = document.querySelector('.profile__add-button')
const closeButton = document.querySelector('.popup__close')

editButton.addEventListener('click', function () {
	editPopup.style.display = 'flex'
})

addButton.addEventListener('click', function () {
	editPopup.style.display = 'flex'
})

// Закрываем попап

function closePopup(popup) {
	popup.style.display = 'none'
}

closeButton.addEventListener('click', function () {
	const popup = closeButton.closest('.popup')
	closePopup(popup)
})

allPopups.forEach(function (popup) {
	popup.addEventListener('click', function (event) {
		if (event.target === popup) {
			closePopup(popup)
		}
	})
})

document.addEventListener('keydown', function (event) {
	if (event.key === 'Escape') {
		var openedPopup = document.querySelector('.popup[style*="display: flex"]')
		if (openedPopup) {
			closePopup(openedPopup)
		}
	}
})
