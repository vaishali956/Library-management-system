import React from 'react';
import { Link } from 'react-router-dom';

function UserHome() {
  return (
    /* full-page-wrapper ensures 100vh height and 100vw width */
    <div className="full-page-wrapper">
      <div className="container dashboard-container">
        
        {/* Header with Title and Log Out button */}
        <header className="dashboard-header">
          <h1>Library User Dashboard</h1>
          <Link to="/" className="logout-btn">Log Out</Link>
        </header>

        <p className="welcome-text">Welcome to the Library Management System. Please select a module.</p>

        <nav>
          <ul className="dashboard-nav">
            {/* Transactions Card */}
            <li className="nav-card">
              <Link to="/transactions">
                <div className="icon">🔄</div>
                <h3>Transactions</h3>
                <p>Check Book Availability, Issue/Return Books, and Pay Fines</p>
              </Link>
            </li>

            {/* Reports Card */}
            <li className="nav-card">
              <Link to="/reports">
                <div className="icon">📊</div>
                <h3>Reports</h3>
                <p>View your Active Issues and Library Master Lists</p>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Footer for extra links like the Flow Chart */}
        <footer className="dashboard-footer">
          <Link to="/chart" style={{ color: '#3498db', fontWeight: 'bold', textDecoration: 'none' }}>
            📋 View System Flow Chart
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default UserHome;