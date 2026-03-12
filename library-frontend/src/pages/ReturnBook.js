import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ReturnBook() {
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [serialNo, setSerialNo] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [returnDate, setReturnDate] = useState(new Date().toISOString().split('T')[0]);
  const [remarks, setRemarks] = useState('');
  
  const navigate = useNavigate();

  // Logic: Automatically populate Author and Issue Date based on Book/Serial
  useEffect(() => {
    if (bookName === 'Science' && serialNo === 'SC001') {
      setAuthor('Dr. Smith');
      setIssueDate('2026-03-01');
    } else if (bookName === 'History' && serialNo === 'HS005') {
      setAuthor('Prof. Jones');
      setIssueDate('2026-02-25');
    } else {
      setAuthor('');
      setIssueDate('');
    }
  }, [bookName, serialNo]);

  const handleConfirm = (e) => {
    e.preventDefault();
    
    // Validation based on Instruction 10
    if (!bookName || !serialNo) {
      alert("Error: Please select Book Name and Serial Number.");
      return;
    }

    // Per Instruction: Confirm option takes user to the Pay Fine page
    navigate('/pay-fine');
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Return Book Form</h2>
        <form onSubmit={handleConfirm}>
          
          <div className="form-group">
            <label>Name of Book (Required - Drop Down)</label>
            <select value={bookName} onChange={(e) => setBookName(e.target.value)} required>
              <option value="">--Select Book--</option>
              <option value="Science">Science</option>
              <option value="History">History</option>
            </select>
          </div>

          <div className="form-group">
            <label>Author Name (Automatically populated - Non Editable)</label>
            <input type="text" value={author} readOnly />
          </div>

          <div className="form-group">
            <label>Serial No (Mandatory - Drop Down)</label>
            <select value={serialNo} onChange={(e) => setSerialNo(e.target.value)} required>
              <option value="">--Select Serial No--</option>
              <option value="SC001">SC001</option>
              <option value="HS005">HS005</option>
            </select>
          </div>

          <div className="form-group">
            <label>Issue Date (Automatically populated - Non Editable)</label>
            <input type="date" value={issueDate} readOnly />
          </div>

          <div className="form-group">
            <label>Return Date (Editable)</label>
            <input 
              type="date" 
              value={returnDate} 
              onChange={(e) => setReturnDate(e.target.value)} 
              required
            />
          </div>

          <div className="form-group">
            <label>Remarks (Non-Mandatory)</label>
            <textarea 
              value={remarks} 
              onChange={(e) => setRemarks(e.target.value)} 
              placeholder="Any comments..."
            ></textarea>
          </div>

          <button type="submit">Confirm Return</button>
        </form>

        <Link to="/transactions" style={{ display: 'block', marginTop: '15px' }}>Back to Transactions</Link>
      </div>
    </div>
  );
}

export default ReturnBook;