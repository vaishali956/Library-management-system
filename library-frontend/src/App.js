import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import UserHome from './pages/UserHome';
import AdminHome from './pages/AdminHome';
import Transactions from './pages/Transactions';
import Reports from './pages/Reports';
import BookAvailability from './pages/BookAvailability';
import BookIssue from './pages/BookIssue';
import ReturnBook from './pages/ReturnBook';
import PayFine from './pages/PayFine';
import ActiveIssues from './pages/ActiveIssues';
import Maintenance from './pages/Maintenance';
import AddBook from './pages/AddBook';
import AddMembership from './pages/AddMembership';
import UserManagement from './pages/UserManagement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user-home" element={<UserHome />} />
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/book-availability" element={<BookAvailability />} />
        <Route path="/book-issue" element={<BookIssue />} />
        <Route path="/return-book" element={<ReturnBook />} />
        <Route path="/pay-fine" element={<PayFine />} />
        <Route path="/active-issues" element={<ActiveIssues />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/add-membership" element={<AddMembership />} />
        <Route path="/user-management" element={<UserManagement />} />
      </Routes>
    </Router>
  );
}

export default App;