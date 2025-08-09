import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/jbr_info.css';
import '../css/jbr_offenses.css';


function JBROffenses({ onChange, values }) {
  const navigate = useNavigate();
  const location = useLocation();
  // Each row: { caseNo: '', offense: '' }
  const [rows, setRows] = useState(
    values?.rows && values.rows.length > 0
      ? values.rows
      : [{ caseNo: '', offense: '' }]
  );
  const [courtOfOrigin, setCourtOfOrigin] = useState(values?.courtOfOrigin || '');

  const handleRowChange = (idx, field, value) => {
    const updated = rows.map((row, i) => i === idx ? { ...row, [field]: value } : row);
    setRows(updated);
    if (onChange) onChange({ rows: updated, courtOfOrigin });
  };

  const addRow = () => {
    setRows([...rows, { caseNo: '', offense: '' }]);
  };

  const deleteRow = (idx) => {
    if (rows.length === 1) return;
    const updated = rows.filter((_, i) => i !== idx);
    setRows(updated);
    if (onChange) onChange({ rows: updated, courtOfOrigin });
  };

  const handleCourtChange = (e) => {
    setCourtOfOrigin(e.target.value);
    if (onChange) onChange({ rows, courtOfOrigin: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log('Offenses submitted:', { rows, courtOfOrigin });
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
            <div className="jbr-offenses-dynamic-rows">
              {rows.map((row, idx) => (
                <div key={idx} className="jbr-offenses-row">
                  <div className="jbr-offenses-row-col">
                    <label className="form-label">Crim. Case No. {`(${String.fromCharCode(97 + idx)})`.toUpperCase()}</label>
                    <input
                      type="text"
                      name={`crimCaseNo${String.fromCharCode(65 + idx)}`}
                      value={row.caseNo}
                      onChange={e => handleRowChange(idx, 'caseNo', e.target.value)}
                      className="form-input"
                    />
                  </div>
                  <div className="jbr-offenses-row-col">
                    <label className="form-label">Offense Charged {`(${String.fromCharCode(97 + idx)})`.toUpperCase()}</label>
                    <input
                      type="text"
                      name={`offense${String.fromCharCode(65 + idx)}`}
                      value={row.offense}
                      onChange={e => handleRowChange(idx, 'offense', e.target.value)}
                      className="form-input"
                    />
                  </div>
                  {rows.length > 1 && (
                    <button
                      type="button"
                      className="jbr-offenses-delete-btn"
                      onClick={() => deleteRow(idx)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                className="jbr-offenses-add-btn"
                onClick={addRow}
              >
                + Add Crim. Case No.
              </button>
            </div>
            {/* Offense Charged fields are now per row above */}
            <div style={{ marginBottom: '40px' }}>
              <label className="form-label">Court of Origin</label>
              <input type="text" name="courtOfOrigin" value={courtOfOrigin} onChange={handleCourtChange} className="form-input" />
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
