import React from 'react';
import { Link } from 'react-router-dom';

function Maintenance() {
  return (
    <div className="full-page-wrapper">
      <div className="container dashboard-container">
        <header className="dashboard-header">
          <h2>Maintenance Module</h2>
          <Link to="/admin-home" className="logout-btn" style={{backgroundColor: '#7f8c8d'}}>Back</Link>
        </header>
        
        <ul className="dashboard-nav">
          <li className="nav-card" style={{background: '#e67e22'}}>
            <Link to="/add-membership">
              <div className="icon">👤</div>
              <h3>Membership</h3>
              <p>Add or Update Library Members</p>
            </Link>
          </li>
          <li className="nav-card" style={{background: '#9b59b6'}}>
            <Link to="/add-book">
              <div className="icon">🎬</div>
              <h3>Books/Movies</h3>
              <p>Manage Books and Media Items</p>
            </Link>
          </li>
          <li className="nav-card" style={{background: '#1abc9c'}}>
            <Link to="/user-management">
              <div className="icon">🔐</div>
              <h3>User Management</h3>
              <p>Manage Admin & User Logins</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Maintenance;