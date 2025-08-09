import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/jbr_info.css';

function JBRParentInfo({ onChange, values }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState(values || {
    fatherName: '',
    fatherPlaceOfBirth: '',
    fatherOccupation: '',
    fatherAddress: '',
    motherName: '',
    motherPlaceOfBirth: '',
    motherOccupation: '',
    motherAddress: '',
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
    console.log('Parent Info submitted:', formData);
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
            <h3 className="section-title"><span className="section-accent"></span>Parent Information</h3>
            <div className="form-grid">
              <div>
                <label className="form-label">Father</label>
                <input type="text" name="fatherName" value={formData.fatherName} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Mother</label>
                <input type="text" name="motherName" value={formData.motherName} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Place of Birth (Father)</label>
                <input type="text" name="fatherPlaceOfBirth" value={formData.fatherPlaceOfBirth} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Place of Birth (Mother)</label>
                <input type="text" name="motherPlaceOfBirth" value={formData.motherPlaceOfBirth} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Occupation (Father)</label>
                <input type="text" name="fatherOccupation" value={formData.fatherOccupation} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Occupation (Mother)</label>
                <input type="text" name="motherOccupation" value={formData.motherOccupation} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Father's Address</label>
                <input type="text" name="fatherAddress" value={formData.fatherAddress} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Mother's Address</label>
                <input type="text" name="motherAddress" value={formData.motherAddress} onChange={handleInputChange} className="form-input" />
              </div>
            </div>
            <div className="submit-button-container">
              <button type="submit" className="submit-button">
                <span className="submit-button-text">Save Parent Information</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default JBRParentInfo;