const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
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
    newMessageBody: ''
}


const dialogsReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state,
        // messages: [...state.messages] по сути нам достаточно сделать поверхностную копию только стпейта, смотри 48ПС

    };

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            stateCopy.newMessageBody = '';
            stateCopy.messages.push({message: body, id: 6});
            return stateCopy;
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;

