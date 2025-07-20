import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import JailBookingReport from './components/JailBookingReport';
import PDLHealthRecord from './components/hr_info';

function FrontPage() {
  const navigate = useNavigate();
  return (
    <div className="front-page-bg">
      <div className="centered-content">
        <h1 className="main-title">panget</h1>
        <div className="button-group">
          <button className="main-btn" onClick={() => navigate('/jail-booking-report')}>Jail Booking Report</button>
          <button className="main-btn" onClick={() => navigate('/pdl-health-record')}>PDL Health Record</button>
        </div>
      </div>
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
