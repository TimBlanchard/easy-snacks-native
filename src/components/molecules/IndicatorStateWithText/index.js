import React from 'react'
import './index.scss'
import IndicatorState from "../../atoms/IndicatorState";

export default function IndicatorStateWithText({text, warningState, value}) {

    return (
        <div className="indicator-state-with-text">
            <IndicatorState className="indicator-state-with-text__state" warningState={warningState}/>
            <p className="indicator-state-with-text__text">
                <span>{value}</span> {text}</p>
        </div>
    )
}
