export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    //renderlItem(data) {
        //this._renderer(this._items, data)
    //}

    //renderlItems(data) {
        //this._items.forEach(item => {
            //this._renderer(item, data);
        //})
    //}

    renderItems() {
        this._items.forEach(this._renderer)
    }

    addItem(element) {
        this._container.prepend(element);
    }
}