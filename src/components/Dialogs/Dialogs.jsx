import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {




    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map (m => <Message message={m.message} id={m.id}/>);

    let newMassageElement = React.createRef();

    let addMessage = () => {
        let text = newMassageElement.current.value;
        alert (text);
    };

    return (
        <div className={s.dialogs}>

            <div class={s.dialogsItems}>

                { dialogsElements }

            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
            <div>
                <textarea ref={newMassageElement}></textarea>
                <button on onClick={ addMessage }>Add message</button>
            </div>

        </div>
    )
};




export default Dialogs;
