function openPopup(popup) {
	popup.classList.add('popup_is-opened')
}

function closePopup(popup) {
	popup.classList.remove('popup_is-opened')
}

function initPopups() {
	const allPopups = document.querySelectorAll('.popup')
	const editPopup = document.querySelector('.popup_type_edit')
	const editButton = document.querySelector('.profile__edit-button')
	const addButton = document.querySelector('.profile__add-button')
	const newCard = document.querySelector('.popup_type_new-card')
	const closeButtons = document.querySelectorAll('.popup__close')
	const profileName = document.querySelector('.profile__title')
	const profileDescription = document.querySelector('.profile__description')
	const descriptionInput = document.querySelector(
		'.popup__input_type_description'
	)
	const nameInput = document.querySelector('.popup__input_type_name')

	editButton.addEventListener('click', function () {
		nameInput.value = profileName.textContent
		descriptionInput.value = profileDescription.textContent
		openPopup(editPopup)
	})

	addButton.addEventListener('click', function () {
		openPopup(newCard)
	})

	closeButtons.forEach(function (button) {
		button.addEventListener('click', function () {
			const popup = button.closest('.popup')
			closePopup(popup)
		})
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
			const openedPopup = document.querySelector('.popup.popup_is-opened')
			if (openedPopup) {
				closePopup(openedPopup)
			}
		}
	})
}

export { initPopups, openPopup, closePopup }
