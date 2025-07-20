import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PDLHealthRecord from './hr_info';
import InitialHealthAssessment from './hr_medical_history';
import DrugsHistory from './hr_drugs_history';
import '../css/hr_psychiatric_history.css';

function PsychiatricHistory() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('psychiatric'); // 'basic', 'assessment', 'psychiatric', or 'drugs'
  const [formData, setFormData] = useState({
    // Past Psychiatric History
    consultationWithPsychiatrist: '',
    consultationWhen: '',
    consultationWhere: '',
    confinementInPsychiatricFacility: '',
    confinementWhen: '',
    diagnosis: '',
    medicationTaken: '',
    
    // ARV Treatment
    arvTreatment: '',
    arvTreatmentFrom: '',
    arvTreatmentPlace: '',
    
    // OB/GYNE History
    lmp: '',
    gravida: '',
    parity: '',
    
    // Vaccines
    vaccines: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Psychiatric History submitted:', formData);
    // Here you would typically send the data to your backend
  };

  // If basic tab is active, render the PDLHealthRecord component
  if (activeTab === 'basic') {
    return <PDLHealthRecord />;
  }

  // If assessment tab is active, render the InitialHealthAssessment component
  if (activeTab === 'assessment') {
    return <InitialHealthAssessment />;
  }

  // If drugs tab is active, render the DrugsHistory component
  if (activeTab === 'drugs') {
    return <DrugsHistory />;
  }

  return (
    <div className="psychiatric-container">
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
      <div className="psychiatric-form-container">
        <form onSubmit={handleSubmit}>
          <div className="psychiatric-grid">
            
            {/* Left Column - Psychiatric History */}
            <div>
              {/* Past Psychiatric History */}
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
                  Past Psychiatric History
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* Consultation with Psychiatrist */}
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: '#3D52A0',
                      fontSize: '15px'
                    }}>
                      Consultation with Psychiatrist
                    </label>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '10px' }}>
                      {['Yes', 'No'].map(option => (
                        <label key={option} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          cursor: 'pointer'
                        }}>
                          <input
                            type="radio"
                            name="consultationWithPsychiatrist"
                            value={option}
                            checked={formData.consultationWithPsychiatrist === option}
                            onChange={handleInputChange}
                            style={{ transform: 'scale(1.2)' }}
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                    {formData.consultationWithPsychiatrist === 'Yes' && (
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '10px' }}>
                        <div>
                          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', fontSize: '14px' }}>
                            If yes, when?
                          </label>
                          <input
                            type="text"
                            name="consultationWhen"
                            value={formData.consultationWhen}
                            onChange={handleInputChange}
                            className="psychiatric-input"
                            placeholder="Date of consultation"
                          />
                        </div>
                        <div>
                          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', fontSize: '14px' }}>
                            Where?
                          </label>
                          <input
                            type="text"
                            name="consultationWhere"
                            value={formData.consultationWhere}
                            onChange={handleInputChange}
                            className="psychiatric-input"
                            placeholder="Location/facility"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Confinement in Psychiatric Facility */}
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: '#3D52A0',
                      fontSize: '15px'
                    }}>
                      Confinement in a psychiatric facility
                    </label>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '10px' }}>
                      {['Yes', 'No'].map(option => (
                        <label key={option} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          cursor: 'pointer'
                        }}>
                          <input
                            type="radio"
                            name="confinementInPsychiatricFacility"
                            value={option}
                            checked={formData.confinementInPsychiatricFacility === option}
                            onChange={handleInputChange}
                            style={{ transform: 'scale(1.2)' }}
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                    {formData.confinementInPsychiatricFacility === 'Yes' && (
                      <div style={{ marginTop: '10px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', fontSize: '14px' }}>
                          If yes, when?
                        </label>
                        <input
                          type="text"
                          name="confinementWhen"
                          value={formData.confinementWhen}
                          onChange={handleInputChange}
                          className="psychiatric-input"
                          placeholder="Date of confinement"
                        />
                      </div>
                    )}
                  </div>

                  {/* Diagnosis */}
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: '#3D52A0',
                      fontSize: '15px'
                    }}>
                      Diagnosis
                    </label>
                    <textarea
                      name="diagnosis"
                      value={formData.diagnosis}
                      onChange={handleInputChange}
                      className="psychiatric-textarea"
                      placeholder="Enter psychiatric diagnosis..."
                    />
                  </div>

                  {/* Medication Taken */}
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: '#3D52A0',
                      fontSize: '15px'
                    }}>
                      Medication taken
                    </label>
                    <textarea
                      name="medicationTaken"
                      value={formData.medicationTaken}
                      onChange={handleInputChange}
                      className="psychiatric-textarea"
                      placeholder="List medications taken for psychiatric conditions..."
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Additional History */}
            <div>
              {/* ARV Treatment */}
              <div style={{ marginBottom: '25px' }}>
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
                  ARV Treatment
                </h3>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '10px' }}>
                  {['Yes', 'No'].map(option => (
                    <label key={option} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer'
                    }}>
                      <input
                        type="radio"
                        name="arvTreatment"
                        value={option}
                        checked={formData.arvTreatment === option}
                        onChange={handleInputChange}
                        style={{ transform: 'scale(1.2)' }}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
                {formData.arvTreatment === 'Yes' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', fontSize: '14px' }}>
                        If yes, from (MM/DD/YY)
                      </label>
                      <input
                        type="date"
                        name="arvTreatmentFrom"
                        value={formData.arvTreatmentFrom}
                        onChange={handleInputChange}
                        className="psychiatric-input"
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', fontSize: '14px' }}>
                        Place
                      </label>
                      <input
                        type="text"
                        name="arvTreatmentPlace"
                        value={formData.arvTreatmentPlace}
                        onChange={handleInputChange}
                        className="psychiatric-input"
                        placeholder="Treatment facility"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* OB/GYNE History */}
              <div style={{ marginBottom: '25px' }}>
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
                  OB/GYNE History
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', fontSize: '14px' }}>
                      LMP (MM/DD/YY)
                    </label>
                    <input
                      type="date"
                      name="lmp"
                      value={formData.lmp}
                      onChange={handleInputChange}
                      className="psychiatric-input"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', fontSize: '14px' }}>
                      G
                    </label>
                    <input
                      type="text"
                      name="gravida"
                      value={formData.gravida}
                      onChange={handleInputChange}
                      className="psychiatric-input"
                      placeholder="Gravida"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', fontSize: '14px' }}>
                      P
                    </label>
                    <input
                      type="text"
                      name="parity"
                      value={formData.parity}
                      onChange={handleInputChange}
                      className="psychiatric-input"
                      placeholder="Parity"
                    />
                  </div>
                </div>
              </div>

              {/* Vaccines */}
              <div>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#3D52A0',
                  fontSize: '15px'
                }}>
                  Vaccines (if known)
                </label>
                <textarea
                  name="vaccines"
                  value={formData.vaccines}
                  onChange={handleInputChange}
                  className="psychiatric-textarea vaccines-textarea"
                  placeholder="List all known vaccines and dates..."
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
              <span style={{ position: 'relative', zIndex: '2' }}>Save Psychiatric History</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PsychiatricHistory; 