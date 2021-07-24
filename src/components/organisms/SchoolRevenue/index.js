import React from 'react'
import { Line } from 'react-chartjs-2';

export default function SchoolRevenue() {
    const data = {
        labels: ['L', 'M', 'M', 'J', 'V', 'S'],
        datasets: [
            {
                label: '# €',
                data: [100, 200, 750, 770, 1000, 1100, 1100],
                fill: false,
                backgroundColor: '#8C60FE',
                borderColor: '#8C60FE',
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <div className="school-revenue box-default">
            <p> Revenus de l'école</p>
            <Line data={data} options={options} />
        </div>
    )
}
