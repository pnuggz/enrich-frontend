import React from "react";

const SignupForm = props => {
  const data = props.data
  const handleChange = props.handleChange
  const handleBlur = props.handleBlur

  const unmaskPassword = e => {
    const type = e.target.previousSibling.type
    
    if(type === "password") {
      e.target.previousSibling.type = "text"
      return
    }
    e.target.previousSibling.type = "password"
  }

  return (
    <div className="grid">
      <div className="column is-full has-no-margin has-no-padding">
        <label>Username</label>
        <input id="username" style={{border: data.username.error.border}} type="text" value={data.username.value || ""} onChange={(e) => handleChange(e)} onBlur={(e) => handleBlur(e)}/>
        <span>{data.username.error.text}</span>
      </div>
      <div className="column is-full has-no-margin has-no-padding">
        <label>Email</label>
        <input style={{border: data.email.error.border}} type="text" value={data.email.value || ""} onChange={(e) => handleChange(e)} onBlur={(e) => handleBlur(e)}/>
        <span>{data.email.error.text}</span>
      </div>
      <div className="column is-full has-no-margin has-no-padding">
        <label>Password</label>
        <div className="is-input-group">
          <input style={{border: data.password.error.border}} type="password" value={data.password.value || ""} onChange={(e) => handleChange(e)} onBlur={(e) => handleBlur(e)}/>
          <span style={{cursor: "pointer"}} onClick={e => unmaskPassword(e)}>show</span>
        </div>
        <span>{data.password.error.text}</span>
      </div>
    </div>
  );
};

export default SignupForm;
