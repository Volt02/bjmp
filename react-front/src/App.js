import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import PDLHealthRecord from './components/hr_info';
import HRWizard from './components/HRWizard';
import JailBookingInfo from './components/jbr_info';
import JBROffenses from './components/jbr_offenses';
import JBRParentInfo from './components/jbr_parent';
import JBRArrestInfo from './components/jbr_arrest_info';
import JBRCriminalRecords from './components/jbr_criminal_records';
import JBRWizard from './components/JBRWizard';

function FrontPage() {
  const navigate = useNavigate();
  return (
    <div className="front-page-bg">
      <div className="centered-content">
        <h1 className="main-title">panget123</h1>
        <div className="button-group">
          <button className="main-btn" onClick={() => navigate('/jbr-wizard')}>Jail Booking Report</button>
          <button className="main-btn" onClick={() => navigate('/pdl-health-wizard')}>PDL Health Record</button>
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
    <Route path="/jbr-wizard" element={<JBRWizard />} />
  <Route path="/pdl-health-record" element={<PDLHealthRecord />} />
  <Route path="/pdl-health-wizard" element={<HRWizard />} />
      </Routes>
    </Router>
  );
}

export default App;
