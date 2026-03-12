import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function UserManagement() {
  const [isNew, setIsNew] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div className="container">
      <div className="form-container">
        <h2>User Management</h2>
        <form onSubmit={(e) => { e.preventDefault(); alert("User Updated!"); }}>
          <div className="form-group">
            <label>User Type:</label>
            <input type="radio" checked={isNew} onChange={() => setIsNew(true)} /> New User
            <input type="radio" checked={!isNew} onChange={() => setIsNew(false)} style={{marginLeft:'20px'}} /> Existing User
          </div>
          <div className="form-group">
            <label>Name (Mandatory)</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" checked={isActive} onChange={() => setIsActive(!isActive)} /> 
              Active Status
            </label>
            <label style={{marginTop:'10px'}}>
              <input type="checkbox" checked={isAdmin} onChange={() => setIsAdmin(!isAdmin)} /> 
              Admin Privileges
            </label>
          </div>
          <button type="submit">Confirm User Details</button>
        </form>
        <Link to="/maintenance" style={{display:'block', marginTop:'15px'}}>Back</Link>
      </div>
    </div>
  );
}

export default UserManagement;