import React from "react"

const ListGroup = props => { 
  const additionalClass = props.className || ""
  return (
    <React.Fragment>
      <ul className={`list-group ${additionalClass}`}>
        {props.children}
      </ul>
    </React.Fragment>
  )
}

export default ListGroup