import Popup from './Popup.js';
import { imgPopupImage, imgPopupTitle } from '../utils/constants.js'

export default class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
    }

    open(name, link) {
        super.open();

        imgPopupImage.alt = name;
        imgPopupTitle.textContent = name;
        imgPopupImage.src = link;
    }

}