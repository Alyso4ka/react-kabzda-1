const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
            newMessageText: '',
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
            ]
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

    addMessage() {
        let newMessage = {
            message: this._state.dialogsPage.newMessageText,
            id: 6,


        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessageText(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._callSubscriber(this._state);
    },

    dispatch(action) { // { type: 'ADD-POST' }
        if (action.type === ADD_POST) {
            let newPost = {
                message: this._state.profilePage.newPostText,
                likesCount: 0,
                id: 3,

            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }


};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export default store;
window.store = store;


