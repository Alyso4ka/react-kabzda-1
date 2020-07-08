import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return <header className={s.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-samples/flooop.png' />,
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div> {props.login} - <button onClick={props.logout}>Log out</button></div>

            :<NavLink to={'/Login'}>Login</NavLink>}
        </div>

    </header>


}
export default Header;