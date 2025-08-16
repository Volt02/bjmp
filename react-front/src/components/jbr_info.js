
import React from 'react';
// import { useNavigate } from 'react-router-dom';
import '../css/jbr_info.css';

function JailBookingInfo({ values = {}, onChange }) {
  const formData = values;
  // const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (onChange) onChange({ ...formData, [name]: value });
  };

  return (
    <div className="form-container">
  {/* Removed internal Back button; handled by wizard */}
      <h3 className="section-title"><span className="section-accent"></span>Personal Information</h3>
      <div className="form-grid">
        <div>
          <label className="form-label">Last Name</label>
          <input type="text" name="lastName" value={formData.lastName || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">First Name</label>
          <input type="text" name="firstName" value={formData.firstName || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Middle Name</label>
          <input type="text" name="middleName" value={formData.middleName || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Alias/Nickname</label>
          <input type="text" name="alias" value={formData.alias || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <label className="form-label">Present Address</label>
          <input type="text" name="presentAddress" value={formData.presentAddress || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <label className="form-label">City/Provincial Address</label>
          <input type="text" name="cityProvincialAddress" value={formData.cityProvincialAddress || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Telephone No/s</label>
          <input
            type="text"
            name="telephone"
            value={formData.telephone || ''}
            onChange={e => {
              // Only allow up to 12 digits
              let val = e.target.value.replace(/[^0-9]/g, '');
              if (val.length > 12) val = val.slice(0, 12);
              handleInputChange({ target: { name: 'telephone', value: val } });
            }}
            className="form-input"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={12}
            placeholder="Up to 12 digits"
          />
        </div>
        <div>
          <label className="form-label">Date of Birth</label>
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Place of Birth</label>
          <input type="text" name="placeOfBirth" value={formData.placeOfBirth || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Occupation</label>
          <input type="text" name="occupation" value={formData.occupation || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Nearest Relative</label>
          <input type="text" name="nearestRelative" value={formData.nearestRelative || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <label className="form-label">Address of Relative</label>
          <input type="text" name="addressOfRelative" value={formData.addressOfRelative || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Citizenship</label>
          <input type="text" name="citizenship" value={formData.citizenship || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">No. of Children</label>
          <input type="number" name="noOfChildren" value={formData.noOfChildren || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Husband/Wife</label>
          <input type="text" name="husbandWife" value={formData.husbandWife || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Occupation (Spouse)</label>
          <input type="text" name="spouseOccupation" value={formData.spouseOccupation || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Address (Spouse)</label>
          <input type="text" name="spouseAddress" value={formData.spouseAddress || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Place of Birth (Spouse)</label>
          <input type="text" name="spousePlaceOfBirth" value={formData.spousePlaceOfBirth || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <label className="form-label">GSIS/SSS/PAG-IBIG/TAN/TIN/CTC No</label>
          <input type="text" name="govIds" value={formData.govIds || ''} onChange={handleInputChange} className="form-input" />
        </div>
      </div>

      <h3 className="section-title"><span className="section-accent"></span>Physical & Demographic Information</h3>
      <div className="form-grid">
        <div>
          <label className="form-label">Civil Status</label>
          <input type="text" name="civilStatus" value={formData.civilStatus || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Prison No</label>
          <input type="text" name="prisonNo" value={formData.prisonNo || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Sex</label>
          <select name="sex" value={formData.sex || ''} onChange={handleInputChange} className="form-input">
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label className="form-label">Age</label>
          <input type="number" name="age" value={formData.age || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Race</label>
          <input type="text" name="race" value={formData.race || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Hair</label>
          <input type="text" name="hair" value={formData.hair || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Height</label>
          <input type="text" name="height" value={formData.height || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Weight</label>
          <input type="text" name="weight" value={formData.weight || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Eyes</label>
          <input type="text" name="eyes" value={formData.eyes || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Blood Type</label>
          <input type="text" name="bloodType" value={formData.bloodType || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Complexion</label>
          <input type="text" name="complexion" value={formData.complexion || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Build</label>
          <input type="text" name="build" value={formData.build || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <label className="form-label">Religion</label>
          <input type="text" name="religion" value={formData.religion || ''} onChange={handleInputChange} className="form-input" />
        </div>
      </div>

      <h3 className="section-title"><span className="section-accent"></span>Other Information</h3>
      <div className="form-grid">
        <div>
          <label className="form-label">Dialect Spoken</label>
          <input type="text" name="dialectSpoken" value={formData.dialectSpoken || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Highest Educ'l Attainment</label>
          <input type="text" name="education" value={formData.education || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Skill/s</label>
          <input type="text" name="skills" value={formData.skills || ''} onChange={handleInputChange} className="form-input" />
        </div>
        <div>
          <label className="form-label">Gang Affiliation</label>
          <input type="text" name="gangAffiliation" value={formData.gangAffiliation || ''} onChange={handleInputChange} className="form-input" />
        </div>
      </div>
    </div>
  );
}

export default JailBookingInfo;