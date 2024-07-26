import { Pie } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend} from 'chart.js';
import { Card } from '@/components/ui/card';

Chart.register(ArcElement, Tooltip, Legend)

const Querypie = () => {
    const OueriesResponded = 20;
    const unRespondedQueries = 10;
    const data = {
        labels: [
            'Oueries Responded', ' UnResponded Queries'
        ],
        datasets: [
            {
                label: '# of queries',
                data: [OueriesResponded, unRespondedQueries],
                backgroundColor: [
                    ' rgb(128, 128, 128)',
                    'rgb(224, 224, 224)',
                ],
                borderColor: [
                    ' rgb(128, 128, 128)',
                    'rgb(224, 224, 224)',
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
        <Card className='w-full h-60 p-2'>
            <Pie data={data} options={options} />
        </Card>
    )
}

export default Querypie; 