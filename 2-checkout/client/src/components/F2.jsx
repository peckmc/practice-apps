import React, { useState } from "react";

export default function F2 (props) {
  const [isComplete, setIsComplete] = useState(true);

  function handleSubmit (e) {
    e.preventDefault();
    if (e.target.address1.value.length === 0 || e.target.city.value.length === 0 || e.target.state.value.length === 0 || e.target.zip.value.length === 0) {
      setIsComplete(false);
    } else {
      props.setPurchaseInfo({
        ...props.purchaseInfo,
        address1: e.target.address1.value,
        address2: e.target.address2.value,
        city: e.target.city.value,
        state: e.target.state.value,
        zip: e.target.zip.value
      });
      props.setCurrentForm('f3');
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className="form-header">
        <h1>Address</h1>
      </div>

      <div className="form-body">
      <label>
          Address 1:
          <input type="text" name="address1" />
        </label>
        <br />
        <label>
          Address 2:
          <input type="text" name="address2" />
        </label>
        <br />
        <label>
          City:
          <input type="text" name="city" />
        </label>
        <br />
        <label>
          State:
          <input type="text" name="state" />
        </label>
        <br />
        <label>
          Zip:
          <input type="number" name="zip" />
        </label>
        <br />
        <br />
        <button type="submit">Next</button>
      </div>

      <div className="form-footer">
        {!isComplete ? <span>Please Complete All Fields!</span> : null}
      </div>
    </form>
  );
};