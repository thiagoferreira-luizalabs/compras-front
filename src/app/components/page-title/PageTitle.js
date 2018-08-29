import React from "react"
import PropTypes from "prop-types"
import "./page-title.css"

const PageTitle = ({ name, description }) => (
  <div className="page-title">
    <h1>{name}</h1>
    <h2>{description}</h2>
  </div>
)

PageTitle.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
}

export default PageTitle