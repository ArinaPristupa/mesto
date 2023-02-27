export default class Card {
  constructor(cardElement, templateCard, { handleCardClick, handleCardDelete, handleCardLike, userId }) {
    this._name = cardElement.name;
    this._link = cardElement.link;
    this._templateCard = templateCard;

    this._userId = userId;
    this._cardId = cardElement._id;
    this._likeCard = cardElement.likes;
    this._ownerId = cardElement.owner._id;


    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleCardLike = handleCardLike;
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
  handleDeleteCard() {
    this._element.remove();
    this._element = null;
  };

  //метод лайка, переключение класса
  handleLikeCard() {
    if (this.checkUserLike())
      this._elementImgLike.classList.add("element__img-like_active");

    else {
      this._elementImgLike.classList.remove("element__img-like_active");
    }
  };

  numberLike(cardElement) {
    this._likeCard = cardElement.likes;
    this._elementLikeNumber.textContent = this._likeCard.length;
  }

  //возвращает значение первого элемента, который соответствует условию
  checkUserLike() {
    return this._likeCard.find((cardElement) => this._userId === cardElement._id)
  }

  //метод обработчика событий
  _setEventListeners() {
    this._elementImgLike = this._element.querySelector(".element__img-like");
    this._elementImgLike.addEventListener("click", () => this._handleCardLike()); //по клику вызывается функция переключение класса тоггле

    this._elementTrash = this._element.querySelector(".element__trash");
    this._elementTrash.addEventListener("click", () => this._handleCardDelete(this._cardId)); //по клику вызывается функция которая удаляет карточку

    this._elementImg = this._element.querySelector(".element__img");
    this._elementImg.addEventListener("click", () => this._handleCardClick(this._name, this._link)); //по клику вызывается функция которая карточка становится на весь экран
  };

  //метод добавления данных карточки
  _addDataCard() {

    this._elementTitle = this._element.querySelector(".element__title");
    this._elementLikeNumber = this._element.querySelector(".element__like-number")

    this._elementTitle.textContent = this._name;
    this._elementImg.alt = this._name;
    this._elementImg.src = this._link;

    this._elementLikeNumber.textContent = this._likeCard.length;

  }

  //общий публичный метод карточки 
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._addDataCard();

    if (this._userId !== this._ownerId) {
      this._elementTrash.remove();
    }

    return this._element;
  }

}
