import React from "react";

import { useForm } from "../useForm/index";

const SignupForm = props => {
  const stateSchema = props.stateSchema;
  const validationStateSchema = props.validationStateSchema;
  const onSubmitForm = props.onSubmitForm;

  const { state, handleOnChange, handleOnSubmit, handlePasswordShow, disable } = useForm(
    stateSchema,
    validationStateSchema,
    onSubmitForm
  );

  const errorStyle = {
    color: "red",
    fontSize: "13px"
  };

  return (
    <React.Fragment>
      <form onSubmit={event => onSubmitForm(event)}>
        <div>
          <label htmlFor="username">
            Username
            <input
              type="text"
              name="username"
              value={state.username.value}
              onChange={handleOnChange}
            />
          </label>
          {state.username.error && (
            <p style={errorStyle}>{state.username.error}</p>
          )}
        </div>
        <div>
          <label htmlFor="email">
            Email
            <input
              type="text"
              name="email"
              value={state.email.value}
              onChange={handleOnChange}
            />
          </label>
          {state.email.error && <p style={errorStyle}>{state.email.error}</p>}
        </div>
        
        <div>
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

        <input type="submit" name="submit" disabled={disable} />
      </form>
    </React.Fragment>
  );
};

export default SignupForm;
