import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PDLHealthRecord from './hr_info';
import PsychiatricHistory from './hr_psychiatric_history';
import DrugsHistory from './hr_drugs_history';
import '../css/hr_medical_history.css';

function InitialHealthAssessment() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('assessment'); // 'basic', 'assessment', 'psychiatric', or 'drugs'
  const [formData, setFormData] = useState({
    presentHealthCondition: '',
    pediatricHistory: '',
    majorAdultIllnesses: '',
    majorSurgeries: '',
    seriousInjuries: '',
    limitations: '',
    medicationsHistory: '',
    transfusionHistory: '',
    mentalEmotionalProblems: '',
    bloodType: '',
    allergies: '',
    familyHistory: {
      hypertension: false,
      stroke: false,
      heartAttack: false,
      diabetes: false,
      asthma: false,
      kidneyDisease: false,
      cancer: false
    },
    otherFamilyHistory: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        familyHistory: {
          ...prev.familyHistory,
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
    console.log('Initial Health Assessment submitted:', formData);
    // Here you would typically send the data to your backend
  };

  // If basic tab is active, render the PDLHealthRecord component
  if (activeTab === 'basic') {
    return <PDLHealthRecord />;
  }

  // If psychiatric tab is active, render the PsychiatricHistory component
  if (activeTab === 'psychiatric') {
    return <PsychiatricHistory />;
  }

  // If drugs tab is active, render the DrugsHistory component
  if (activeTab === 'drugs') {
    return <DrugsHistory />;
  }

  return (
    <div className="assessment-container">
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
      </div>

      {/* Main Form Container */}
      <div className="assessment-form-container">
        <form onSubmit={handleSubmit}>
          <div className="assessment-grid">
            
            {/* Left Column - Detailed Medical History */}
            <div>
              {/* Present Health Condition */}
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{
                  color: '#3D52A0',
                  marginBottom: '15px',
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
                  Present Health Condition
                </h3>
                <textarea
                  name="presentHealthCondition"
                  value={formData.presentHealthCondition}
                  onChange={handleInputChange}
                  className="medical-textarea present-health-textarea"
                  placeholder="Describe current health condition..."
                />
              </div>

              {/* Past Medical History */}
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{
                  color: '#3D52A0',
                  marginBottom: '20px',
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
                  PAST MEDICAL HISTORY (Please enumerate/document as applicable)
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    { name: 'pediatricHistory', label: 'Pediatric History / Significant Childhood Illnesses' },
                    { name: 'majorAdultIllnesses', label: 'Major Adult Illnesses' },
                    { name: 'majorSurgeries', label: 'Major Surgeries / Previous Hospitalization' },
                    { name: 'seriousInjuries', label: 'Serious Physical Injuries' },
                    { name: 'limitations', label: 'Limitations in Range of Motion & Activities' },
                    { name: 'medicationsHistory', label: 'Medications History' },
                    { name: 'transfusionHistory', label: 'History of Transfusions / BT reactions' },
                    { name: 'mentalEmotionalProblems', label: 'Mental & Emotional Problems' }
                  ].map((field, index) => (
                    <div key={field.name}>
                      <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '500',
                        color: '#3D52A0',
                        fontSize: '15px'
                      }}>
                        {field.label}
                      </label>
                      <textarea
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        className="medical-textarea"
                        placeholder={`Enter ${field.label.toLowerCase()}...`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Summary Information */}
            <div>
              {/* Blood Type */}
              <div style={{ marginBottom: '25px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#3D52A0',
                  fontSize: '15px'
                }}>
                  Blood Type
                </label>
                <input
                  type="text"
                  name="bloodType"
                  value={formData.bloodType}
                  onChange={handleInputChange}
                  className="summary-input"
                  placeholder="e.g., A+, B-, O+, AB+"
                />
              </div>

              {/* Allergies */}
              <div style={{ marginBottom: '30px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#3D52A0',
                  fontSize: '15px'
                }}>
                  Allergies
                </label>
                <textarea
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleInputChange}
                  className="medical-textarea allergies-textarea"
                  placeholder="List any allergies (medications, food, environmental)..."
                />
              </div>

              {/* Family History */}
              <div style={{ marginBottom: '25px' }}>
                <h3 style={{
                  color: '#3D52A0',
                  marginBottom: '15px',
                  fontWeight: '600',
                  fontSize: '16px'
                }}>
                  Family History (up to 1° degree)
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { name: 'hypertension', label: 'Hypertension' },
                    { name: 'stroke', label: 'Stroke' },
                    { name: 'heartAttack', label: 'Heart Attack' },
                    { name: 'diabetes', label: 'Diabetes' },
                    { name: 'asthma', label: 'Asthma' },
                    { name: 'kidneyDisease', label: 'Kidney Disease' },
                    { name: 'cancer', label: 'Cancer' }
                  ].map(condition => (
                    <label key={condition.name} style={{
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
                        name={condition.name}
                        checked={formData.familyHistory[condition.name]}
                        onChange={handleInputChange}
                        style={{ 
                          transform: 'scale(1.2)',
                          accentColor: '#3D52A0'
                        }}
                      />
                      <span style={{ 
                        fontWeight: '500',
                        color: '#3D52A0',
                        fontSize: '14px'
                      }}>
                        {condition.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Other Family History */}
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#3D52A0',
                  fontSize: '15px'
                }}>
                  Others
                </label>
                <textarea
                  name="otherFamilyHistory"
                  value={formData.otherFamilyHistory}
                  onChange={handleInputChange}
                  className="medical-textarea other-family-textarea"
                  placeholder="Additional family history details..."
                />
              </div>
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
              <span style={{ position: 'relative', zIndex: '2' }}>Save Health Assessment</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InitialHealthAssessment; 