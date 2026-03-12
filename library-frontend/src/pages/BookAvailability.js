import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function BookAvailability() {
  const [searchName, setSearchName] = useState('');
  const [searchAuthor, setSearchAuthor] = useState('');
  const [results, setResults] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    // Mock logic: If "Science" is selected, show it is available
    if (searchName === "Science") {
      setResults({ status: "Available", serial: "SC001", location: "Shelf A1" });
    } else {
      setResults({ status: "Not Found", serial: "-", location: "-" });
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Is Book Available?</h2>
        <form onSubmit={handleSearch}>
          <div className="form-group">
            <label>Enter Book Name (Drop Down)</label>
            <select value={searchName} onChange={(e) => setSearchName(e.target.value)} required>
              <option value="">--Select Book--</option>
              <option value="Science">Science</option>
              <option value="Economics">Economics</option>
              <option value="Fiction">Fiction</option>
            </select>
          </div>
          <div className="form-group">
            <label>Enter Author (Drop Down)</label>
            <select value={searchAuthor} onChange={(e) => setSearchAuthor(e.target.value)} required>
              <option value="">--Select Author--</option>
              <option value="Dr. Smith">Dr. Smith</option>
              <option value="Prof. Jones">Prof. Jones</option>
            </select>
          </div>
          <button type="submit">Search Availability</button>
        </form>

        {results && (
          <div className="mt-20" style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '4px' }}>
            <p><strong>Status:</strong> <span style={{ color: results.status === 'Available' ? 'green' : 'red' }}>{results.status}</span></p>
            <p><strong>Serial No:</strong> {results.serial}</p>
            <p><strong>Location:</strong> {results.location}</p>
          </div>
        )}
        <Link to="/transactions" style={{ display: 'block', marginTop: '10px' }}>Back</Link>
      </div>
    </div>
  );
}

export default BookAvailability;