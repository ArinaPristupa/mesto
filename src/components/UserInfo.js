export default class UserInfo {
    constructor({ name, hobby, avatar }) {
        this._name = document.querySelector(name);
        this._hobby = document.querySelector(hobby);
        this._avatar = document.querySelector(avatar);
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            hobby: this._hobby.textContent
        }
    }

    //запрос на id пользователя
    getUserId() {
        return this._userId
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._hobby.textContent = data.about;
        this._avatar.src = data.avatar;

        this._userId = data._id;
    }
}
