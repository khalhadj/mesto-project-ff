import { openImagePopup } from './index.js'

const initialCards = [
	{
		name: 'Архыз',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
	},
	{
		name: 'Челябинская область',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
	},
	{
		name: 'Иваново',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
	},
	{
		name: 'Камчатка',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
	},
	{
		name: 'Холмогорский район',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
	},
	{
		name: 'Байкал',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
	},
]

// УДАЛЕНИЕ КАРТОЧКИ

function deleteCard(cardElement) {
	cardElement.remove()
}

// LIKE КАРТОЧКИ

function toggleCardLike(button) {
	button.classList.toggle('card__like-button_is-active')
}

// СОЗДАНИЕ КАРТОЧКИ

function createCard(cardDetail, openImagePopup) {
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

	deleteButton.addEventListener('click', function () {
		deleteCard(cardElement)
	})

	likeButton.addEventListener('click', function () {
		toggleCardLike(likeButton)
	})

	cardImage.addEventListener('click', function () {
		openImagePopup(cardDetail)
	})

	return cardElement
}

export { createCard, initialCards }
