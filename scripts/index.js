const profileButton = document.querySelector(".profile__img-pen"); //картинка с ручкой
const profileAddButton = document.querySelector(".profile__add-button"); //кнопка с плюсиком что-то добавить

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

const imgPopup = document.querySelector(".popup-img"); //третий попап картинка в большом размере
const imgPopupImage = document.querySelector(".popup-img__image"); //третий попап картинка в нём большая
const imgPopupTitle = document.querySelector(".popup-img__title"); //третий попап название того что на картинке

const cardsContainer = document.querySelector(".elements"); //все элементы в карточка то что гридом все карточки
const templateCard = document.querySelector("#card").content.querySelector(".element"); // темплейт в нтмл

function createCard(name, link) {
  const elementCard = templateCard.cloneNode(true);
  const elementImg = elementCard.querySelector(".element__img");
  const elementTrash = elementCard.querySelector(".element__trash");
  const elementImgLike = elementCard.querySelector(".element__img-like");
  const elementCardTitle = elementCard.querySelector(".element__title");

  elementCardTitle.textContent = name;
  elementImg.src = link;
  elementImg.alt = name;

  elementImg.addEventListener("click", () => handleOpenCard(elementImg, name)); //по клику вызывается функция которая карточка становится на весь экран
  elementTrash.addEventListener("click", () => handleCardDelete(elementTrash)); //по клику вызывается функция которая удаляет карточку
  elementImgLike.addEventListener("click", () => handleCardLike(elementImgLike)); //по клику вызывается функция переключение класса тоггле

  return elementCard;
}

//добавляет карточку в начало сетки
const renderCard = function (name, link) {
  cardsContainer.prepend(createCard(name, link));
}

//метод forEACH
function renderCards(cards) {
  cards.forEach(function ({ name, link }) {
    renderCard(name, link);
  });
}

//функция удаления
function handleCardDelete(element) {
  element.closest(".element").remove();
}

//функция открытие карточки на весь экран
function handleOpenCard(image, title) {
  openPopup(imgPopup);
  imgPopupImage.src = image.src;
  imgPopupImage.alt = title;
  imgPopupTitle.textContent = title;
}

//функция лайка, переключение класса
function handleCardLike(like) {
  like.classList.toggle("element__img-like_active");
}
//открытие попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

//закрытие попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

//первый попап при нажатии на кнопку сохранить
function handleProfileFormSubmit(event) {
  event.preventDefault();

  profileTitle.textContent = popupTextName.value;
  profileSubtitle.textContent = popupTextHobby.value;

  closePopup(profilePopup);
}

//второй попап при нажатии кнопки добавить
function handleCardFormSubmit(event) {
  event.preventDefault();

  const name = popupTextTitle.value;
  const link = popupTextImgLink.value;

  renderCard(name, link);

  closePopup(cardPopup);
}

//ипсользуем метод forEach закрытие попап
popupCloseButtonList.forEach(function (button) {
  button.addEventListener("click", function (event) {
    closePopup(event.currentTarget.closest(".popup")); //определяет элемент в котором обрабатывается событие, ищет ближайший подходящий класс
  });
});

//первый попап при клике сначало должно быть
profileButton.addEventListener("click", function () {
  popupTextName.value = profileTitle.textContent;
  popupTextHobby.value = profileSubtitle.textContent;
  openPopup(profilePopup);
});

//второй попап при открытии
profileAddButton.addEventListener("click", function () {
  popupFormCreate.reset(); // в форму идёт по умолчанию
  openPopup(cardPopup);
});

profileForm.addEventListener("submit", handleProfileFormSubmit);
popupFormCreate.addEventListener("submit", handleCardFormSubmit);

renderCards(initialCards);
