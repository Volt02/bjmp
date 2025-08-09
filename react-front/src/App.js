import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import PDLHealthRecord from './components/hr_info';
import JailBookingInfo from './components/jbr_info';
import JBROffenses from './components/jbr_offenses';
import JBRParentInfo from './components/jbr_parent';
import JBRArrestInfo from './components/jbr_arrest_info';
import JBRCriminalRecords from './components/jbr_criminal_records';

function FrontPage() {
  const navigate = useNavigate();
  return (
    <div className="front-page-bg">
      <div className="centered-content">
        <h1 className="main-title">panget</h1>
        <div className="button-group">
          <button className="main-btn" onClick={() => navigate('/jbr-info')}>Jail Booking Report</button>
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
        <Route path="/jbr-info" element={<JailBookingInfo />} />
        <Route path="/jbr-offenses" element={<JBROffenses />} />
        <Route path="/jbr-criminal-records" element={<JBRCriminalRecords />} />
        <Route path="/jbr-parent" element={<JBRParentInfo />} />
        <Route path="/jbr-arrest-info" element={<JBRArrestInfo />} />
        <Route path="/pdl-health-record" element={<PDLHealthRecord />} />
      </Routes>
    </Router>
  );
}

export default App;
