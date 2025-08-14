 import React from 'react';
import '../css/hr_info.css';

// Stateless, wizard-compatible HR Info step
function HRInfo({ values = {}, onChange, onSubmit }) {
  // Handler to update wizard state for all fields
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    // Handle nested finalRemarks checkboxes
    if (name.startsWith('finalRemarks.')) {
      const key = name.split('.')[1];
      onChange && onChange({
        ...values,
        finalRemarks: {
          ...(values.finalRemarks || {}),
          [key]: checked
        }
      });
    } else {
      onChange && onChange({
        ...values,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={onSubmit} autoComplete="off">
        {/* Final Remarks & Confidential Section */}
        <div className="final-remarks-section">
          <div style={{ flex: 1 }}>
            <h3 className="final-remarks-title">
              <span className="final-remarks-accent"></span>
              Final Remarks
            </h3>
            <div className="final-remarks-options">
              {['release', 'transfer', 'death'].map(remark => (
                <label key={remark} className="remark-option">
                  <input
                    type="checkbox"
                    name={`finalRemarks.${remark}`}
                    checked={values.finalRemarks && values.finalRemarks[remark]}
                    onChange={handleChange}
                    className="remark-checkbox"
                  />
                  <span className="remark-label">{remark}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="confidential-notice">
            CONFIDENTIAL - Authorized Health Personnel only
          </div>
        </div>

        {/* Personal Information Section */}
        <div style={{ marginBottom: '40px' }}>
          <h3 className="section-title">
            <div className="section-accent"></div>
            Personal Information
          </h3>
          <div className="form-grid">
            {/* Name Fields */}
            <div className="name-grid">
              <div>
                <label className="form-label">Surname</label>
                <input type="text" name="surname" value={values.surname || ''} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">First Name</label>
                <input type="text" name="firstName" value={values.firstName || ''} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Middle Name</label>
                <input type="text" name="middleName" value={values.middleName || ''} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">AKA</label>
                <input type="text" name="aka" value={values.aka || ''} onChange={handleChange} className="form-input" placeholder="Also Known As" />
              </div>
            </div>
            {/* Sex and Age */}
            <div>
              <label className="form-label">Sex</label>
              <div className="radio-group">
                {['M', 'F'].map(sex => (
                  <label key={sex} className="radio-option">
                    <input
                      type="radio"
                      name="sex"
                      value={sex}
                      checked={values.sex === sex}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    <span>{sex}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="form-label">Age</label>
              <input type="number" name="age" value={values.age || ''} onChange={handleChange} className="form-input" />
            </div>
            {/* Civil Status and Education */}
            <div>
              <label className="form-label">
                Civil Status <span className="form-label-hint">(single/married/widow/others, specify)</span>
              </label>
              <input type="text" name="civilStatus" value={values.civilStatus || ''} onChange={handleChange} className="form-input" />
            </div>
            <div>
              <label className="form-label">
                Educational Attainment <span className="form-label-hint">(grade/year/degree)</span>
              </label>
              <input type="text" name="educationalAttainment" value={values.educationalAttainment || ''} onChange={handleChange} className="form-input" />
            </div>
            {/* Date of Birth */}
            <div>
              <label className="form-label">Date of Birth</label>
              <input type="date" name="dateOfBirth" value={values.dateOfBirth || ''} onChange={handleChange} className="form-input" />
            </div>
            {/* Place of Birth */}
            <div className="place-of-birth-grid">
              <div>
                <label className="form-label">Municipality/City</label>
                <input type="text" name="municipality" value={values.municipality || ''} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Province</label>
                <input type="text" name="province" value={values.province || ''} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Region</label>
                <input type="text" name="region" value={values.region || ''} onChange={handleChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Country</label>
                <input type="text" name="country" value={values.country || ''} onChange={handleChange} className="form-input" />
              </div>
            </div>
          </div>
        </div>

        {/* Commitment Information Section */}
        <div style={{ marginBottom: '40px' }}>
          <h3 className="section-title">
            <div className="section-accent"></div>
            Commitment Information
          </h3>
          <div className="form-grid">
            <div>
              <label className="form-label">Date of Commitment</label>
              <input type="date" name="dateOfCommitment" value={values.dateOfCommitment || ''} onChange={handleChange} className="form-input" />
            </div>
            <div>
              <label className="form-label">Name of Jail</label>
              <input type="text" name="nameOfJail" value={values.nameOfJail || ''} onChange={handleChange} className="form-input" />
            </div>
            <div>
              <label className="form-label">Origin Lock-up</label>
              <input type="text" name="originLockup" value={values.originLockup || ''} onChange={handleChange} className="form-input" />
            </div>
            <div>
              <label className="form-label">PhilHealth No.</label>
              <input type="text" name="philHealthNo" value={values.philHealthNo || ''} onChange={handleChange} className="form-input" />
            </div>
          </div>
        </div>

        {/* Case and Contact Information Section */}
        <div style={{ marginBottom: '40px' }}>
          <h3 className="section-title">
            <div className="section-accent"></div>
            Case and Contact Information
          </h3>
          <div className="form-grid">
            <div>
              <label className="form-label">Case</label>
              <input type="text" name="case" value={values.case || ''} onChange={handleChange} className="form-input" />
            </div>
            <div>
              <label className="form-label">Case No.</label>
              <input type="text" name="caseNo" value={values.caseNo || ''} onChange={handleChange} className="form-input" />
            </div>
            <div>
              <label className="form-label">Name of Contact Person</label>
              <input type="text" name="contactPerson" value={values.contactPerson || ''} onChange={handleChange} className="form-input" />
            </div>
            <div>
              <label className="form-label">Relationship</label>
              <input type="text" name="relationship" value={values.relationship || ''} onChange={handleChange} className="form-input" />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label className="form-label">Address of Contact Person</label>
              <input type="text" name="contactAddress" value={values.contactAddress || ''} onChange={handleChange} className="form-input" />
            </div>
            <div>
              <label className="form-label">Phone / Email</label>
              <input type="text" name="contactPhone" value={values.contactPhone || ''} onChange={handleChange} className="form-input" />
            </div>
          </div>
        </div>

        {/* Photo Section */}
        <div style={{ marginBottom: '40px' }}>
          <h3 className="section-title">
            <div className="section-accent"></div>
            Photo of PDL
          </h3>
          <div className="photo-upload-area">
            <div className="photo-content">
              <div className="photo-icon">📷</div>
              <div className="photo-text">Click to upload photo</div>
              <div className="photo-subtext">or drag and drop</div>
            </div>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(112, 145, 230, 0.05) 0%, rgba(173, 187, 212, 0.05) 100%)',
              opacity: 0,
              transition: 'opacity 0.3s ease'
            }}></div>
          </div>
        </div>

  {/* Submit Button removed as requested */}
      </form>
    </div>
  );
}

export default HRInfo;