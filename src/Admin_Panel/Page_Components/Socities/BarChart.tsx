import React from 'react'
import { Chart, CategoryScale , LinearScale , BarElement , Title , Tooltip , Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';


Chart.register(CategoryScale , LinearScale , BarElement , Title , Tooltip , Legend )

const BarChart = () => {
    const societyData = [ 40, 4, 3,10,16]
    const data = {
        labels: [
            'WIBD' , 'Kalam' , 'IEEE' ,'nameSpace' , 'Drishti'
        ],
        datasets: [
            {
                label: 'Society events',
                data: societyData,
                backgroundColor: [
                    ' rgb(30, 30, 147)',
                    'rgb(210, 207, 207)',
                    'rgb(24, 24, 119)',
                    'rgb(61, 61, 227)',
                    'rgb(125, 125, 249)',
                ],
                borderColor: [
                    ' rgb(30, 30, 147)',
                    'rgb(210, 207, 207)',
                    'rgb(24, 24, 119)',
                    'rgb(61, 61, 227)',
                    'rgb(125, 125, 249)',
                ],
                borderWidth: 1,
            }
        ]
    }

    const options = {
        responsive: true,
       plugins : {
        legend : {
            position : 'top' as const,
        },
        title:{
            display : true ,
            text : 'Events Conducted By Socities',
        }
       }
    }
   return (
        <div className='w-full h-80'>
            <Bar data={data} options={options} />
        </div>
    )
}

export default BarChart