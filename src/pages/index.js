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

const openWithImage = (name, link) => {
  const popupWithImage = new PopupWithImage(imgPopup, { name, link });
  popupWithImage.setEventListeners();
  popupWithImage.open();
}

const popupFormProfile = new PopupWithForm('.popup-save', { formSubmitCallback: (data) => { userInfo.setUserInfo(data)} });

const renderer = (item) => {
  const card = new Card(item, "#card", openWithImage);
  const cardElement = card.generateCard();
  renderCard.addItem(cardElement);
}

const renderCard = new Section({
  items: initialCards,
  renderer: renderer
}, ".elements");


const popupFormAdd = new PopupWithForm('.popup-create', { formSubmitCallback: renderer });

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

profileFormValidation.enableValidation();
popupFormCreateValidation.enableValidation();




