import Popup from './Popup.js'

export default class PopupWithForm extends Popup {
    constructor(selector, { formSubmitCallback }) {
        super(selector);

        this._formSubmitCallback = formSubmitCallback;
        this._form = this._popup.querySelector('.popup__form');
        this._inputsList = this._form.querySelectorAll('.popup__text');
        this._buttonForm = this._form.querySelector('.popup__button');
        this._textContent = this._buttonForm.textContent;
    }

    _getInputValues() {
        const data = {};

        this._inputsList.forEach((element) => {
            data[element.name] = element.value;
        });

        return data;
    }

    loadingText(isloading) {
        if (isloading) {
            this._buttonForm.textContent = "Сохранение...";
        }
        else {
            this._buttonForm.textContent = this._textContent;
        }
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();

            this._formSubmitCallback(this._getInputValues());

        });
    }

    close() {
        super.close();
        this._form.reset();
    }
}
