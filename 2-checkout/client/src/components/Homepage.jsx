import React from "react";

export default function Homepage (props) {
  function handleClick () {
    props.setCurrentForm('f1');
  };
  return (
    <form className='form'>
      <div className="form-header">
        <h1>Checkout</h1>
      </div>
      <p>
        <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
      </p>
      <button onClick={handleClick}>Checkout</button>
    </form>
  );
};
