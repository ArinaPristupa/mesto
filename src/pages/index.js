import './index.css';

import {
  initialCards,
  validationConfig,
  profileButton,
  profileAddButton,
  profileTitle,
  profileSubtitle,
  profilePopup,
  popupTextName,
  popupTextHobby,
  cardPopup,
  imgPopup
} from '../utils/constants.js';

import Section from "../components/Section.js";
import Card from "../components/Сard.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import FormValidator from "../components/FormValidator.js";

const userInfo = new UserInfo({ name: profileTitle, hobby: profileSubtitle });

const popupWithImage = new PopupWithImage(imgPopup);

const popupFormProfile = new PopupWithForm('.popup-save', { formSubmitCallback: (data) => { userInfo.setUserInfo(data) } });

const renderCard = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, "#card", () => { popupWithImage.open(item.name, item.link) });
    const cardElement = card.generateCard();
    renderCard.addItem(cardElement);
  }
}, ".elements");

const popupFormAdd = new PopupWithForm('.popup-create', {
  formSubmitCallback: (item) => {
    const card = new Card(item, "#card", () => { popupWithImage.open(item.name, item.link) });
    const cardElement = card.generateCard();
    renderCard.addItem(cardElement);
  }
});

//первый попап по клику
profileButton.addEventListener("click", () => {

  profileFormValidation.resetValidation();

  popupFormProfile.open();

  const { name, hobby } = userInfo.getUserInfo();

  popupTextName.value = name;
  popupTextHobby.value = hobby;

});

//второй попап по клику
profileAddButton.addEventListener("click", () => {

  popupFormCreateValidation.resetValidation();
  popupFormAdd.open();

});

renderCard.renderItems();

const profileFormValidation = new FormValidator(validationConfig, profilePopup);
const popupFormCreateValidation = new FormValidator(validationConfig, cardPopup);

popupFormProfile.setEventListeners();
popupFormAdd.setEventListeners();
popupWithImage.setEventListeners();

profileFormValidation.enableValidation();
popupFormCreateValidation.enableValidation();






