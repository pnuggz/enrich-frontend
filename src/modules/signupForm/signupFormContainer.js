import React from "react";

import { useForm } from "../useForm/index";

const SignupForm = props => {
  const stateSchema = props.stateSchema;
  const validationStateSchema = props.validationStateSchema;
  const onSubmitForm = props.onSubmitForm;

  const {
    state,
    handleOnChange,
    handleOnSubmit,
    handlePasswordShow,
    disable
  } = useForm(stateSchema, validationStateSchema, onSubmitForm);

  const errorStyle = {
    color: "red",
    fontSize: "13px"
  };

  return (
    <React.Fragment>
      <form onSubmit={event => handleOnSubmit(event)}>
        <div className="column is-full">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={state.username.value}
            onChange={handleOnChange}
          />

          {state.username.error && (
            <p style={errorStyle}>{state.username.error}</p>
          )}
        </div>
        <div className="column is-full">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={state.email.value}
            onChange={handleOnChange}
          />

          {state.email.error && <p style={errorStyle}>{state.email.error}</p>}
        </div>

        <div className="column is-full">
          <label htmlFor="password">Password</label>
          <div className="is-input-group">
            <input
              type="password"
              name="password"
              value={state.password.value}
              onChange={handleOnChange}
            />
            <span onClick={handlePasswordShow}>show</span>
          </div>
          {state.password.error && (
            <p style={errorStyle}>{state.password.error}</p>
          )}
        </div>

        <div className="column is-full">
          <input type="submit" name="submit" disabled={disable} />
        </div>
      </form>
    </React.Fragment>
  );
};

export default SignupForm;
