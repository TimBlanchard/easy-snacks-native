import React from 'react'
import './index.scss'
import BoxIcon from '../../atoms/BoxIcon'
import NumberFormat from 'react-number-format';

export default function IconWithStats({title, period, value, type}) {

    return (
        <div className="iconWithStats">
            <BoxIcon type={type} />
            <div className="iconWithStats__content">
                <p className="iconWithStats__content__title">{title}<span> {period}</span></p>
                <div className="iconWithStats__content__value">
                    {value[2] === 'suffix' ?
                        <NumberFormat className="iconWithStats__content__value__default" value={value[0]} displayType={'text'} thousandSeparator={' '} suffix={value[1]} />
                        : value[2] === 'prefix' ?
                            <NumberFormat className="iconWithStats__content__value__default" value={value[0]} displayType={'text'} thousandSeparator={' '} prefix={value[1]} />
                            :
                            <NumberFormat className="iconWithStats__content__value__default" value={value[0]} displayType={'text'} thousandSeparator={' '} />
                    }
                    {value[3] &&
                        <span className="iconWithStats__content__value__detail">({value[3]})</span>
                    }
                </div>

            </div>
        </div>
    )
}
