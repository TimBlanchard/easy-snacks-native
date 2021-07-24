import React from 'react'
import Logo from "../../atoms/Logo";
import Button from "../../atoms/Button";
import './index.scss'
import DispensersState from "../DispensersState";
import LoginInfo from "../../molecules/LoginInfo";

export default function NavHeader() {

    return (
        <div className="nav-header">
            <div className="nav-header__block--left">
                <Logo/>
                <DispensersState/>
            </div>
            <div className="nav-header__block--right">
                <Button icon="/assets/images/icons/cloche.png" className="btn--primary" text='12 alertes' />
                <LoginInfo/>
            </div>
        </div>
    )
}
