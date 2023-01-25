export const imgPopup = document.querySelector(".popup-img"); //третий попап картинка в большом размере
export const imgPopupImage = document.querySelector(".popup-img__image"); //третий попап картинка в нём большая
export const imgPopupTitle = document.querySelector(".popup-img__title"); //третий попап название того что на картинке

//открытие попапа
export function openPopup(popup) {
    popup.classList.add("popup_opened");
    document.addEventListener("keydown", closePopupEsc);
};

//закрытие попапа
export function closePopup(popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", closePopupEsc);
};

//закрытие по esc
export function closePopupEsc(evt) {
    if (evt.key === "Escape") {
        closePopup(document.querySelector(".popup_opened"))
    }
};