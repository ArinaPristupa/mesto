export const apiData = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-60',
  headers: {
    authorization: '6f07f13b-ebfd-4bd7-8abc-b504f7ebfeed',
    'Content-Type': 'application/json'
  }
};

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
export const avatarPopupButton = document.querySelector(".profile__avatar-button"); //кнопка аватара редактировать

export const profileTitle = ".profile__title"; //название в профайле жак
export const profileSubtitle = ".profile__subtitle"; // хобби в профайле иследователь
export const profileAvatar = ".profile__avatar"; // аватар в профайле 

export const profilePopup = document.querySelector(".popup-save"); //первая попап сохранить
export const popupTextName = document.querySelector(".popup__text_type_name"); // имя в форме попап сохранить
export const popupTextHobby = document.querySelector(".popup__text_type_hobby"); //хобби в форме попап сохранить

export const cardPopup = document.querySelector(".popup-create"); //второй попап добавить

export const imgPopup = ".popup-img"; //третий попап картинка в большом размере

export const avatarPopup = document.querySelector(".popup-avatar"); //четвертый попап обновление аватара



