import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={s.dialog + ' ' + s.active}>
        <img src='https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png' />
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>

    </div>
}


export default DialogItem;



