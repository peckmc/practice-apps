import React, { useState } from "react";
import ReactDOM from "react-dom";
import Homepage from "./components/Homepage.jsx";
import F1 from "./components/F1.jsx";
import F2 from "./components/F2.jsx";
import F3 from "./components/F3.jsx";
import Confirmation from "./components/Confirmation.jsx";

function CheckoutApp () {
  const [currentForm, setCurrentForm] = useState('home');
  const [purchaseInfo, setPurchaseInfo] = useState({});

  return (
    <div>
      {currentForm === 'home' ? <Homepage setCurrentForm={setCurrentForm} setPurchaseInfo={setPurchaseInfo}/> : null}
      {currentForm === 'f1' ? <F1 setCurrentForm={setCurrentForm} setPurchaseInfo={setPurchaseInfo}/> : null}
      {currentForm === 'f2' ? <F2 setCurrentForm={setCurrentForm} setPurchaseInfo={setPurchaseInfo} purchaseInfo={purchaseInfo}/> : null}
      {currentForm === 'f3' ? <F3 setCurrentForm={setCurrentForm} setPurchaseInfo={setPurchaseInfo} purchaseInfo={purchaseInfo}/> : null}
      {currentForm === 'confirm' ? <Confirmation setCurrentForm={setCurrentForm} purchaseInfo={purchaseInfo}/> : null}
    </div>
  );
}

ReactDOM.render(<CheckoutApp />, document.getElementById("root"));
