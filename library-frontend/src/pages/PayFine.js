import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function PayFine() {
  const [fineAmount, setFineAmount] = useState(0);
  const [isPaid, setIsPaid] = useState(false);

  const handleSubmit = () => {
    if (fineAmount > 0 && !isPaid) {
      alert("Please check 'Fine Paid' box to complete transaction.");
    } else {
      alert("Transaction Completed Successfully!");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Pay Fine</h2>
        <div className="form-group">
          <label>Fine Calculated (Default: 0)</label>
          <input type="text" value={fineAmount} readOnly />
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" checked={isPaid} onChange={(e) => setIsPaid(e.target.checked)} />
            Fine Paid?
          </label>
        </div>
        <div className="form-group">
          <label>Remarks (Non-Mandatory)</label>
          <textarea></textarea>
        </div>
        <button onClick={handleSubmit}>Confirm Payment</button>
        <Link to="/transactions" style={{display:'block', marginTop:'10px'}}>Back</Link>
      </div>
    </div>
  );
}

export default PayFine;