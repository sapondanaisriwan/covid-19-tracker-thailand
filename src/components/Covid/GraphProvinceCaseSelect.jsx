import { useEffect, useState } from "react"
import ProvinceBarChart from "../Charts/ProvinceBarChart"
import ProvinceCaseSelect from "../Select/ProvinceCaseSelect"


import AOS from 'aos';
import 'aos/dist/aos.css';

const GraphProvinceCaseSelect = () => {

  const [selectedCase, setSelectedCase] = useState("total_case");

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, [])

  const handleSelected = (type_case) => {
    setSelectedCase(type_case);
  }

  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto w-full p-4 pt-[60px]" data-aos="fade-left">
        <ProvinceCaseSelect onSelectedCase={handleSelected} />
        <ProvinceBarChart selectedCase={selectedCase} />
      </div>
    </div>
  )
}

export default GraphProvinceCaseSelect