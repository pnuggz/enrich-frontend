import React from "react"

const ListGroupItem = props => { 
  const additionalClass = props.className || ""
  return (
    <React.Fragment>
      <li className={`list-group-item ${additionalClass}`}>
        {props.children}
      </li>
    </React.Fragment>
  )
}

export default ListGroupItem