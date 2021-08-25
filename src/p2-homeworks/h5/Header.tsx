import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import {PATH} from "./Routes";
import s from './hw5.module.css'

function Header() {

    let [menu, setMenu] = useState<boolean>(false)


    return (
        <div className={menu ? `${s.navlink} ${s.navlink_active}` : `${s.navlink}`}>
            <NavLink className={s.navlink_item} activeClassName={s.navlink_item_active} to={PATH.PRE_JUNIOR}>pre-junior</NavLink>
            <NavLink className={s.navlink_item} activeClassName={s.navlink_item_active} to={PATH.JUNIOR}>junior</NavLink>
            <NavLink className={s.navlink_item} activeClassName={s.navlink_item_active} to={PATH.JUNIOR_PLUS}>junior-plus</NavLink>
            <div className={s.triangle} onClick={() => setMenu(!menu)}></div>
        </div>
    )
}

export default Header
