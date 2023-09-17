import PropTypes from "prop-types"
import { provinceTypes } from "../../data/select_types"

import { FcBarChart } from "react-icons/fc";

const ProvinceCaseSelect = ({ onSelectedCase }) => {

  const selectedCase = (e) => {
    onSelectedCase(e.target.value)
  }

  return (
    <div>
      <label className="flex items-center gap-1">
        <FcBarChart /> เลือกข้อมูล
        <select name="selectedProvince" onChange={selectedCase}>
          {provinceTypes.map(item => <option key={item.id} value={item.type_case} >{item.text}</option>
          )}
        </select>
      </label>
    </div>
  )
}

ProvinceCaseSelect.propTypes = {
  onSelectedCase: PropTypes.func
}

export default ProvinceCaseSelect