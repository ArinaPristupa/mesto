import { imgPopup, imgPopupImage, imgPopupTitle, openPopup } from './index.js'

export class Card {
  constructor(cardElement, templateCard) {
    this._name = cardElement.name;
    this._link = cardElement.link;
    this._templateCard = templateCard;
  }

  _getTemplate() {
    const card = document
      .querySelector(this._templateCard)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return card;
  }

  //метод удаления
  _handleCardDelete() {
    this._element.remove();
    this._element = null;
  };

  //метод лайка, переключение класса
  _handleCardLike() {
    this._elementImgLike.classList.toggle("element__img-like_active");
  };

  //метод открытие карточки на весь экран
  _handleOpenCard() {
    openPopup(imgPopup);

    imgPopupImage.src = this._link;
    imgPopupImage.alt = this._name;
    imgPopupTitle.textContent = this._name;
  };

  //метод обработчика событий
  _setEventListeners() {
    this._elementImgLike = this._element.querySelector(".element__img-like");
    this._elementImgLike.addEventListener("click", () => this._handleCardLike()); //по клику вызывается функция переключение класса тоггле

    this._elementTrash = this._element.querySelector(".element__trash");
    this._elementTrash.addEventListener("click", () => this._handleCardDelete()); //по клику вызывается функция которая удаляет карточку

    this._elementImg = this._element.querySelector(".element__img");
    this._elementImg.addEventListener("click", () => this._handleOpenCard()); //по клику вызывается функция которая карточка становится на весь экран
  };


  //метод добавления данных карточки
  _addDataCard() {

    this._elementCardTitle = this._element.querySelector(".element__title");

    this._elementCardTitle.textContent = this._name;
    this._elementImg.src = this._link;
    this._elementImg.alt = this._name;
  }

  //общий публичный метод карточки 
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._addDataCard();

    return this._element;
  }

}