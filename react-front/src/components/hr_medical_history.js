import React, { useState } from 'react';
// ...existing code...
import '../css/hr_medical_history.css';

function InitialHealthAssessment({ values, onChange, onSubmit }) {
  // Always provide all familyHistory keys, even if values is empty or missing fields
  const defaultFamilyHistory = {
    hypertension: false,
    stroke: false,
    heartAttack: false,
    diabetes: false,
    asthma: false,
    kidneyDisease: false,
    cancer: false
  };
  const initialFormData = {
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
    familyHistory: defaultFamilyHistory,
    otherFamilyHistory: ''
  };
  // Merge values (if any) with defaults, and familyHistory with its defaults
  const mergedFamilyHistory = { ...defaultFamilyHistory, ...(values && values.familyHistory) };
  const mergedFormData = { ...initialFormData, ...values, familyHistory: mergedFamilyHistory };
  const [formData, setFormData] = useState(mergedFormData);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    let updated;
    if (type === 'checkbox') {
      updated = {
        ...formData,
        familyHistory: {
          ...formData.familyHistory,
          [name]: checked
        }
      };
    } else {
      updated = {
        ...formData,
        [name]: value
      };
    }
    setFormData(updated);
    if (onChange) onChange(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
  };

  return (
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

  {/* Submit Button removed as requested */}
      </form>
    </div>
  );
}

export default InitialHealthAssessment; 