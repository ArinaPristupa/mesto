import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);

        this._imgPopupImage = this._popup.querySelector(".popup-img__image"); //третий попап картинка в нём большая
        this._imgPopupTitle = this._popup.querySelector(".popup-img__title"); //третий попап название того что на картинке
    }

    open(name, link) {

        this._imgPopupImage.alt = name;
        this._imgPopupTitle.textContent = name;
        this._imgPopupImage.src = link;

        super.open();
    }

}