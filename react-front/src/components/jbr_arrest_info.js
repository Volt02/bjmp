
import React from 'react';
import '../css/jbr_info.css';

function JBRArrestInfo({ values = {}, onChange }) {
  const formData = values;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (onChange) onChange({ ...formData, [name]: value });
  };

  return (
    <div className="form-container">
      <h3 className="section-title"><span className="section-accent"></span>Apprehension Data</h3>
      <div className="form-grid">
        <div>
          <label className="form-label">Place of Arrest</label>
          <input type="text" name="placeOfArrest" value={formData.placeOfArrest || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Time and Date of Arrest</label>
          <input type="datetime-local" name="timeDateOfArrest" value={formData.timeDateOfArrest || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Arresting Officer/Unit</label>
          <input type="text" name="arrestingOfficer" value={formData.arrestingOfficer || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Circumstances Surrounding Arrest</label>
          <input type="text" name="circumstances" value={formData.circumstances || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <label className="form-label">Time and Date Received for Confinement</label>
          <input type="datetime-local" name="timeDateReceived" value={formData.timeDateReceived || ''} onChange={handleInputChange} className="form-input" />
        </div>
      </div>
    </div>
  );
}

export default JBRArrestInfo;