export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkQueryResult(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`); // если ошибка, отклоняем промис
  }

  //гет запрос подгрузки карточек с сервера
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
      .then(res => this._checkQueryResult(res))
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  //гет запрос подгрузки информации о пользователe с сервера
  getInformationUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then(res => this._checkQueryResult(res))
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  //oтредактированные данные профиля
  getEditedDataProfile(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
      .then(res => this._checkQueryResult(res))
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  //добавление новой карточки
  addNewCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(res => this._checkQueryResult(res))
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  //удаление карточки
  deleteCard(data) {
    return fetch(`${this._baseUrl}/cards/${data}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => this._checkQueryResult(res))
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  //поставка лайка карточки
  likeCard(data) {
    return fetch(`${this._baseUrl}/cards/${data._id}/likes`, {
      method: 'PUT',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(res => this._checkQueryResult(res))
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  //удаление лайка карточки
  deleteLikeCard(data) {
    return fetch(`${this._baseUrl}/cards/${data._id}/likes`, {
      method: 'DELETE',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(res => this._checkQueryResult(res))
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  //обновление аватара пользователя
  updateAvatarUser(cardId) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: cardId.avatar
      })
    })
      .then(res => this._checkQueryResult(res))
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }
}