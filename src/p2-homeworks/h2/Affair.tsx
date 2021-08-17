import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void; // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => props.deleteAffairCallback(props.affair._id) // need to fix
    const priorityCSS = props.affair.priority === 'high' ? s.high : props.affair.priority === 'low' ? s.low : s.middle

    return (
        <div className={s.affair}>
            <span className={s.name}>{props.affair.name}</span>
            <span className={s.priority}> <span className={priorityCSS}>[{props.affair.priority}]</span></span>
            <span className={s.button}>
                {/*<button className={s.button_item} onClick={deleteCallback}>X</button>*/}
                <SuperButton className={s.button_item} onClick={deleteCallback}>
                    X
                </SuperButton>
            </span>
        </div>
    )
}

export default Affair;
