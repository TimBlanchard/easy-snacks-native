import React from 'react'
import './index.scss'
import IndicatorStateWithText from "../../molecules/IndicatorStateWithText";

export default function DispensersState() {

    return (
        <div className="dispensers-state">
            <IndicatorStateWithText warningState={'good'} value="214" text="fonctionnels"/>
            <IndicatorStateWithText warningState={'warning'} value="37" text="en réparation" />
            <IndicatorStateWithText warningState={'error'} value="6" text="hors-service"/>
        </div>
    )
}
