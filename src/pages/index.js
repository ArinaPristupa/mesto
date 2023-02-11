//import './index.css';
import {
  initialCards,
  validationConfig,
  profileButton,
  profileAddButton,
  //popupList,
  //popupCloseButtonList,
  profileTitle,
  profileSubtitle,
  profilePopup,
  //profileForm,
  popupTextName,
  popupTextHobby,
  cardPopup,
  //popupFormCreate,
  //popupTextTitle,
  //popupTextImgLink,
  imgPopup,
  //imgPopupImage,
  //imgPopupTitle,
  //cardsContainer
} from '../utils/constants.js';

import  Section  from "../components/Section.js";
import  Card  from "../components/Сard.js";
import  UserInfo  from "../components/UserInfo.js";
import  PopupWithForm  from "../components/PopupWithForm.js";
import  PopupWithImage  from "../components/PopupWithImage.js";
import  FormValidator  from "../components/FormValidator.js";





//добавляет карточку в начало сетки
//const renderCard = (card) => {
//cardsContainer.prepend(createCard(card));
//};

//функция создания новой карточки
//function createCard(data) {
 // const card = new Card(data, "#card", () => { popupWithImage.open(data.name, data.link) });
  //const cardElement = card.generateCard();
  //renderCard.addItem(cardElement);
//};

//initialCards.forEach((data) => {
//renderCard(data);
//});



//первый попап при нажатии на кнопку сохранить
//function handleProfileFormSubmit(event) {
//event.preventDefault();

// profileTitle.textContent = popupTextName.value;
// profileSubtitle.textContent = popupTextHobby.value;

//closePopup(profilePopup);
//};

//второй попап при нажатии кнопки добавить
//function handleCardFormSubmit(event) {
// event.preventDefault();

//const name = popupTextTitle.value;
//const link = popupTextImgLink.value;

//renderCard({ name: popupTextTitle.value, link: popupTextImgLink.value });

//event.target.reset();
// popupFormCreateValidation.resetValidation();
//
//closePopup(cardPopup);
//};

//иcпользуем метод forEach закрытие попап
//popupCloseButtonList.forEach(function (button) {
//button.addEventListener("click", function (event) {
// closePopup(event.currentTarget.closest(".popup")); //определяет элемент в котором обрабатывается событие, ищет ближайший подходящий класс
//});
//});

//отображает информация о пользователе, передаём из профайла жак и исследователь
const userInfo = new UserInfo({name: profileTitle, hobby: profileSubtitle});

//попап 3 картинка биг
function openWithImage (name, link) {
  const popupWithImage = new PopupWithImage(imgPopup, {name, link});
  popupWithImage.setEventListeners();
  popupWithImage.open();
}

//попап форма первая профайл нью
const popupFormProfile = new PopupWithForm('.popup-save', (data) => {userInfo.setUserInfo(data.name, data.hobby)});
popupFormProfile.setEventListeners();

//первый попап при клике должно быть
profileButton.addEventListener("click", () => {
  
  //profileFormValidation.resetValidation();

  popupFormProfile.open();

  const {name, hobby} = userInfo.getUserInfo();
  
  popupTextName.value = name;
  popupTextHobby.value = hobby;

});

// создание новой карточки добавить нужно в секшион и 2-й попап
const renderer = (item) => {
  const card = new Card(item, "#card", openWithImage);
  const cardElement = card.generateCard();
  renderCard.addItem(cardElement);
}

const renderCard = new Section({
  items: initialCards,
  renderer: renderer
}, ".elements");


//второй попап создать нью
const popupFormAdd = new PopupWithForm('.popup-create', renderer);
popupFormAdd.setEventListeners();

//второй попап при открытии
profileAddButton.addEventListener("click", () => {
  //popupFormCreate.reset(); // в форму идёт по умолчанию

  popupFormAdd.open();
});


renderCard.renderItems();

//валидация
const profileFormValidation = new FormValidator(validationConfig, profilePopup);
const popupFormCreateValidation = new FormValidator(validationConfig, cardPopup);

profileFormValidation.enableValidation();
popupFormCreateValidation.enableValidation();

//profileForm.addEventListener("submit", handleProfileFormSubmit);
//popupFormCreate.addEventListener("submit", handleCardFormSubmit);


// создание новой карточки добавить нужно в секшион и 2-й попап
//renderer = (data) => {
  //const card = new Card(data, "#card", () => { popupWithImage.open(data.name, data.link) });
  //const cardElement = card.generateCard();
 // renderCard.addItem(cardElement);
//}



