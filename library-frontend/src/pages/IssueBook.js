import React, { useState, useEffect } from 'react';

function IssueBook() {
  const [issueDate, setIssueDate] = useState(new Date().toISOString().split('T')[0]);
  const [returnDate, setReturnDate] = useState('');

  useEffect(() => {
    // Logic: Automatically populate return date 15 days ahead
    const date = new Date(issueDate);
    date.setDate(date.getDate() + 15);
    setReturnDate(date.toISOString().split('T')[0]);
  }, [issueDate]);

  return (
    <div className="container">
  <div className="form-container">
    <h2>Issue a Book</h2>
    <form>
      <div className="form-group">
        <label>Book Name</label>
        <select required>...</select>
      </div>
      <div className="form-group">
        <label>Issue Date</label>
        <input type="date" value={issueDate}  />
      </div>
      <div className="form-group">
        <label>Return Date (Auto 15 Days)</label>
        <input type="date" value={returnDate} readOnly />
      </div>
      <button type="submit">Confirm Transaction</button>
    </form>
  </div>
</div>
  );
}

export default IssueBook;