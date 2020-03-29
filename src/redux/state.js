let state = {

    profilePage: {
        posts: [
            {message: "Hi, how are you?", likesCount: 22, id: 1},
            {message: "It's my first post", likesCount: 55, id: 2}
        ],
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
        ]
    },
    sidebar: {

    }
}

export let addPost = (postMessage) => {
    let newPost= {
        message: postMessage,
        likesCount: 0,
        id: 3,

    };
    state.profilePage.posts.push(newPost);
}

export default state;

