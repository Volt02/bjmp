
import React from 'react';
import '../css/jbr_info.css';

function JBRParentInfo({ values = {}, onChange }) {
  const formData = values;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (onChange) onChange({ ...formData, [name]: value });
  };

  return (
    <div className="form-container">
      <h3 className="section-title"><span className="section-accent"></span>Parent Information</h3>
      <div className="form-grid">
        <div>
          <label className="form-label">Father</label>
          <input type="text" name="fatherName" value={formData.fatherName || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Mother</label>
          <input type="text" name="motherName" value={formData.motherName || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Place of Birth (Father)</label>
          <input type="text" name="fatherPlaceOfBirth" value={formData.fatherPlaceOfBirth || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Place of Birth (Mother)</label>
          <input type="text" name="motherPlaceOfBirth" value={formData.motherPlaceOfBirth || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Occupation (Father)</label>
          <input type="text" name="fatherOccupation" value={formData.fatherOccupation || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Occupation (Mother)</label>
          <input type="text" name="motherOccupation" value={formData.motherOccupation || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Father's Address</label>
          <input type="text" name="fatherAddress" value={formData.fatherAddress || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Mother's Address</label>
          <input type="text" name="motherAddress" value={formData.motherAddress || ''} onChange={handleInputChange} className="form-input" />
        </div>
      </div>
    </div>
  );
}

export default JBRParentInfo;