import React, { useEffect } from "react"

import { Modal as ModalModule } from "../modal"

export const AddAccountModalViewer = props => {
  const onModalSubmit = props.onModalSubmit
  const onModalClose = props. onModalClose
  const accounts = props.accounts
  const isLoading = props.isLoading
  const isShowing = props.isShowing
  const disable = props.disable
  const step = props.step
  const handleStepNext = props.handleStepNext
  const handleStepPrevious = props.handleStepPrevious
  const accountComponents = props.accountComponents
  const setAccountComponents = props.setAccountComponents

  useEffect(() => {
    renderSteps()
  }, [])

  const renderSteps = () => {
    const stepOne = () => {
      return (
        <div className="column is-full grid">
          <div className="column is-full">
            STEP ONE
          </div>
        </div>
      )
    }

    const stepTwo = () => {
      return (
        <div className="column is-full grid">
          <div className="column is-full">
            STEP Two
          </div>
        </div>
      )
    }

    setAccountComponents([
      stepOne(),
      stepTwo()
    ])
  }

  const renderBody = () => {
    const stepIndex = step - 1

    return accountComponents[stepIndex]
  }

  return (
    <ModalModule
      isShowing={isShowing}
      isLoading={isLoading}
      onModalCloseClick={onModalClose}
    >
      {renderBody()}
    </ModalModule>
  )
}