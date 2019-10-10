import React, { useEffect, useState } from "react"

import { AddAccountModalViewer} from "./addAccountModalViewer"

export const AddAccountModalController = props => {
  const onModalSubmit = props.onModalSubmit
  const onModalClose = props.onModalClose
  const accounts = props.accounts
  const isShowing = props.isShowing

  const [accountComponents, setAccountComponents] = useState([])
  const [selectedAccounts, setSelectedAccounts] = useState([])
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [disable, setDisable] = useState(true);

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

  useEffect(() => {
    setStep(1)
  }, [])

  const handleStepNext = event => {
    if(step < accountComponents.length) {
      setStep(step + 1)
    }
  }

  const handleStepPrevious = event => {
    if(step === 1) {
      setStep(step - 1)
    }
  }


  return (
    <AddAccountModalViewer 
      onModalSubmit={onModalSubmit} 
      onModalClose={onModalClose}
      accounts={accounts}
      isLoading={isLoading}
      isShowing={isShowing}
      disable={disable}
      step={step}
      handleStepNext={handleStepNext}
      handleStepPrevious={handleStepPrevious}
      accountComponents={accountComponents}
      setAccountComponents={setAccountComponents}
    />
  )
}