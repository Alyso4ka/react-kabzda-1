import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogs = [
        {name: "Dimych", id: 1},
        {name: "Andrey", id: 2},
        {name: "Sveta", id: 3},
        {name: "Sacha", id: 4},
        {name: "Victor", id: 5},
        {name: "Valera", id: 6},
    ];

    let messages = [
        {message: "Hi!", id: 1},
        {message: "How is your it-kamasutra?", id: 2},
        {message: "Yo", id: 3},
        {message: "Yo", id: 4},
        {message: "Yo", id: 5},
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map (m => <Message message={m.message} id={m.id}/>);

    return (
        <div className={s.dialogs}>
            <div class={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>

        </div>
    )
};

export default Dialogs;
