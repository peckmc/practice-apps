import React, { useState } from "react";

export default function F1 (props) {
  const [isComplete, setIsComplete] = useState(true);

  function handleSubmit (e) {
    e.preventDefault();
    if (e.target.name.value.length === 0 || e.target.email.value.length === 0 || e.target.password.value.length === 0) {
      setIsComplete(false);
    } else {
      props.setPurchaseInfo({
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
      });
      props.setCurrentForm('f2');
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className="form-header">
        <h1>Create Account</h1>
      </div>

      <div className="form-body">
      <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Next</button>
      </div>

      <div className="form-footer">
        {!isComplete ? <span>Please Complete All Fields!</span> : null}
      </div>
    </form>
  );
};