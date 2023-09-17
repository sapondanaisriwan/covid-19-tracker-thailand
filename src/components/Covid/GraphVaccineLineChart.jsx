import VaccineLineChart from "../Charts/VaccineLineChart"


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const GraphVaccineLineChart = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, [])

  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto w-full p-4 pt-[60px]" data-aos="fade-left">
        <VaccineLineChart />
      </div>
    </div>)
}

export default GraphVaccineLineChart