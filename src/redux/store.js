import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {

        profilePage: {
            posts: [
                {message: "Hi, how are you?", likesCount: 22, id: 1},
                {message: "It's my first post", likesCount: 55, id: 2}
            ],

            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {

            dialogs: [
                {name: "Dimych", id: 1},
                {name: "Andrey", id: 2},
                {name: "Sveta", id: 3},
                {name: "Sacha", id: 4},
                {name: "Victor", id: 5},
                {name: "Valera", id: 6},
            ],
            messages: [
                {message: "Hi!", id: 1},
                {message: "How is your it-kamasutra?", id: 2},
                {message: "Yo", id: 3},
                {message: "Yo", id: 4},
                {message: "Yo", id: 5},
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) { // { type: 'ADD-POST' }
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

            this._callSubscriber(this._state);
        }


};



export default store;
window.store = store;


