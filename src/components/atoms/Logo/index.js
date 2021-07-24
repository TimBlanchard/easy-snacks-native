import React from 'react'
import { Link} from "wouter";
import './index.scss'

export default function Logo() {

    return (
        <div className="logo">
            <Link href="/">
                <img className="logo__img" src="/assets/images/logo.png"/>
            </Link>
        </div>
    )
}
