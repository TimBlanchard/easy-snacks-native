import React from 'react'
import './index.scss'

export default function Button({text, type, icon, className}) {

    return (
        <div className={'btn ' + className}>
            {
                icon && <img className="btn__icon" src={icon} />
            }
            <p className="btn__text">{text}</p>
        </div>
    )
}
