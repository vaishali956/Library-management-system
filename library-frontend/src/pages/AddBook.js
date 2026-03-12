import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AddBook() {
  const [type, setType] = useState('Book'); // Default: Book
  const [name, setName] = useState('');
  const [procurementDate, setProcurementDate] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !procurementDate || !quantity) {
      alert("Error: Please enter all details before confirming.");
      return;
    }
    alert(`${type} Added Successfully!`);
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Add Book/Movie</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Select Type:</label>
            <input type="radio" checked={type === 'Book'} onChange={() => setType('Book')} /> Book
            <input type="radio" checked={type === 'Movie'} onChange={() => setType('Movie')} style={{marginLeft:'20px'}} /> Movie
          </div>
          <div className="form-group">
            <label>Book/Movie Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Date of Procurement</label>
            <input type="date" value={procurementDate} onChange={(e) => setProcurementDate(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Quantity/Copies</label>
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
          </div>
          <button type="submit">Add Item</button>
        </form>
        <Link to="/maintenance" style={{display:'block', marginTop:'15px'}}>Back</Link>
      </div>
    </div>
  );
}

export default AddBook;