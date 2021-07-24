import React from 'react'
import './index.scss'
import IconWithStats from "../../molecules/IconWithStats";

export default function Summary({array}) {

    return (
        <div className="summary box-default">
            {array.map(item => (
                <IconWithStats key={item.id} title={item.title} period={item.period} value={[item.values.number, item.values.symbole, item.values.position, item.values.detail]} type={item.type} />
            ))}
        </div>
    )
}
