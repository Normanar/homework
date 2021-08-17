import React from 'react'
import s from './Message.module.css'


export type MessageDataProps = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageDataProps) {
    return (
        <div className={s.wrapper}>
            <div className={s.avatar}>
                <img src={props.avatar} alt="avatar"/>
            </div>
            <div className={s.message}>
                <div className={s.name}>{props.name}</div>
                <div className={s.messageOne}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>

        </div>

    )
}

export default Message;
