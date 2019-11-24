import React from "react";

import FormStateManager from "nuggie-react-formstatemanager";

import Card from "../../components/card"

const LoginForm = props => {
  const {
    loginState,
    stateSchema,
    validationStateSchema,
    onSubmitForm
  } = props

  const {
    state,
    handleOnChange,
    handleOnSubmit,
    handlePasswordShow,
    disable
  } = FormStateManager({ stateSchema: stateSchema, validationSchema: validationStateSchema, callback: onSubmitForm })

  const errorStyle = {
    color: "red",
    fontSize: "13px"
  };

  const cardHeaderRender = (
    <React.Fragment>
      <img />
      <h4>Register</h4>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <Card
        cardClass="card--form"
        header={cardHeaderRender}
      >
        <form className="form" onSubmit={event => handleOnSubmit(event)}>
          <div className="form__group">
            <div className="input__prepend input__prepend--icon">
              <i class="tim-icons icon-single-02"></i>
            </div>
            <input
              className="input input--prepend"
              type="text"
              name="uniqueLogin"
              value={state.uniqueLogin.value}
              onChange={handleOnChange}
            />
            {state.uniqueLogin.error && (
              <p style={errorStyle}>{state.uniqueLogin.error}</p>
            )}
          </div>

          <div className="form__group">
            <div className="input__prepend input__prepend--icon">
              <i class="tim-icons icon-single-02"></i>
            </div>
            <input
              className="input input--prepend input--append"
              type="password"
              name="password"
              value={state.password.value}
              onChange={handleOnChange}
            />
            <div className="input__append input__append--icon">
              <i class="tim-icons icon-lock-circle"></i>
            </div>

            <span onClick={handlePasswordShow}>show</span>
            {state.password.error && (
              <p style={errorStyle}>{state.password.error}</p>
            )}
          </div>

          <button
            type="submit"
            name="submit"
            className="btn-round btn btn-primary btn-lg"
            disabled={disable}
          >
            {loginState.isSubmit ? "SUBMITTING..." : "SUBMIT"}
          </button>
        </form>
      </Card >
    </React.Fragment >
  );
};

export default LoginForm;

