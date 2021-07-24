import React from 'react'
import './index.scss'

export default function Summary({type}) {

    return (
        <div className="boxIcon">
            <img className="boxIcon__icon" src={'/assets/images/icons/'+type+'.svg'} />
        </div>
    )
}