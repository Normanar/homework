import React from 'react'
import s from '../hw5.module.css'

function Error404() {
    return (
        <div>
            <div className={s.error}>404</div>
            <div className={s.errorText}>Page not found!</div>
            <div className={s.errorText}>Ooooooops</div>

        </div>
    )
}

export default Error404
