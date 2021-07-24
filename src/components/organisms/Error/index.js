import React from 'react'
import './index.scss'
import Button from "../../atoms/Button";

export default function Error() {

    return (
        <div className="error box-default">
            <div className="error__left">
                <img className="error__icon" src="/assets/images/icons/warning.svg"/>
                <div className="error__text">
                    <p className="error__text__title">3 de vos distributeurs sont en pannes</p>
                    <p className="error__text__information">Une action immédiate de votre part est requise</p>
                </div>
            </div>
            <div className="error__right">
                <Button className="btn--error" text='Résoudre les problèmes' />
                <img className="error__exit" src="/assets/images/icons/exit.svg"/>
            </div>
        </div>
    )
}
