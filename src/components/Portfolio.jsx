import React, { useState } from "react"
import Toolbar from "./Toolbar"
import ProjectList from "./ProjectList"
import { items } from "./items"

function Portfolio() {
  const [filter, setFilter] = useState("All")
  return (
    <>
      <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={filter}
        onSelectFilter={(filter) => {
          setFilter(filter)
        }}
      />
      <ProjectList
        items={
          filter !== "All"
            ? items.filter((item) => item.category === filter)
            : items
        }
      />
    </>
  )
}

export default Portfolio
