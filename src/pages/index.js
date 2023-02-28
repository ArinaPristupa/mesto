import './index.css';

import {
  apiData,
  validationConfig,
  profileButton,
  profileAddButton,
  avatarPopupButton,
  profileTitle,
  profileSubtitle,
  profileAvatar,
  profilePopup,
  popupTextName,
  popupTextHobby,
  cardPopup,
  avatarPopup,
  imgPopup
} from '../utils/constants.js';

import Api from "../components/Api.js";
import Section from "../components/Section.js";
import Card from "../components/Сard.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithDelete from "../components/PopupWithDelete.js";
import FormValidator from "../components/FormValidator.js";

const api = new Api(apiData);

//запрос на асинхронный код
Promise.all([api.getInformationUser(), api.getInitialCards()])
  .then(res => {
    const [userData, cardsData] = res;
    userInfo.setUserInfo(userData);
    renderCard.renderItems(cardsData);
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });

const userInfo = new UserInfo({ name: profileTitle, hobby: profileSubtitle, avatar: profileAvatar });

const popupWithImage = new PopupWithImage(imgPopup);

const popupFormProfile = new PopupWithForm('.popup-save', {
  formSubmitCallback: (data) => {
    popupFormProfile.loadingText('Сохранение...')
    api
      .getEditedDataProfile(data)
      .then((newData) => {
        userInfo.setUserInfo(newData);
        popupFormProfile.close();
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
      .finally(() => {
        popupFormProfile.loadingText('Сохранить')
      })
  }
});

const renderCard = new Section({
  renderer: (cardElement) => {
    renderCard.addItem(createCard(cardElement))
  }
}, ".elements");

function createCard(cardElement) {
  const card = new Card(cardElement, "#card", {
    handleCardClick: () => {popupWithImage.open(cardElement.name, cardElement.link)},
    handleCardDelete: (res) => {
      popupWithDelete.open(res);
      popupWithDelete.delete(() => {
        card.handleDeleteCard();
      })
    },
    handleCardLike: () => {
      if (!card.checkUserLike()) {
        api
          .likeCard(cardElement)
          .then((res) => {
            card.numberLike(res);
            card.handleLikeCard()
          })
          .catch((err) => {
            console.log(err); // выведем ошибку в консоль
          })
      }
      else {
        api
          .deleteLikeCard(cardElement)
          .then((res) => {
            card.numberLike(res);
            card.handleLikeCard()
          })
          .catch((err) => {
            console.log(err); // выведем ошибку в консоль
          })
      }
    },
    userId: userInfo.getUserId()
  })

  return card.generateCard();
}

const popupWithDelete = new PopupWithDelete('.popup-delete', {
  formSubmitCallback: (data) => {
    api
      .deleteCard(data)
      .then(() => {
        popupWithDelete.remove();
        popupWithDelete.close();
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
  }
});

const popupFormAvatar = new PopupWithForm('.popup-avatar', {
  formSubmitCallback: (data) => {
    popupFormAvatar.loadingText('Сохранение...');
    api
      .updateAvatarUser(data)
      .then((res) => {
        userInfo.setUserInfo(res);
        popupFormAvatar.close();
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
      .finally(() => {
        popupFormAvatar.loadingText('Сохранить')
      })
  }
});

const popupFormAdd = new PopupWithForm('.popup-create', {
  formSubmitCallback: (data) => {
    api
      .addNewCard(data)
      .then((cardElement) => {
        renderCard.addItem(createCard(cardElement,
          () => { clickCardImage(cardElement) }
        ));
        popupFormAdd.close();
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
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

//попап аватар по клику
avatarPopupButton.addEventListener("click", () => {

  popupFormCreateValidation.resetValidation();
  popupFormAvatar.open();

});

const profileFormValidation = new FormValidator(validationConfig, profilePopup);
const popupFormCreateValidation = new FormValidator(validationConfig, cardPopup);
const avatarFormValidation = new FormValidator(validationConfig, avatarPopup);

popupFormProfile.setEventListeners();
popupFormAdd.setEventListeners();
popupWithImage.setEventListeners();
popupFormAvatar.setEventListeners();
popupWithDelete.setEventListeners();

profileFormValidation.enableValidation();
popupFormCreateValidation.enableValidation();
avatarFormValidation.enableValidation();



