import React from "react";
import $ from "jquery";

export default function Confirmation (props) {
  function handleClick (e) {
    e.preventDefault();
    $.ajax({
      contentType: 'application/json',
      data: JSON.stringify(props.purchaseInfo),
      method: 'POST',
      url: 'http://localhost:3000/',
      success: function (data) {
        console.log('post successful!')
      },
      error: function () {

      }
    });
    props.setCurrentForm('home');
  };

  var { name, email, address1, address2, city, state, zip, cc, exp } = props.purchaseInfo;
  return (
      <div className='form'>
        <div className="form-header">
        <h1>Confirmation</h1>
        </div>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <br />
        <p>Address 1: {address1}</p>
        <p>Address 2: {address2}</p>
        <p>City: {city}</p>
        <p>State: {state}</p>
        <p>Zip Code: {zip}</p>
        <br />
        <p>Credit Card #: Ending in {cc.substring(cc.length - 4)}</p>
        <p>Expiration: {exp}</p>
        <button onClick={handleClick} type="submit">Purchase</button>
      </div>
  );
};