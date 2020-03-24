import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return <div className={s.dialog + ' ' + s.active}>
        <img src='https://lh3.googleusercontent.com/proxy/mVep9f81aCaZ69HkI3o04YV2zsPSvwjXmVAEp7FAek0J73QCYtdwTslm6AnmIA9OEJ4MhexQZi3gHax0Vl9w66Ju466zQE40h4ALj1J7o69G4t14e2Be6dynVbjfK-0T' />
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>

    </div>
}


export default DialogItem;



