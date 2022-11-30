let profileButton = document.querySelector('.profile__img-pen');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let popupForm = document.querySelector('.popup__form');
let popupTextName = document.querySelector('.popup__text_type_name');
let popupTextHobby = document.querySelector('.popup__text_type_hobby');

function openPopup() {
    popup.classList.add('popup_opened');
    popupTextName.value = profileTitle.textContent;
    popupTextHobby.value = profileSubtitle.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function formSubmitHandler(event) {
    event.preventDefault();
    profileTitle.textContent = popupTextName.value;
    profileSubtitle.textContent = popupTextHobby.value;
    closePopup();
}

profileButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);

popupForm.addEventListener('submit', formSubmitHandler);