import { initialCards } from './cards.js'
import '../pages/index.css'

function createCard(cardDetail, deleteCard) {
	const cardTemplate = document.querySelector('#card-template').content
	const cardElement = cardTemplate
		.querySelector('.places__item')
		.cloneNode(true)
	const cardImage = cardElement.querySelector('.card__image')
	const cardTitle = cardElement.querySelector('.card__title')
	const deleteButton = cardElement.querySelector('.card__delete-button')

	cardImage.alt = cardDetail.name
	cardImage.src = cardDetail.link
	cardTitle.textContent = cardDetail.name

	deleteButton.addEventListener('click', () => deleteCard(cardElement))
	return cardElement
}

function deleteCard(cardElement) {
	cardElement.remove()
}

function renderCards() {
	const placesList = document.querySelector('.places__list')

	initialCards.forEach(cardDetail => {
		const cardElement = createCard(cardDetail, deleteCard)
		placesList.append(cardElement)
	})
}

renderCards()

// Открываем попап

const allPopups = document.querySelector('.popup')
const editPopup = document.querySelector('.popup_type_edit')
const editButton = document.querySelector('.profile__edit-button')
const addButton = document.querySelector('.profile__add-button')
const closeButton = document.querySelector('.popup__close')

editButton.addEventListener('click', () => {
	editPopup.style.display = 'flex'
})

addButton.addEventListener('click', () => {
	editPopup.style.display = 'flex'
})

// Закрываем попап

function closePopup(popup) {
	popup.style.display = 'none'
}

closeButton.addEventListener('click', () => {
	closePopup(allPopups)
})
