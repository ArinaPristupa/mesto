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

let profileButton = document.querySelector(".profile__img-pen"); //картинка с ручкой
let profileAddButton = document.querySelector(".profile__add-button"); //кнопка с плюсиком что-то добавить
let popup = document.querySelector(".popup");

//let popupClose = document.querySelector('.popup__close'); // крестик закрыть попапы
let popupCloseAll = document.querySelectorAll(".popup__close"); // крестик закрыть попапы все

let profileTitle = document.querySelector(".profile__title"); //название в профайле жак
let profileSubtitle = document.querySelector(".profile__subtitle"); // хобби в профайле иследователь
//let popupForm = document.querySelector('.popup__form'); // попап форма общая

let savePopup = document.querySelector(".popup-save"); //первая попап сохранить
let popupFormSave = document.querySelector(".popup__form_popup-save"); // попап форма сохранить
let popupTextName = document.querySelector(".popup__text_type_name"); // имя в форме попап сохранить
let popupTextHobby = document.querySelector(".popup__text_type_hobby"); //хобби в форме попап сохранить

let createPopup = document.querySelector(".popup-create"); //второй попап добавить
let popupFormCreate = document.querySelector(".popup__form_popup-create"); // попап форма добавить
let popupTextTitle = document.querySelector(".popup__text_type_title"); // название в форме попап добавить
let popupTextImgLink = document.querySelector(".popup__text_type_img-link"); //ссылка в форме попап добавить

let imgPopup = document.querySelector(".popup-img"); //третий попап картинка в большом размере
let imgPopupImage = document.querySelector(".popup-img__image"); //третий попап картинка в нём большая
let imgPopupTitle = document.querySelector(".popup-img__title"); //третий попап название того что на картинке

const elementsCards = document.querySelector(".elements"); //все элементы в карточка то что гридом все карточки
const templateCard = document.querySelector("#card").content; // темплейт в нтмл

function addCard(name, link) {
  const elementCard = templateCard.querySelector(".element").cloneNode(true);

  const elementImg = elementCard.querySelector(".element__img");
  const elementTrash = elementCard.querySelector(".element__trash");
  const elementImgLike = elementCard.querySelector(".element__img-like");
  const elementCardTitle = elementCard.querySelector(".element__title");

  elementCardTitle.textContent = name;
  elementImg.src = link;
  elementImg.alt = name;

  elementImg.addEventListener("click", () => cardImageBig(elementImg, name)); //по клику вызывается функция которая карточка становится на весь экран
  elementTrash.addEventListener("click", () => cardDelete(elementTrash)); //по клику вызывается функция которая удаляет карточку
  elementImgLike.addEventListener("click", () => cardLike(elementImgLike)); //по клику вызывается функция переключение класса тоггле

//функция удаления
function cardDelete(element) {
  element.closest(".element").remove();
}
  
//функция открытие карточки на весь экран
function cardImageBig(image, title) {
  openPopup(imgPopup);
  imgPopupImage.src = image.src;
  imgPopupImage.alt = title;
  imgPopupTitle.textContent = title;
}

//функция лайка, переключение класса
function cardLike(like) {
  like.classList.toggle("element__img-like_active");
}

  elementsCards.prepend(elementCard); //добавляет карточку в начало сетки
}
console.log(addCard);

//метод forEACH
function defoltCards(cards) {
  cards.forEach( function ({name, link}) {
    addCard(name, link);
  });
}

defoltCards(initialCards);

//открытие попапа
function openPopup(popup) {
  popup.classList.add("popup_opened");
}

//закрытие попапа
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

//первый попап при клике сначало должно быть
profileButton.addEventListener("click", function () {
  popupTextName.value = profileTitle.textContent;
  popupTextHobby.value = profileSubtitle.textContent;
  openPopup(savePopup);
});
//первый попап при нажатии на кнопку сохранить
function formSubmitHandler(event) {
  event.preventDefault();

  profileTitle.textContent = popupTextName.value;
  profileSubtitle.textContent = popupTextHobby.value;

  closePopup(savePopup);
}

//второй попап при открытии
profileAddButton.addEventListener("click", function () {
  popupFormCreate.reset(); // в форму идёт по умолчанию
  openPopup(createPopup);
});
//второй попап при нажатии кнопки добавить
function formSubmitAddCard(event) {
  event.preventDefault();

  const name = popupTextTitle.value;
  const link = popupTextImgLink.value;

  addCard(name, link);

  closePopup(createPopup);
}

popupFormSave.addEventListener("submit", formSubmitHandler);
popupFormCreate.addEventListener("submit", formSubmitAddCard);

//ипсользуем метод forEach закрытие попап
popupCloseAll.forEach( function (button) {
  button.addEventListener("click", function (event) {
    closePopup(event.currentTarget.closest(".popup")); //определяет элемент в котором обрабатывается событие, ищет ближайший подходящий класс
  });
});
