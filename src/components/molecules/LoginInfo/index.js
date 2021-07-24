import React from 'react'
import './index.scss'

export default function LoginInfo({text, warningState, value}) {

    return (
        <div className="login-info">
           <p className="login-info__username">Jean-michel<br/>Dupont</p>
            <img className="login-info__user-img" src="/assets/images/user-default-photo.png"/>
        </div>
    )
}
