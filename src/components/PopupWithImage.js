import Popup from './Popup.js';
import {imgPopupImage, imgPopupTitle} from '../utils/constants.js'

export default class PopupWithImage extends Popup {
    constructor(selector, {name, link}) {
        super(selector);
        this._name = name;
        this._link = link;
    }

    open() {
        super.open();

        imgPopupImage.alt = this._name;
        imgPopupTitle.textContent = this._name;
        imgPopupImage.src = this._link;
        
    }
    
}