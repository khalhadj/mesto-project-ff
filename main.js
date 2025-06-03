/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/pages/index.css?");

/***/ }),

/***/ "./src/scripts/cards.js":
/*!******************************!*\
  !*** ./src/scripts/cards.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCard: () => (/* binding */ createCard),\n/* harmony export */   initialCards: () => (/* binding */ initialCards)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/scripts/index.js\");\n\nvar initialCards = [{\n  name: 'Архыз',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'\n}, {\n  name: 'Челябинская область',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'\n}, {\n  name: 'Иваново',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'\n}, {\n  name: 'Камчатка',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'\n}, {\n  name: 'Холмогорский район',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'\n}, {\n  name: 'Байкал',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'\n}];\n\n// УДАЛЕНИЕ КАРТОЧКИ\n\nfunction deleteCard(cardElement) {\n  cardElement.remove();\n}\n\n// LIKE КАРТОЧКИ\n\nfunction toggleCardLike(button) {\n  button.classList.toggle('card__like-button_is-active');\n}\n\n// СОЗДАНИЕ КАРТОЧКИ\n\nfunction createCard(cardDetail, openImagePopup) {\n  var cardTemplate = document.querySelector('#card-template').content;\n  var cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);\n  var cardImage = cardElement.querySelector('.card__image');\n  var cardTitle = cardElement.querySelector('.card__title');\n  var deleteButton = cardElement.querySelector('.card__delete-button');\n  var likeButton = cardElement.querySelector('.card__like-button');\n  cardImage.alt = cardDetail.name;\n  cardImage.src = cardDetail.link;\n  cardTitle.textContent = cardDetail.name;\n  deleteButton.addEventListener('click', function () {\n    deleteCard(cardElement);\n  });\n  likeButton.addEventListener('click', function () {\n    toggleCardLike(likeButton);\n  });\n  cardImage.addEventListener('click', function () {\n    openImagePopup(cardDetail);\n  });\n  return cardElement;\n}\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/cards.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.js */ \"./src/scripts/cards.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.js */ \"./src/scripts/modal.js\");\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/index.css */ \"./src/pages/index.css\");\n\n\n\nvar allPopups = document.querySelectorAll('.popup');\nvar editPopup = document.querySelector('.popup_type_edit');\nvar editButton = document.querySelector('.profile__edit-button');\nvar addButton = document.querySelector('.profile__add-button');\nvar newCardPopup = document.querySelector('.popup_type_new-card');\nvar closeButtons = document.querySelectorAll('.popup__close');\nvar profileName = document.querySelector('.profile__title');\nvar profileDescription = document.querySelector('.profile__description');\nvar formNewCard = document.querySelector('form[name=\"new-place\"]');\nvar inputTitle = formNewCard.querySelector('.popup__input_type_card-name');\nvar inputLink = formNewCard.querySelector('.popup__input_type_url');\nvar popupNewCard = document.querySelector('.popup_type_new-card');\nvar cardContainer = document.querySelector('.places__list');\nvar formEditProfile = document.querySelector('form[name=\"edit-profile\"]');\nvar inputName = formEditProfile.querySelector('.popup__input_type_name');\nvar inputJob = formEditProfile.querySelector('.popup__input_type_description');\nvar popupEditProfile = document.querySelector('.popup_type_edit');\nvar popupImage = document.querySelector('.popup_type_image');\nvar popupImgElement = popupImage.querySelector('.popup__image');\nvar popupCaption = popupImage.querySelector('.popup__caption');\n\n// ОТКРЫТИЕ ПОПАП С КАРТИНКОЙ\n\nfunction openImagePopup(_ref) {\n  var name = _ref.name,\n    link = _ref.link;\n  popupImgElement.src = link;\n  popupImgElement.alt = name;\n  popupCaption.textContent = name;\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.openPopup)(popupImage);\n}\n\n// РЕНДЕР КАРТОЧЕК\n\n_cards_js__WEBPACK_IMPORTED_MODULE_0__.initialCards.forEach(function (cardDetail) {\n  var cardElement = (0,_cards_js__WEBPACK_IMPORTED_MODULE_0__.createCard)(cardDetail, openImagePopup);\n  cardContainer.append(cardElement);\n});\n\n// ДОБАВЛЕНИЕ КАРТОЧКИ ЧЕРЕЗ +\n\nformNewCard.addEventListener('submit', function (event) {\n  event.preventDefault();\n  var newCard = {\n    name: inputTitle.value,\n    link: inputLink.value\n  };\n  var cardElement = (0,_cards_js__WEBPACK_IMPORTED_MODULE_0__.createCard)(newCard, openImagePopup);\n  cardContainer.prepend(cardElement);\n  formNewCard.reset();\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.closePopup)(popupNewCard);\n});\n\n// РЕДАКТИРОВАНИЕ ПРОФИЛЯ\n\nfunction handleProfileFormSubmit(evt) {\n  evt.preventDefault();\n  profileName.textContent = inputName.value;\n  profileDescription.textContent = inputJob.value;\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.closePopup)(popupEditProfile);\n}\n\n// СЛУШАТЕЛИ\n\neditButton.addEventListener('click', function () {\n  inputName.value = profileName.textContent;\n  inputJob.value = profileDescription.textContent;\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.openPopup)(editPopup);\n});\naddButton.addEventListener('click', function () {\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.openPopup)(newCardPopup);\n});\ncloseButtons.forEach(function (button) {\n  button.addEventListener('click', function () {\n    var popup = button.closest('.popup');\n    (0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.closePopup)(popup);\n  });\n});\nallPopups.forEach(function (popup) {\n  popup.addEventListener('click', function (event) {\n    if (event.target === popup) {\n      (0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.closePopup)(popup);\n    }\n  });\n});\nformEditProfile.addEventListener('submit', handleProfileFormSubmit);\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/modal.js":
/*!******************************!*\
  !*** ./src/scripts/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closePopup: () => (/* binding */ closePopup),\n/* harmony export */   openPopup: () => (/* binding */ openPopup)\n/* harmony export */ });\nfunction closeEsc(event) {\n  if (event.key === 'Escape') {\n    var openedPopup = document.querySelector('.popup_is-opened');\n    if (openedPopup) {\n      closePopup(openedPopup);\n    }\n  }\n}\nfunction openPopup(popup) {\n  popup.classList.add('popup_is-opened');\n  document.addEventListener('keydown', closeEsc);\n}\nfunction closePopup(popup) {\n  popup.classList.remove('popup_is-opened');\n  document.removeEventListener('keydown', closeEsc);\n}\n\n\n//# sourceURL=webpack://mesto-project-ff/./src/scripts/modal.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;