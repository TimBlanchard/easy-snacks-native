import React from 'react'
import Summary from '../../components/organisms/Summary'
import SchoolRevenue from "../../components/organisms/SchoolRevenue";
import './index.scss'

export default function SingleSchool() {
    const array = [
        {
            id: 1,
            title: 'Nbr. de distrib.',
            values: {
                number: 21
            },
            type: 'distributeur'
        },
        {
            id: 2,
            title: 'Le + utilisé',
            period: '/1 semaine',
            values: {
                number: 138,
                symbole: '#',
                position: 'prefix'
            },
            type: 'users'
        },
        {
            id: 3,
            title: 'Le + rentable',
            period: '/1 semaine',
            values: {
                number: 45,
                symbole: '#',
                position: 'prefix',
                detail: '543€'
            },
            type: 'dollar'
        }
    ]

    return (
        <div className="main-app single-school">
            <div className="principal">
                <Summary array={array} />
            </div>
            <aside>
                <SchoolRevenue/>
            </aside>
        </div>
    )
}
