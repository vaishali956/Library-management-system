import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AddMembership() {
  const [duration, setDuration] = useState('6 months'); // Default: 6 months

  return (
    <div className="container">
      <div className="form-container">
        <h2>Add Membership</h2>
        <form onSubmit={(e) => { e.preventDefault(); alert("Membership Created!"); }}>
          <div className="form-group">
            <label>First Name</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Membership Duration:</label>
            <label style={{fontWeight:'normal'}}>
              <input type="radio" checked={duration === '6 months'} onChange={() => setDuration('6 months')} /> 6 Months
            </label>
            <label style={{fontWeight:'normal'}}>
              <input type="radio" checked={duration === '1 year'} onChange={() => setDuration('1 year')} /> 1 Year
            </label>
            <label style={{fontWeight:'normal'}}>
              <input type="radio" checked={duration === '2 years'} onChange={() => setDuration('2 years')} /> 2 Years
            </label>
          </div>
          <button type="submit">Create Membership</button>
        </form>
        <Link to="/maintenance" style={{display:'block', marginTop:'15px'}}>Back</Link>
      </div>
    </div>
  );
}

export default AddMembership;