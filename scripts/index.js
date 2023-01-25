import { Card } from "./card.js";
import { FormValidator } from "./FormValidator.js";


const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

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

export const imgPopup = document.querySelector(".popup-img"); //третий попап картинка в большом размере
export const imgPopupImage = document.querySelector(".popup-img__image"); //третий попап картинка в нём большая
export const imgPopupTitle = document.querySelector(".popup-img__title"); //третий попап название того что на картинке

const cardsContainer = document.querySelector(".elements"); //все элементы в карточка то что гридом все карточки

//добавляет карточку в начало сетки
const renderCard = (card) => {
  cardsContainer.prepend(createCard(card));
};

//метод forEACH
function createCard(data) {
  const card = new Card(data, "#card");
  const cardElement = card.generateCard();
  return cardElement;
};

initialCards.forEach((data) => {
  renderCard(data);
});

//открытие попапа
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
};

//закрытие попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
};

//закрытие по esc
function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"))
  }
};

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