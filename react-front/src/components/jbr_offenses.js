import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/jbr_info.css';
import '../css/jbr_offenses.css';

function JBROffenses({ onChange, values }) {
  const navigate = useNavigate();
  const location = useLocation();
  // If parent does not provide state, use local state
  const [formData, setFormData] = useState(values || {
    crimCaseNoA: '',
    crimCaseNoB: '',
    crimCaseNoC: '',
    offenseA: '',
    offenseB: '',
    offenseC: '',
    courtOfOrigin: '',
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
    console.log('Offenses submitted:', formData);
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar Navigation */}
      <div className="jbr-offenses-sidebar">
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
            <h3 className="section-title"><span className="section-accent"></span>Offenses</h3>
            <div className="form-grid">
              <div>
                <label className="form-label">Crim. Case No. (a)</label>
                <input type="text" name="crimCaseNoA" value={formData.crimCaseNoA} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Crim. Case No. (b)</label>
                <input type="text" name="crimCaseNoB" value={formData.crimCaseNoB} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Crim. Case No. (c)</label>
                <input type="text" name="crimCaseNoC" value={formData.crimCaseNoC} onChange={handleInputChange} className="form-input" />
              </div>
            </div>
            <div className="form-grid">
              <div>
                <label className="form-label">Offense Charged (a)</label>
                <input type="text" name="offenseA" value={formData.offenseA} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Offense Charged (b)</label>
                <input type="text" name="offenseB" value={formData.offenseB} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Offense Charged (c)</label>
                <input type="text" name="offenseC" value={formData.offenseC} onChange={handleInputChange} className="form-input" />
              </div>
            </div>
            <div style={{ marginBottom: '40px' }}>
              <label className="form-label">Court of Origin</label>
              <input type="text" name="courtOfOrigin" value={formData.courtOfOrigin} onChange={handleInputChange} className="form-input" />
            </div>
            <div className="submit-button-container">
              <button type="submit" className="submit-button">
                <span className="submit-button-text">Save Offenses</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default JBROffenses;
