const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// Routes
app.use('/api/transactions', require('./routes/transactions'));


app.post('/api/login', (req, res) => {
  const { userId, password } = req.body;
  
  
  console.log("Login attempt received:", userId, password);

 
  if (userId === 'adm' && password === 'adm') {
    console.log("Admin login success");
    return res.json({ role: 'admin' });
  } else if (userId === 'user' && password === 'user') {
    console.log("User login success");
    return res.json({ role: 'user' });
  } else {
    console.log("Login failed: Invalid credentials");
    return res.status(401).json({ message: "Invalid Credentials" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
