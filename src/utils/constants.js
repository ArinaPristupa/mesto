export const initialCards = [
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

export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__text_type_error',
    errorClass: 'popup__input-error_active'
  };
  
  export const profileButton = document.querySelector(".profile__img-pen"); //картинка с ручкой
  export const profileAddButton = document.querySelector(".profile__add-button"); //кнопка с плюсиком что-то добавить
  
  export const popupList = document.querySelectorAll(".popup"); // попапы все
  //export const popupCloseButtonList = document.querySelectorAll(".popup__close"); // крестик закрыть попапы все
  
  export const profileTitle = ".profile__title"; //название в профайле жак
  export const profileSubtitle = ".profile__subtitle"; // хобби в профайле иследователь
  
  export const profilePopup = document.querySelector(".popup-save"); //первая попап сохранить
  export const profileForm = document.querySelector(".popup__form_popup-save"); // попап форма сохранить
  export const popupTextName =document.querySelector(".popup__text_type_name"); // имя в форме попап сохранить
  export const popupTextHobby = document.querySelector(".popup__text_type_hobby"); //хобби в форме попап сохранить
  
  export const cardPopup = document.querySelector(".popup-create"); //второй попап добавить
  export const popupFormCreate = document.querySelector(".popup__form_popup-create"); // попап форма добавить
  export const popupTextTitle = document.querySelector(".popup__text_type_title"); // название в форме попап добавить
  export const popupTextImgLink = document.querySelector(".popup__text_type_img-link"); //ссылка в форме попап добавить
  
  export const imgPopup = ".popup-img"; //третий попап картинка в большом размере
  export const imgPopupImage = document.querySelector(".popup-img__image"); //третий попап картинка в нём большая
  export const imgPopupTitle = document.querySelector(".popup-img__title"); //третий попап название того что на картинке

  //export const cardsContainer = (".elements"); //все элементы в карточка то что гридом все карточки

  //export const cardsContainer = document.querySelector(".elements"); //все элементы в карточка то что гридом все карточки

