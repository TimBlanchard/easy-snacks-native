import React from 'react'
import Error from '../../components/organisms/Error'
import Summary from '../../components/organisms/Summary'
import {Link} from "wouter";
import ArrayData from '../../components/organisms/ArrayData';

export default function Landing() {
    const array = [
        {
            id: 1,
            title: 'Revenus',
            period: '/1 jour',
            values: {
                number: 3487,
                symbole: '€',
                position: 'suffix'
            },
            type: 'home'
        },
        {
            id: 2,
            title: 'Revenus',
            period: '/1 semaine',
            values: {
                number: 12984,
                symbole: '€',
                position: 'suffix'
            },
            type: 'search'
        },
        {
            id: 3,
            title: 'Revenus',
            period: '/1 mois',
            values: {
                number: 48290,
                symbole: '€',
                position: 'suffix'
            },
            type: 'activity'
        },
        {
            id: 4,
            title: 'Revenus',
            period: '/1 an',
            values: {
                number: 508488,
                symbole: '€',
                position: 'suffix'
            },
            type: 'search'
        }
    ]

    return (
        <div className="main-app landing">
            <Error />
            <Summary array={array} />
            <ArrayData />
            <Link href="/schools/lyceeMichel">
                <a className="link">See single school</a>
            </Link>
        </div>
    )
}
