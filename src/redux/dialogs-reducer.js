const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {

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

}


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody;
           return {
                ...state,
                messages: [...state.messages, {message: body, id: 6}]
            }

        default:
            return state;
    }

}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;

