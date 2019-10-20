import React from "react"
import posed from "react-pose";

const posedDivConfig = {
  preLoad: {
    x: "-100%"
  },
  loaded: {
    x: 0
  }
};

const ParentDiv = posed.div(posedDivConfig);

export const ModalViewer = props => {
  const isLoading = props.isLoading
  const isShowing = props.isShowing
  const onModalCloseClick = props.onModalCloseClick
  const header = props.header
  const children = props.children
  const footer = props.footer
  const poseDisplayState = props.poseDisplayState

  const renderContent = () => {
    if(isLoading) {
      return (
        <div>Loading...</div>
      )
    }

    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <div className={`modal ${(isShowing) ? "is-active" : ""}`}>
        <div className="modal__background"></div>
          <ParentDiv pose={isLoading ? "preLoad" : "loaded"}>
            <div className="modal__content"  >
              <div className="card--modal">
                <div className="card__header">
                  {header}
                  <a className="button--close" onClick={onModalCloseClick}></a>
                </div>
                <div className="card__content">
                  {renderContent()}
                </div>
                <div className="card__footer">
                  {footer}
                </div>
              </div>
            </div>
          </ParentDiv>
      </div>
    </React.Fragment>
  )
}