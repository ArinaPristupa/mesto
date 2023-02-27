import Popup from './Popup.js'

export default class PopupWithDelete extends Popup {
    constructor(selector, { formSubmitCallback }) {
        super(selector);

        this._formSubmitCallback = formSubmitCallback;
        this._form = this._popup.querySelector('.popup__form');
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();

            this._formSubmitCallback(this._cardId);

        });
    }

    delete(remove) {
        this.remove = remove;
    }

    open(data) {
        super.open();
        this._cardId = data;
    }
}