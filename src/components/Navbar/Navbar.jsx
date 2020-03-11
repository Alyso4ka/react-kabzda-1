import React from 'react';
import s from './Navbar.module.css';

// let s = {
//    'nav': 'Navbar_nav__2x8Oz',
//    'item': 'Navbar_item__3PprI';
// }

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <a>Profile</a>
        </div>
        <div className={s.item}>
            <a>Massages</a>
        </div>
        <div className={s.item}>
            <a>News</a>
        </div>
        <div className={s.item}>
            <a>Music</a>
        </div>
        <div className={s.item}>
            <a> Settings </a>
        </div>
    </nav>
}
export default Navbar;
