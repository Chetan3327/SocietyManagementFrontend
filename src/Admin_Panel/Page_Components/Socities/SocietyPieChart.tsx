import { Pie } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend, plugins } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend)

const SocietyPieChart = () => {
    const societyData = [ 2, 4, 3,10,15]
    const data = {
        labels: [
            'WIBD' , 'Kalam' , 'IEEE' ,'nameSpace' , 'Drishti'
        ],
        datasets: [
            {
                label: '# of events',
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
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'bottom' as const
            },
            tooltip: {
                callbacks: {
                    label: function (context: any) {
                        let label = context.label || '';
                        if (label) {
                            label += ':';
                        }
                        if (context.parsed !== null) {
                            label += context.parsed;
                        }
                        return label;
                    }
                }
            }
        }
    }

    return (
        <div className='w-full h-60'>
            <Pie data={data} options={options} />
        </div>
    )
}

export default SocietyPieChart; 