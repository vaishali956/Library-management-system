import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BookIssue() {
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [issueDate, setIssueDate] = useState(new Date().toISOString().split('T')[0]);
  const [returnDate, setReturnDate] = useState('');

  // Auto-populate Author and Return Date
  useEffect(() => {
    if (bookName === 'Science') setAuthor('Dr. Smith');
    if (bookName === 'History') setAuthor('Prof. Jones');
    
    const date = new Date(issueDate);
    date.setDate(date.getDate() + 15);
    setReturnDate(date.toISOString().split('T')[0]);
  }, [bookName, issueDate]);

  return (
    <div className="container">
      <div className="form-container">
        <h2>Issue Book Form</h2>
        <div className="form-group">
          <label>Enter Book Name (Required)</label>
          <select value={bookName} onChange={(e) => setBookName(e.target.value)} required>
            <option value="">--Select Book--</option>
            <option value="Science">Science</option>
            <option value="History">History</option>
          </select>
        </div>
        <div className="form-group">
          <label>Enter Author (Non-Editable)</label>
          <input type="text" value={author} readOnly />
        </div>
        <div className="form-group">
          <label>Issue Date</label>
          <input type="date" value={issueDate} min={new Date().toISOString().split('T')[0]} onChange={(e) => setIssueDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Return Date (Max 15 Days)</label>
          <input type="date" value={returnDate} readOnly />
        </div>
        <button onClick={() => alert('Book Issued!')}>Confirm Issue</button>
        <Link to="/transactions" style={{display:'block', marginTop:'10px'}}>Back</Link>
      </div>
    </div>
  );
}

export default BookIssue;