import React from 'react';
import { Link } from 'react-router-dom';

function Reports() {
  return (
    <div className="full-page-wrapper">
      <div className="container dashboard-container">
        <header className="dashboard-header">
          <h2>Library Reports</h2>
          <Link to="/user-home" className="logout-btn" style={{backgroundColor: '#7f8c8d'}}>Back</Link>
        </header>
        
        <ul className="dashboard-nav">
          <li className="nav-card" style={{background: '#9b59b6'}}>
            <Link to="/active-issues">
              <div className="icon">📚</div>
              <h3>Active Issues</h3>
              <p>Books currently issued to you</p>
            </Link>
          </li>
          <li className="nav-card" style={{background: '#f1c40f'}}>
            <Link to="/reports">
              <div className="icon">📑</div>
              <h3>Master List</h3>
              <p>Explore all books in library</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Reports;