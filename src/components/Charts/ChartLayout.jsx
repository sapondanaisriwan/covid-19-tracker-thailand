import PropTypes from "prop-types"
const ChartLayout = ({ children }) => {
  return (
    <div className="h-[300px] text-lg md:h-[400px] lg:h-[480px]">
      {children}
    </div>
  )
}

ChartLayout.propTypes = {
  children: PropTypes.element
}

export default ChartLayout