import PropTypes from "prop-types"
import ChartLayout from './ChartLayout';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS, BarController, BarElement, CategoryScale, LinearScale, Tooltip,
  Legend, Title
} from 'chart.js';
import useFetch from '../hooks/useFetch';
import { url_today_cases_by_provinces } from '../../api/covid_urls';

ChartJS.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip,
  Legend, Title);

const ProvinceBarChart = ({ selectedCase }) => {

  const rawData = useFetch(url_today_cases_by_provinces)

  if (!rawData[0]) return;
  const filterData = rawData[0].filter(province => province.province !== "ทั้งประเทศ" && province.province !== "ไม่ระบุ")//datas[0].sort((a, b) => b?.total_case - a?.total_case).slice(1, 10)

  const datasets = {
    label: selectedCase === "total_case" ? "ผู้ติดเชื้อสะสม" : "ผู้เสียชีวิตสะสม",
    bgColor: selectedCase === "total_case" ? "rgba(240, 187, 0, 0.2)" : "rgba(210, 45, 54, 0.2)",
    bColor: selectedCase === "total_case" ? "rgb(240, 187, 0)" : "rgb(210, 45, 54)"
  }

  const data = {
    labels: filterData.map((item) => item.province),
    datasets: [
      {
        label: datasets.label,
        data: filterData.map((item) => item[selectedCase]),
        backgroundColor: datasets.bgColor,
        borderColor: datasets.bColor,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      // คำอธิบายสัญลักษณ์หรือสีของชุดข้อมูลในกราฟ
      legend: {
        position: 'top',
      },
      // หัวข้อ
      title: {
        display: true,
        text: 'กราฟแสดงยอดผู้ติดเชื้อสะสมแต่ละจังหวัด',
        font: {
          size: 16,
          family: "Kanit",
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
    }
  };

  return (
    <ChartLayout>
      <Bar data={data} options={options} />
    </ChartLayout>
  )
}

ProvinceBarChart.propTypes = {
  selectedCase: PropTypes.any
}

export default ProvinceBarChart