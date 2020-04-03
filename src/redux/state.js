let rerenderEntireTree = () => {
    console.log('state changed');
}



let state = {

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
    sidebar: {

    }
}

window.state = state;

export let addPost = () => {
    let newPost= {
        message: state.profilePage.newPostText,
        likesCount: 0,
        id: 3,

    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let addMessage = () => {
    let newMessage= {
        message: state.dialogsPage.newMessageText,
        id: 6,


    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}





export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}


export default state;

