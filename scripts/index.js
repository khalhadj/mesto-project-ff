function createCard(cardDetail, cardDelete) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardImage.src = cardDetail.link;
  cardTitle.textContent = cardDetail.name;

  deleteButton.addEventListener("click", () => cardDelete(cardElement));
  return cardElement;
}

function cardDelete(cardElement) {
  cardElement.remove();
}

function renderCards() {
  const placesList = document.querySelector(".places__list");

  initialCards.forEach((cardDetail) => {
    const cardElement = createCard(cardDetail, cardDelete);
    placesList.append(cardElement);
  });
}

renderCards();
