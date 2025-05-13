import { initialCards } from './cards.js'
import { initPopups, openPopup, closePopup } from './popup.js'
import '../pages/index.css'

// === СОЗДАНИЕ КАРТОЧКИ ===

function createCard(cardDetail, deleteCard, handleLike) {
	const cardTemplate = document.querySelector('#card-template').content
	const cardElement = cardTemplate
		.querySelector('.places__item')
		.cloneNode(true)
	const cardImage = cardElement.querySelector('.card__image')
	const cardTitle = cardElement.querySelector('.card__title')
	const deleteButton = cardElement.querySelector('.card__delete-button')
	const likeButton = cardElement.querySelector('.card__like-button')

	cardImage.alt = cardDetail.name
	cardImage.src = cardDetail.link
	cardTitle.textContent = cardDetail.name

	deleteButton.addEventListener('click', () => deleteCard(cardElement))
	likeButton.addEventListener('click', () => handleLike(likeButton))
	return cardElement
}

// УДАЛЕНИЕ КАРТОЧКИ

function deleteCard(cardElement) {
	cardElement.remove()
}

// LIKE КАРТОЧКИ

function handleLike(button) {
	button.classList.toggle('card__like-button_is-active')
}

// РЕНДЕР КАРТОЧЕК

function renderCards() {
	const placesList = document.querySelector('.places__list')

	initialCards.forEach(cardDetail => {
		const cardElement = createCard(cardDetail, deleteCard, handleLike)
		placesList.append(cardElement)
	})
}

renderCards()
initPopups()

// === ДОБАВЛЕНИЕ КАРТОЧКИ ЧЕРЕЗ + ===

const formNewCard = document.querySelector('form[name="new-place"]')
const inputTitle = formNewCard.querySelector('.popup__input_type_card-name')
const inputLink = formNewCard.querySelector('.popup__input_type_url')
const popupNewCard = document.querySelector('.popup_type_new-card')
const cardContainer = document.querySelector('.places__list')

formNewCard.addEventListener('submit', function (event) {
	event.preventDefault()

	const newCard = {
		name: inputTitle.value,
		link: inputLink.value,
	}
	const cardElement = createCard(newCard, deleteCard, handleLike)
	cardContainer.prepend(cardElement)
	formNewCard.reset()
	closePopup(popupNewCard)
})

// === РЕДАКТИРОВАНИЕ ПРОФИЛЯ ===

const formEditProfile = document.querySelector('form[name="edit-profile"]')
const nameInput = formEditProfile.querySelector('.popup__input_type_name')
const jobInput = formEditProfile.querySelector('.popup__input_type_description')
const profileName = document.querySelector('.profile__title')
const profileDescription = document.querySelector('.profile__description')
const popupEditProfile = document.querySelector('.popup_type_edit')

function handleProfileFormSubmit(evt) {
	evt.preventDefault()
	profileName.textContent = nameInput.value
	profileDescription.textContent = jobInput.value
	closePopup(popupEditProfile)
}

formEditProfile.addEventListener('submit', handleProfileFormSubmit)
