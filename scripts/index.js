import { FormValidator } from "./FormValidator.js";
import { Card } from "./Сard.js";
import { imgPopup, imgPopupImage, imgPopupTitle, openPopup, closePopup, closePopupEsc } from './utils.js';
import { initialCards } from './constants.js';

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__input-error_active'
};

const profileButton = document.querySelector(".profile__img-pen"); //картинка с ручкой
const profileAddButton = document.querySelector(".profile__add-button"); //кнопка с плюсиком что-то добавить

const popupList = document.querySelectorAll(".popup"); // попапы все
const popupCloseButtonList = document.querySelectorAll(".popup__close"); // крестик закрыть попапы все

const profileTitle = document.querySelector(".profile__title"); //название в профайле жак
const profileSubtitle = document.querySelector(".profile__subtitle"); // хобби в профайле иследователь

const profilePopup = document.querySelector(".popup-save"); //первая попап сохранить
const profileForm = document.querySelector(".popup__form_popup-save"); // попап форма сохранить
const popupTextName = document.querySelector(".popup__text_type_name"); // имя в форме попап сохранить
const popupTextHobby = document.querySelector(".popup__text_type_hobby"); //хобби в форме попап сохранить

const cardPopup = document.querySelector(".popup-create"); //второй попап добавить
const popupFormCreate = document.querySelector(".popup__form_popup-create"); // попап форма добавить
const popupTextTitle = document.querySelector(".popup__text_type_title"); // название в форме попап добавить
const popupTextImgLink = document.querySelector(".popup__text_type_img-link"); //ссылка в форме попап добавить

const cardsContainer = document.querySelector(".elements"); //все элементы в карточка то что гридом все карточки

//добавляет карточку в начало сетки
const renderCard = (card) => {
  cardsContainer.prepend(createCard(card));
};

//функция создания новой карточки
function createCard(data) {
  const card = new Card(data, "#card");
  const cardElement = card.generateCard();
  return cardElement;
};

initialCards.forEach((data) => {
  renderCard(data);
});

//закрытие за пределами попапа, оверлей
popupList.forEach(overlay => {
  overlay.addEventListener("click", (event) => {
    if (event.target.classList.contains("popup_opened")) {
      closePopup(event.target);
    };
  });
});

//первый попап при нажатии на кнопку сохранить
function handleProfileFormSubmit(event) {
  event.preventDefault();

  profileTitle.textContent = popupTextName.value;
  profileSubtitle.textContent = popupTextHobby.value;

  closePopup(profilePopup);
};

//второй попап при нажатии кнопки добавить
function handleCardFormSubmit(event) {
  event.preventDefault();

  //const name = popupTextTitle.value;
  //const link = popupTextImgLink.value;

  renderCard({ name: popupTextTitle.value, link: popupTextImgLink.value });

  event.target.reset();
  popupFormCreateValidation.resetValidation();

  closePopup(cardPopup);
};

//иcпользуем метод forEach закрытие попап
popupCloseButtonList.forEach(function (button) {
  button.addEventListener("click", function (event) {
    closePopup(event.currentTarget.closest(".popup")); //определяет элемент в котором обрабатывается событие, ищет ближайший подходящий класс
  });
});

//первый попап при клике сначало должно быть
profileButton.addEventListener("click", function () {
  openPopup(profilePopup);

  profileFormValidation.resetValidation();  //сброс валидации

  popupTextName.value = profileTitle.textContent;
  popupTextHobby.value = profileSubtitle.textContent;

});

//второй попап при открытии
profileAddButton.addEventListener("click", function () {
  popupFormCreate.reset(); // в форму идёт по умолчанию

  openPopup(cardPopup);
});

profileForm.addEventListener("submit", handleProfileFormSubmit);
popupFormCreate.addEventListener("submit", handleCardFormSubmit);

const profileFormValidation = new FormValidator(validationConfig, profilePopup);
const popupFormCreateValidation = new FormValidator(validationConfig, cardPopup);

profileFormValidation.enableValidation();
popupFormCreateValidation.enableValidation();