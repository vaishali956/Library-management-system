const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Route to Issue a Book
router.post('/issue', async (req, res) => {
  const { bookId, userId, issueDate } = req.body;

  try {
    // Calculate Return Date (15 days from Issue Date)
    const iDate = new Date(issueDate);
    const rDate = new Date(iDate);
    rDate.setDate(rDate.getDate() + 15);

    // In a real app, you would save this to a 'Transactions' collection
    res.json({
      message: "Book issued successfully",
      issueDate: iDate.toISOString().split('T')[0],
      returnDate: rDate.toISOString().split('T')[0]
    });
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;