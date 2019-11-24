import React, { useState } from "react";
import ReactDOM from "react-dom"

const StyledTooltip = props => {
  const [isOpen, setIsOpen] = useState(true)
  const [popover, setPopover] = useState(null)

  const defaultProps = {
    placement: 'top',
    autohide: true,
    placementPrefix: 'bs-tooltip',
    trigger: 'click hover focus',
  };
  const popperClasses = `tooltip show`
  const innerClassName = `tooltip-inner ${props.innerClassName}`

  const onMouseOverTooltipContent = () => {
    setIsOpen(!isOpen)
  }

  const onMouseLeaveTooltipContent = () => {
    setIsOpen(!isOpen)
  }

  const getRef = (ref) => {
    const { innerRef } = this.props;
    if (innerRef) {
      if (typeof innerRef === 'function') {
        innerRef(ref);
      } else if (typeof innerRef === 'object') {
        innerRef.current = ref;
      }
    }
    setPopover(ref)
  }

  const renderTest = () => {
    if (isOpen) {
      return (
        ReactDOM.createPortal(
          (<div ref={"test"}>TEST</div>),
          document.getElementById('tooltip3')
        )
      )
    }

    return null;
  }

  return (
    <React.Fragment>
      {props.children}
      <div className="tooltip">
        <div className="tooltip-inner">
          TEST
        </div>
      </div>
    </React.Fragment>
  )
}

export default StyledTooltip