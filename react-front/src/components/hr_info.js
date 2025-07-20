import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InitialHealthAssessment from './hr_medical_history';
import PsychiatricHistory from './hr_psychiatric_history';
import DrugsHistory from './hr_drugs_history';
import PhysicalExamination from './hr_physical_examination';
import TBScreening from './hr_tb_screening';
import TBConclusion from './hr_tb_conclusion';
import '../css/hr_info.css';

function PDLHealthRecord() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('basic'); // 'basic', 'assessment', 'psychiatric', or 'drugs'
  const [formData, setFormData] = useState({
    surname: '',
    firstName: '',
    middleName: '',
    aka: '',
    sex: '',
    age: '',
    civilStatus: '',
    educationalAttainment: '',
    dateOfBirth: '',
    municipality: '',
    province: '',
    region: '',
    country: '',
    dateOfCommitment: '',
    nameOfJail: '',
    originLockup: '',
    philHealthNo: '',
    case: '',
    caseNo: '',
    contactPerson: '',
    relationship: '',
    contactAddress: '',
    contactPhone: '',
    finalRemarks: {
      release: false,
      transfer: false,
      death: false
    }
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        finalRemarks: {
          ...prev.finalRemarks,
          [name]: checked
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  // If assessment tab is active, render the InitialHealthAssessment component
  if (activeTab === 'assessment') {
    return <InitialHealthAssessment />;
  }

  // If psychiatric tab is active, render the PsychiatricHistory component
  if (activeTab === 'psychiatric') {
    return <PsychiatricHistory />;
  }

  // If drugs tab is active, render the DrugsHistory component
  if (activeTab === 'drugs') {
    return <DrugsHistory />;
  }

  // If physical tab is active, render the PhysicalExamination component
  if (activeTab === 'physical') {
    return <PhysicalExamination />;
  }

  // If TB Screening tab is active, render the TBScreening component
  if (activeTab === 'tb') {
    return <TBScreening />;
  }

  // If TB Conclusion tab is active, render the TBConclusion component
  if (activeTab === 'tb_conclusion') {
    return <TBConclusion />;
  }

  return (
    <div className="pdl-container">
      {/* Back Button */}
      <button 
        onClick={() => navigate('/')}
        className="back-button"
      >
        ← Back
      </button>

      {/* Header */}
      <div className="header-container">
        <div className="header-card">
          <h1 className="main-title">
            BUREAU OF JAIL MANAGEMENT AND PENOLOGY
          </h1>
          <h2 className="sub-title">
            PDL HEALTH RECORD
          </h2>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button
          onClick={() => setActiveTab('basic')}
          className={`tab-button ${activeTab === 'basic' ? 'active' : 'inactive'}`}
        >
          PDL Information
        </button>
        <button
          onClick={() => setActiveTab('assessment')}
          className={`tab-button ${activeTab === 'assessment' ? 'active' : 'inactive'}`}
        >
          Medical History
        </button>
        <button
          onClick={() => setActiveTab('psychiatric')}
          className={`tab-button ${activeTab === 'psychiatric' ? 'active' : 'inactive'}`}
        >
          Psychiatric History
        </button>
        <button
          onClick={() => setActiveTab('drugs')}
          className={`tab-button ${activeTab === 'drugs' ? 'active' : 'inactive'}`}
        >
          Substance Use History
        </button>
        <button
          onClick={() => setActiveTab('physical')}
          className={`tab-button ${activeTab === 'physical' ? 'active' : 'inactive'}`}
        >
          Physical Exam
        </button>
        <button
          onClick={() => setActiveTab('tb')}
          className={`tab-button ${activeTab === 'tb' ? 'active' : 'inactive'}`}
        >
          TB Screening
        </button>
        <button
          onClick={() => setActiveTab('tb_conclusion')}
          className={`tab-button ${activeTab === 'tb_conclusion' ? 'active' : 'inactive'}`}
        >
          TB Conclusion
        </button>
      </div>

      {/* Main Form Container */}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {/* Final Remarks Section */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '40px',
            padding: '24px',
            background: 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)',
            borderRadius: '16px',
            border: '1px solid rgba(134, 151, 196, 0.15)',
            boxShadow: '0 4px 20px rgba(61, 82, 160, 0.05)'
          }}>
            <div style={{ flex: 1 }}>
              <h3 style={{ 
                color: '#3D52A0', 
                marginBottom: '20px', 
                fontWeight: '600',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{
                  width: '4px',
                  height: '20px',
                  backgroundColor: '#7091E6',
                  borderRadius: '2px'
                }}></span>
                Final Remarks
              </h3>
              <div style={{ display: 'flex', gap: '24px' }}>
                {['release', 'transfer', 'death'].map(remark => (
                  <label key={remark} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    cursor: 'pointer',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                    backgroundColor: 'rgba(112, 145, 230, 0.05)'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(112, 145, 230, 0.1)'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'rgba(112, 145, 230, 0.05)'}>
                    <input
                      type="checkbox"
                      name={remark}
                      checked={formData.finalRemarks[remark]}
                      onChange={handleInputChange}
                      style={{ 
                        transform: 'scale(1.3)',
                        accentColor: '#3D52A0'
                      }}
                    />
                    <span style={{ 
                      textTransform: 'capitalize', 
                      fontWeight: '500',
                      color: '#3D52A0',
                      fontSize: '15px'
                    }}>
                      {remark}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, #3D52A0 0%, #7091E6 100%)',
              color: 'white',
              padding: '14px 20px',
              borderRadius: '12px',
              fontWeight: '600',
              fontSize: '14px',
              boxShadow: '0 4px 15px rgba(61, 82, 160, 0.3)',
              letterSpacing: '0.5px'
            }}>
              CONFIDENTIAL - Authorized Health Personnel only
            </div>
          </div>

          {/* Personal Information Section */}
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{
              color: '#3D52A0',
              paddingBottom: '12px',
              marginBottom: '24px',
              fontWeight: '600',
              fontSize: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                width: '6px',
                height: '24px',
                background: 'linear-gradient(135deg, #3D52A0 0%, #7091E6 100%)',
                borderRadius: '3px'
              }}></div>
              Personal Information
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {/* Name Fields */}
              <div style={{ gridColumn: '1 / -1', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Surname</label>
                  <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Middle Name</label>
                  <input
                    type="text"
                    name="middleName"
                    value={formData.middleName}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>AKA</label>
                  <input
                    type="text"
                    name="aka"
                    value={formData.aka}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Also Known As"
                  />
                </div>
              </div>

              {/* Sex and Age */}
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Sex</label>
                <div style={{ display: 'flex', gap: '20px' }}>
                  {['M', 'F'].map(sex => (
                    <label key={sex} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer'
                    }}>
                      <input
                        type="radio"
                        name="sex"
                        value={sex}
                        checked={formData.sex === sex}
                        onChange={handleInputChange}
                        style={{ transform: 'scale(1.2)' }}
                      />
                      <span>{sex}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              {/* Civil Status and Education */}
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                  Civil Status <span style={{ fontSize: '12px', color: '#666' }}>(single/married/widow/others, specify)</span>
                </label>
                <input
                  type="text"
                  name="civilStatus"
                  value={formData.civilStatus}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>
                  Educational Attainment <span style={{ fontSize: '12px', color: '#666' }}>(grade/year/degree)</span>
                </label>
                <input
                  type="text"
                  name="educationalAttainment"
                  value={formData.educationalAttainment}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              {/* Place of Birth */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Municipality/City</label>
                  <input
                    type="text"
                    name="municipality"
                    value={formData.municipality}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Province</label>
                  <input
                    type="text"
                    name="province"
                    value={formData.province}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Region</label>
                  <input
                    type="text"
                    name="region"
                    value={formData.region}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Commitment Information Section */}
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{
              color: '#3D52A0',
              paddingBottom: '12px',
              marginBottom: '24px',
              fontWeight: '600',
              fontSize: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                width: '6px',
                height: '24px',
                background: 'linear-gradient(135deg, #3D52A0 0%, #7091E6 100%)',
                borderRadius: '3px'
              }}></div>
              Commitment Information
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Date of Commitment</label>
                <input
                  type="date"
                  name="dateOfCommitment"
                  value={formData.dateOfCommitment}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Name of Jail</label>
                <input
                  type="text"
                  name="nameOfJail"
                  value={formData.nameOfJail}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Origin Lock-up</label>
                <input
                  type="text"
                  name="originLockup"
                  value={formData.originLockup}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>PhilHealth No.</label>
                <input
                  type="text"
                  name="philHealthNo"
                  value={formData.philHealthNo}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>
          </div>

          {/* Case and Contact Information Section */}
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{
              color: '#3D52A0',
              paddingBottom: '12px',
              marginBottom: '24px',
              fontWeight: '600',
              fontSize: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                width: '6px',
                height: '24px',
                background: 'linear-gradient(135deg, #3D52A0 0%, #7091E6 100%)',
                borderRadius: '3px'
              }}></div>
              Case and Contact Information
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Case</label>
                <input
                  type="text"
                  name="case"
                  value={formData.case}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Case No.</label>
                <input
                  type="text"
                  name="caseNo"
                  value={formData.caseNo}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Name of Contact Person</label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Relationship</label>
                <input
                  type="text"
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Address of Contact Person</label>
                <input
                  type="text"
                  name="contactAddress"
                  value={formData.contactAddress}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Phone / Email</label>
                <input
                  type="text"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
            </div>
          </div>

          {/* Photo Section */}
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{
              color: '#3D52A0',
              paddingBottom: '12px',
              marginBottom: '24px',
              fontWeight: '600',
              fontSize: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                width: '6px',
                height: '24px',
                background: 'linear-gradient(135deg, #3D52A0 0%, #7091E6 100%)',
                borderRadius: '3px'
              }}></div>
              Photo of PDL
            </h3>
            <div style={{
              width: '220px',
              height: '280px',
              border: '2px dashed #ADBBD4',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f8f9ff',
              cursor: 'pointer',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              e.target.style.borderColor = '#7091E6';
              e.target.style.backgroundColor = '#EDE8F5';
              e.target.style.transform = 'scale(1.02)';
              e.target.style.boxShadow = '0 8px 25px rgba(61, 82, 160, 0.15)';
            }}
            onMouseOut={(e) => {
              e.target.style.borderColor = '#ADBBD4';
              e.target.style.backgroundColor = '#f8f9ff';
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = 'none';
            }}>
              <div style={{ 
                textAlign: 'center', 
                color: '#3D52A0',
                position: 'relative',
                zIndex: '2'
              }}>
                <div style={{ 
                  fontSize: '56px', 
                  marginBottom: '16px',
                  filter: 'drop-shadow(0 2px 4px rgba(61, 82, 160, 0.1))'
                }}>📷</div>
                <div style={{ 
                  fontSize: '16px',
                  fontWeight: '500',
                  marginBottom: '8px'
                }}>Click to upload photo</div>
                <div style={{ 
                  fontSize: '14px',
                  opacity: '0.7'
                }}>or drag and drop</div>
              </div>
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                background: 'linear-gradient(135deg, rgba(112, 145, 230, 0.05) 0%, rgba(173, 187, 212, 0.05) 100%)',
                opacity: '0',
                transition: 'opacity 0.3s ease'
              }}></div>
            </div>
          </div>

          {/* Submit Button */}
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button
              type="submit"
              style={{
                padding: '18px 48px',
                background: 'linear-gradient(135deg, #3D52A0 0%, #7091E6 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '16px',
                fontSize: '18px',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 8px 25px rgba(61, 82, 160, 0.3)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                letterSpacing: '0.5px',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 12px 35px rgba(61, 82, 160, 0.4)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 8px 25px rgba(61, 82, 160, 0.3)';
              }}
            >
              <span style={{ position: 'relative', zIndex: '2' }}>Save Health Record</span>
              <div style={{
                position: 'absolute',
                top: '0',
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                transition: 'left 0.5s ease'
              }}></div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}



export default PDLHealthRecord; 