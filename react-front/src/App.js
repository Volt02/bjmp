import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

function FrontPage() {
  const navigate = useNavigate();
  return (
    <div className="front-page-bg">
      <div className="centered-content">
        <h1 className="main-title">tite+hotdog</h1>
        <div className="button-group">
          <button className="main-btn" onClick={() => navigate('/jail-booking-report')}>Jail Booking Report</button>
          <button className="main-btn" onClick={() => navigate('/pdl-health-record')}>PDL Health Record</button>
        </div>
      </div>
    </div>
  );
}

function JailBookingReport() {
  return (
    <div className="blank-page">
      <h2>Jail Booking Report</h2>
    </div>
  );
}

function PDLHealthRecord() {
  return (
    <div className="blank-page">
      <h2>PDL Health Record</h2>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/jail-booking-report" element={<JailBookingReport />} />
        <Route path="/pdl-health-record" element={<PDLHealthRecord />} />
      </Routes>
    </Router>
  );
}

export default App;
