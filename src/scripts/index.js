import { createCard, initialCards } from './cards.js'
import { openPopup, closePopup } from './modal.js'
import '../pages/index.css'

const allPopups = document.querySelectorAll('.popup')
const editPopup = document.querySelector('.popup_type_edit')
const editButton = document.querySelector('.profile__edit-button')
const addButton = document.querySelector('.profile__add-button')
const newCardPopup = document.querySelector('.popup_type_new-card')
const closeButtons = document.querySelectorAll('.popup__close')
const profileName = document.querySelector('.profile__title')
const profileDescription = document.querySelector('.profile__description')
const descriptionInput = document.querySelector(
	'.popup__input_type_description'
)
const nameInput = document.querySelector('.popup__input_type_name')
const formNewCard = document.querySelector('form[name="new-place"]')
const inputTitle = formNewCard.querySelector('.popup__input_type_card-name')
const inputLink = formNewCard.querySelector('.popup__input_type_url')
const popupNewCard = document.querySelector('.popup_type_new-card')
const cardContainer = document.querySelector('.places__list')
const formEditProfile = document.querySelector('form[name="edit-profile"]')
const inputName = formEditProfile.querySelector('.popup__input_type_name')
const inputJob = formEditProfile.querySelector('.popup__input_type_description')
const popupEditProfile = document.querySelector('.popup_type_edit')
const popupImage = document.querySelector('.popup_type_image')
const popupImgElement = popupImage.querySelector('.popup__image')
const popupCaption = popupImage.querySelector('.popup__caption')

// РЕНДЕР КАРТОЧЕК

initialCards.forEach(function (cardDetail) {
	const cardElement = createCard(
		cardDetail,
		popupImage,
		popupImgElement,
		popupCaption
	)
	cardContainer.append(cardElement)
})

// ДОБАВЛЕНИЕ КАРТОЧКИ ЧЕРЕЗ +

formNewCard.addEventListener('submit', function (event) {
	const newCard = {
		name: inputTitle.value,
		link: inputLink.value,
	}
	const cardElement = createCard(
		newCard,
		popupImage,
		popupImgElement,
		popupCaption
	)
	event.preventDefault()

	cardContainer.prepend(cardElement)
	formNewCard.reset()
	closePopup(popupNewCard)
})

// РЕДАКТИРОВАНИЕ ПРОФИЛЯ

function handleProfileFormSubmit(evt) {
	evt.preventDefault()
	profileName.textContent = inputName.value
	profileDescription.textContent = inputJob.value
	closePopup(popupEditProfile)
}

// СЛУШАТЕЛИ

editButton.addEventListener('click', function () {
	nameInput.value = profileName.textContent
	descriptionInput.value = profileDescription.textContent
	openPopup(editPopup)
})

addButton.addEventListener('click', function () {
	openPopup(newCardPopup)
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

formEditProfile.addEventListener('submit', handleProfileFormSubmit)
