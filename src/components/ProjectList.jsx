import React from "react"
import PropTypes from "prop-types"

function ProjectList({ items }) {
  return items.map((item, i) => (
    <img key={item.img + item.category + i} src={item.img} alt="f" />
  ))
}

ProjectList.propTypes = {
  item: PropTypes.shape({
    img: PropTypes.string,
    category: PropTypes.string,
  }),
}

export default ProjectList
