import { useState } from "react"
import ProvinceBarChart from "../Charts/ProvinceBarChart"
import ProvinceCaseSelect from "../Select/ProvinceCaseSelect"

const GraphProvinceCaseSelect = () => {

  const [selectedCase, setSelectedCase] = useState("total_case");

  const handleSelected = (type_case) => {
    setSelectedCase(type_case);
  }

  return (
    <div className="bg-white">
      <div className="max-w-5xl mx-auto w-full p-4 pt-[60px]">
        <ProvinceCaseSelect onSelectedCase={handleSelected} />
        <ProvinceBarChart selectedCase={selectedCase} />
      </div>
    </div>
  )
}

export default GraphProvinceCaseSelect