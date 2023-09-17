import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS, PointElement, LineElement, CategoryScale, LinearScale, Tooltip,
  Legend, Title
} from 'chart.js';

import ChartLayout from './ChartLayout';
import useFetch from '../hooks/useFetch';
import { vaccine_manufacturer_timeseries } from '../../api/covid_urls';

ChartJS.register(PointElement, LineElement, CategoryScale, LinearScale, Tooltip,
  Legend, Title);

const VaccineLineChart = () => {

  const rawData = useFetch(vaccine_manufacturer_timeseries);

  if (!rawData[0]) return

  const filterData = rawData[0].slice(-14);

  const data = {
    labels: filterData.map(item => item?.date),
    datasets: [
      {
        label: "AstraZeneca",
        data: filterData.map(item => item?.AstraZeneca),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 1,
      },
      {
        label: "Johnson & Johnson",
        data: filterData.map(item => item["Johnson & Johnson"]),
        borderColor: 'rgb(153, 102, 255)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderWidth: 1,
      },
      {
        label: "Sinopharm",
        data: filterData.map(item => item.Sinopharm),
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderWidth: 1,
      },
      {
        label: "Sinovac",
        data: filterData.map(item => item.Sinovac),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 1,
      },
      {
        label: "Pfizer",
        data: filterData.map(item => item.Pfizer),
        borderColor: 'rgb(255, 205, 86)',
        backgroundColor: 'rgba(255, 205, 86, 0.2)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: ['กราฟแสดงจำนวนการฉีดวัคซีนทั้งประเทศ', "แยกตามผู้ผลิตในรอบ 14 วัน"],
        font: {
          size: 16,
          family: "Kanit",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 7,
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <ChartLayout>
      <Line options={options} data={data} />
    </ChartLayout >
  )
}

export default VaccineLineChart