import React from 'react';
import { Link } from 'react-router-dom';

function Transactions() {
  return (
    <div className="full-page-wrapper">
      <div className="container dashboard-container">
        <header className="dashboard-header">
          <h2>Transactions Module</h2>
          <Link to="/user-home" className="logout-btn" style={{backgroundColor: '#7f8c8d'}}>Back</Link>
        </header>
        
        <ul className="dashboard-nav">
          <li className="nav-card">
            <Link to="/book-availability">
              <div className="icon">🔍</div>
              <h3>Book Availability</h3>
              <p>Search books by Name or Author</p>
            </Link>
          </li>
          <li className="nav-card">
            <Link to="/book-issue">
              <div className="icon">📖</div>
              <h3>Issue Book</h3>
              <p>Request a book for 15 days</p>
            </Link>
          </li>
          <li className="nav-card">
            <Link to="/return-book">
              <div className="icon">📥</div>
              <h3>Return Book</h3>
              <p>Submit your borrowed books</p>
            </Link>
          </li>
          <li className="nav-card">
            <Link to="/pay-fine">
              <div className="icon">💰</div>
              <h3>Pay Fine</h3>
              <p>Clear your pending penalties</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Transactions;