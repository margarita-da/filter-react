import React from "react"
import PropTypes from "prop-types"

function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    filters &&
    filters.map((item) => (
      <div
        key={item}
        className={`${item === selected ? "active" : ""}`}
        onClick={() => onSelectFilter(item)}
      >
        {item}
      </div>
    ))
  )
}

Toolbar.propTypes = {
  filters: PropTypes.array,
  selected: PropTypes.string,
  onSelectFilter: PropTypes.any,
}
export default Toolbar
