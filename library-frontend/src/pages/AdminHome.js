import React from 'react';
import { Link } from 'react-router-dom';

function AdminHome() {
  return (
    
    <div className="container dashboard-container">
      <header className="dashboard-header">
        <h1>Admin Control Panel</h1>
      </header>

      <p className="welcome-text">Welcome, Administrator. Select a module to manage the library.</p>

      <nav>
        <ul className="dashboard-nav">
          <li className="nav-card">
            <Link to="/maintenance">
              <div className="icon">🛠️</div>
              <h3>Maintenance</h3>
              <p>Add/Update Books, Memberships, and Users</p>
            </Link>
          </li>
          
          <li className="nav-card">
            <Link to="/reports">
              <div className="icon">📊</div>
              <h3>Reports</h3>
              <p>View Master Lists and Overdue Returns</p>
            </Link>
          </li>
          
          <li className="nav-card">
            <Link to="/transactions">
              <div className="icon">🔄</div>
              <h3>Transactions</h3>
              <p>Handle Book Issues, Returns, and Fines</p>
            </Link>
          </li>
        </ul>
      </nav>

      <footer className="dashboard-footer">
          <Link to="/" className="logout-btn">Log Out</Link>
      </footer>
    </div>
  );
}

export default AdminHome;