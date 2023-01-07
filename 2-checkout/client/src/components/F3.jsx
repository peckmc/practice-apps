import React, { useState } from "react";

export default function F3 (props) {
  const [isComplete, setIsComplete] = useState(true);

  function handleSubmit (e) {
    e.preventDefault();
    if (e.target.cc.value.length === 0 || e.target.exp.value.length === 0 || e.target.cvv.value.length === 0 || e.target.bzip.value.length === 0) {
      setIsComplete(false);
    } else {
      props.setPurchaseInfo({
        ...props.purchaseInfo,
        cc: e.target.cc.value,
        exp: e.target.exp.value,
        cvv: e.target.cvv.value,
        bzip: e.target.bzip.value
      });
      props.setCurrentForm('confirm');
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className="form-header">
        <h1>Payment</h1>
      </div>

      <div className="form-body">
      <label>
          Credit Card #:
          <input type="number" name="cc" />
        </label>
        <br />
        <label>
          Expiration:
          <input type="month" name="exp" />
        </label>
        <br />
        <label>
          CVV:
          <input type="number" name="cvv" />
        </label>
        <br />
        <label>
          Billing Zip:
          <input type="number" name="bzip" />
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