import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {newMessageText} from "../../redux/state";



const Dialogs = (props) => {




    let dialogsElements = props.dialogPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogPage.messages.map (m => <Message message={m.message} id={m.id}/>);

    let newMassageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    };

let onChangeMessage = () => {
    let text = newMassageElement.current.value;
    props.updateNewMessageText(text);

}

    return (
        <div className={s.dialogs}>

            <div class={s.dialogsItems}>

                { dialogsElements }

            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
            <div>
                <textarea onChange={onChangeMessage} ref={newMassageElement} value={props.dialogPage.newMessageText}/>
                <button onClick={ addMessage }>Add message</button>
            </div>

        </div>
    )
};




export default Dialogs;
