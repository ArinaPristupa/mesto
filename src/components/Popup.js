export default class Popup {
    constructor(selector) {
        this._popup = document.querySelector(selector)
        this._handleEscClose = this._handleEscClose.bind(this)
    }

    open() {
        this._popup.classList.add("popup_opened");
        document.addEventListener("keydown", this._handleEscClose);
    }

    close() {
        this._popup.classList.remove("popup_opened");
        document.removeEventListener("keydown", this._handleEscClose);
    }

    //закрытие по esc
    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.addEventListener("click", (event) => {

            if (event.target.classList.contains("popup_opened") || event.target.classList.contains("popup__close")) {
                this.close();
            }
        })
    }
}
