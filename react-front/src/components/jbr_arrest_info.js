import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/jbr_info.css';

function JBRArrestInfo({ onChange, values }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState(values || {
    placeOfArrest: '',
    timeDateOfArrest: '',
    arrestingOfficer: '',
    circumstances: '',
    timeDateReceived: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    if (onChange) onChange(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log('Arrest Info submitted:', formData);
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar Navigation */}
      <div className="jbr-info-sidebar">
        <button
          className={`tab-button${location.pathname === '/jbr-info' ? ' active' : ''}`}
          onClick={() => navigate('/jbr-info')}
        >
          Jail Booking Report
        </button>
        <button
          className={`tab-button${location.pathname === '/jbr-offenses' ? ' active' : ''}`}
          onClick={() => navigate('/jbr-offenses')}
        >
          Offenses
        </button>
        <button
          className={`tab-button${location.pathname === '/jbr-parent' ? ' active' : ''}`}
          onClick={() => navigate('/jbr-parent')}
        >
          Parent Information
        </button>
        <button
          className={`tab-button${location.pathname === '/jbr-arrest-info' ? ' active' : ''}`}
          onClick={() => navigate('/jbr-arrest-info')}
        >
          Apprehension Data
        </button>
        <button
          className={`tab-button${location.pathname === '/jbr-criminal-records' ? ' active' : ''}`}
          onClick={() => navigate('/jbr-criminal-records')}
        >
          Criminal Records
        </button>
      </div>
      {/* Main Content */}
      <div className="jbr-container" style={{ flex: 1 }}>
        <button onClick={() => navigate('/')} className="back-button">← Back</button>
        <div className="header-container">
          <div className="header-card">
            <h1 className="main-title">BUREAU OF JAIL MANAGEMENT AND PENOLOGY</h1>
            <div className="sub-title">JAIL BOOKING REPORT</div>
          </div>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h3 className="section-title"><span className="section-accent"></span>Apprehension Data</h3>
            <div className="form-grid">
              <div>
                <label className="form-label">Place of Arrest</label>
                <input type="text" name="placeOfArrest" value={formData.placeOfArrest} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Time and Date of Arrest</label>
                <input type="text" name="timeDateOfArrest" value={formData.timeDateOfArrest} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Arresting Officer/Unit</label>
                <input type="text" name="arrestingOfficer" value={formData.arrestingOfficer} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Circumstances Surrounding Arrest</label>
                <input type="text" name="circumstances" value={formData.circumstances} onChange={handleInputChange} className="form-input" />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Time and Date Received for Confinement</label>
                <input type="text" name="timeDateReceived" value={formData.timeDateReceived} onChange={handleInputChange} className="form-input" />
              </div>
            </div>
            <div className="submit-button-container">
              <button type="submit" className="submit-button">
                <span className="submit-button-text">Save Apprehension Data</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default JBRArrestInfo;