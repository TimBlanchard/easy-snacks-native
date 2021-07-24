import React from 'react'
import './index.scss'


// This component can take 3 warningState values :
// good
// warning
// error
export default function IndicatorState({ warningState, className}) {

    return (
        <div className={className + ' indicator-state indicator-state--'+warningState}>
        </div>
    )
}
