import React from 'react';
import { Link } from 'react-router-dom';

function ActiveIssues() {
  // Mock data based on your Report columns
  const activeIssuesData = [
    { serial: "SC001", name: "Science Vol 1", memberId: "M001", issueDate: "2026-03-01", returnDate: "2026-03-16" },
    { serial: "FC004", name: "Fiction Novel", memberId: "M025", issueDate: "2026-03-05", returnDate: "2026-03-20" },
  ];

  return (
    <div className="container dashboard-container">
      <h2>Active Issues Report</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#3498db', color: 'white' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Serial No</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Name of Book/Movie</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Membership Id</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Date of Issue</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Date of Return</th>
          </tr>
        </thead>
        <tbody>
          {activeIssuesData.map((item, index) => (
            <tr key={index} style={{ textAlign: 'center' }}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.serial}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.name}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.memberId}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.issueDate}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.returnDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-20">
        <Link to="/reports" className="logout-btn" style={{ backgroundColor: '#7f8c8d' }}>Back to Reports</Link>
      </div>
    </div>
  );
}

export default ActiveIssues;