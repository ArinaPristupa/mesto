import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor(selector, { formSubmitCallback }) {
        super(selector);

        this._formSubmitCallback = formSubmitCallback;
        this._form = this._popup.querySelector('.popup__form');
        this._inputsList = this._form.querySelectorAll('.popup__text');
    }

    _getInputValues() {
        const data = {};

        this._inputsList.forEach((element) => {
            data[element.name] = element.value;
        });

        return data;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();

            this._formSubmitCallback(this._getInputValues());

            this.close();
        });
    }

    close() {
        super.close();
        this._form.reset();
    }
}



