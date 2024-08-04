import { Pie } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend)

const DashboardPieChart = () => {
    const resolvedQueries = 16;
    const unResolvedQueries = 2;
    const data = {
        labels: [
            '   Resolved Queries', 'Unresolved Queries'
        ],
        datasets: [
            {
                label: '# of queries',
                data: [resolvedQueries, unResolvedQueries],
                backgroundColor: [
                    ' rgb(30, 30, 147)',
                    'rgb(210, 207, 207)',
                ],
                borderColor: [
                    ' rgb(30, 30, 147)',
                    'rgb(210, 207, 207)',
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

export default DashboardPieChart;