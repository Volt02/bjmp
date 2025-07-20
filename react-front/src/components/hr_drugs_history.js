import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PDLHealthRecord from './hr_info';
import InitialHealthAssessment from './hr_medical_history';
import PsychiatricHistory from './hr_psychiatric_history';
import PhysicalExamination from './hr_physical_examination';
import TBScreening from './hr_tb_screening';
import TBConclusion from './hr_tb_conclusion';
import '../css/hr_drugs_history.css';

function DrugsHistory() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('drugs'); // 'basic', 'assessment', 'psychiatric', or 'drugs'
  const [formData, setFormData] = useState({
    // Alcohol History
    alcoholDrinker: '',
    alcoholAgeAtOnset: '',
    alcoholFrequencyPerWeek: '',
    alcoholVolumeConsumed: '',
    alcoholTypeOfDrinks: '',
    
    // Smoking History
    smokingStatus: '',
    smokingAgeAtOnset: '',
    cigarettesPerDay: '',
    
    // Drugs History
    useOfIllicitDrugs: '',
    drugsAgeAtOnset: '',
    injectingDrugs: '',
    multipleDrugsAtOnce: '',
    
    // Drug Use Table
    primaryUse: {
      frequency: '',
      lastIntake: ''
    },
    secondaryUse: {
      frequency: '',
      lastIntake: ''
    },
    otherUse: {
      frequency: '',
      lastIntake: ''
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDrugUseChange = (drugType, field, value) => {
    setFormData(prev => ({
      ...prev,
      [drugType]: {
        ...prev[drugType],
        [field]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Drugs History submitted:', formData);
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

  // If psychiatric tab is active, render the PsychiatricHistory component
  if (activeTab === 'psychiatric') {
    return <PsychiatricHistory />;
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
    <div className="drugs-container">
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
      <div className="drugs-form-container">
        <form onSubmit={handleSubmit}>
          <div className="drugs-grid">
            
            {/* Left Column - Alcohol and Smoking */}
            <div>
              {/* Alcohol History */}
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{
                  color: '#3D52A0',
                  marginBottom: '20px',
                  fontWeight: '600',
                  fontSize: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  borderBottom: '2px solid #7091E6',
                  paddingBottom: '8px'
                }}>
                  <div style={{
                    width: '6px',
                    height: '24px',
                    background: 'linear-gradient(135deg, #3D52A0 0%, #7091E6 100%)',
                    borderRadius: '3px'
                  }}></div>
                  ALCOHOL HISTORY
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* Alcohol Drinker */}
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: '#3D52A0',
                      fontSize: '15px'
                    }}>
                      Alcohol drinker:
                    </label>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                      {['Yes', 'No'].map(option => (
                        <label key={option} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          cursor: 'pointer'
                        }}>
                          <input
                            type="radio"
                            name="alcoholDrinker"
                            value={option}
                            checked={formData.alcoholDrinker === option}
                            onChange={handleInputChange}
                            style={{ transform: 'scale(1.2)' }}
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Age at onset */}
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: '#3D52A0',
                      fontSize: '15px'
                    }}>
                      Age at onset:
                    </label>
                    <input
                      type="text"
                      name="alcoholAgeAtOnset"
                      value={formData.alcoholAgeAtOnset}
                      onChange={handleInputChange}
                      className="drugs-input"
                      placeholder="Enter age"
                    />
                  </div>

                  {/* Frequency per week */}
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: '#3D52A0',
                      fontSize: '15px'
                    }}>
                      Frequency of use per week:
                    </label>
                    <input
                      type="text"
                      name="alcoholFrequencyPerWeek"
                      value={formData.alcoholFrequencyPerWeek}
                      onChange={handleInputChange}
                      className="drugs-input"
                      placeholder="e.g., 3 times per week"
                    />
                  </div>

                  {/* Volume consumed */}
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: '#3D52A0',
                      fontSize: '15px'
                    }}>
                      Approximate volume of alcohol consumed:
                    </label>
                    <input
                      type="text"
                      name="alcoholVolumeConsumed"
                      value={formData.alcoholVolumeConsumed}
                      onChange={handleInputChange}
                      className="drugs-input"
                      placeholder="e.g., 2 bottles, 3 glasses"
                    />
                    <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
                      (bottle, glass, shots, etc.)
                    </div>
                  </div>

                  {/* Type of drinks */}
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: '#3D52A0',
                      fontSize: '15px'
                    }}>
                      Type of drinks containing alcohol:
                    </label>
                    <input
                      type="text"
                      name="alcoholTypeOfDrinks"
                      value={formData.alcoholTypeOfDrinks}
                      onChange={handleInputChange}
                      className="drugs-input"
                      placeholder="e.g., beer, wine, whiskey"
                    />
                  </div>
                </div>
              </div>

              {/* Smoking History */}
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{
                  color: '#3D52A0',
                  marginBottom: '20px',
                  fontWeight: '600',
                  fontSize: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  borderBottom: '2px solid #7091E6',
                  paddingBottom: '8px'
                }}>
                  <div style={{
                    width: '6px',
                    height: '24px',
                    background: 'linear-gradient(135deg, #3D52A0 0%, #7091E6 100%)',
                    borderRadius: '3px'
                  }}></div>
                  SMOKING (Tobacco/Cigarette/Vape)
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* Smoking Status */}
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: '#3D52A0',
                      fontSize: '15px'
                    }}>
                      Smoking Status:
                    </label>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {[
                        'Never smoked',
                        'Current smoker',
                        'Passive smoker',
                        'Stopped > a year',
                        'Stopped < a year'
                      ].map(option => (
                        <label key={option} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          cursor: 'pointer'
                        }}>
                          <input
                            type="radio"
                            name="smokingStatus"
                            value={option}
                            checked={formData.smokingStatus === option}
                            onChange={handleInputChange}
                            style={{ transform: 'scale(1.2)' }}
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Age at onset */}
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: '#3D52A0',
                      fontSize: '15px'
                    }}>
                      Age at onset:
                    </label>
                    <input
                      type="text"
                      name="smokingAgeAtOnset"
                      value={formData.smokingAgeAtOnset}
                      onChange={handleInputChange}
                      className="drugs-input"
                      placeholder="Enter age"
                    />
                  </div>

                  {/* Cigarettes per day */}
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: '#3D52A0',
                      fontSize: '15px'
                    }}>
                      Number of cigarette sticks consumed in a day:
                    </label>
                    <input
                      type="text"
                      name="cigarettesPerDay"
                      value={formData.cigarettesPerDay}
                      onChange={handleInputChange}
                      className="drugs-input"
                      placeholder="e.g., 10 sticks"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Drugs */}
            <div>
              {/* Drugs History */}
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{
                  color: '#3D52A0',
                  marginBottom: '20px',
                  fontWeight: '600',
                  fontSize: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  borderBottom: '2px solid #7091E6',
                  paddingBottom: '8px'
                }}>
                  <div style={{
                    width: '6px',
                    height: '24px',
                    background: 'linear-gradient(135deg, #3D52A0 0%, #7091E6 100%)',
                    borderRadius: '3px'
                  }}></div>
                  DRUGS
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {/* Use of illicit drugs */}
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: '#3D52A0',
                      fontSize: '15px'
                    }}>
                      Use of illicit drugs:
                    </label>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                      {['Yes', 'No'].map(option => (
                        <label key={option} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          cursor: 'pointer'
                        }}>
                          <input
                            type="radio"
                            name="useOfIllicitDrugs"
                            value={option}
                            checked={formData.useOfIllicitDrugs === option}
                            onChange={handleInputChange}
                            style={{ transform: 'scale(1.2)' }}
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Age at onset */}
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: '#3D52A0',
                      fontSize: '15px'
                    }}>
                      Age at onset:
                    </label>
                    <input
                      type="text"
                      name="drugsAgeAtOnset"
                      value={formData.drugsAgeAtOnset}
                      onChange={handleInputChange}
                      className="drugs-input"
                      placeholder="Enter age"
                    />
                  </div>

                  {/* Injecting drugs */}
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: '#3D52A0',
                      fontSize: '15px'
                    }}>
                      Injecting drugs for non-medical use:
                    </label>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                      {['Yes', 'No'].map(option => (
                        <label key={option} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          cursor: 'pointer'
                        }}>
                          <input
                            type="radio"
                            name="injectingDrugs"
                            value={option}
                            checked={formData.injectingDrugs === option}
                            onChange={handleInputChange}
                            style={{ transform: 'scale(1.2)' }}
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Multiple drugs */}
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '500',
                      color: '#3D52A0',
                      fontSize: '15px'
                    }}>
                      Uses more than one drug at a time:
                    </label>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                      {['Yes', 'No'].map(option => (
                        <label key={option} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          cursor: 'pointer'
                        }}>
                          <input
                            type="radio"
                            name="multipleDrugsAtOnce"
                            value={option}
                            checked={formData.multipleDrugsAtOnce === option}
                            onChange={handleInputChange}
                            style={{ transform: 'scale(1.2)' }}
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Drug Use Table */}
                  <div>
                    <h4 style={{
                      color: '#3D52A0',
                      marginBottom: '15px',
                      fontWeight: '600',
                      fontSize: '16px'
                    }}>
                      Drug Use Details:
                    </h4>
                    <div style={{
                      border: '2px solid #e8ecf5',
                      borderRadius: '12px',
                      overflow: 'hidden'
                    }}>
                      {/* Table Header */}
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr',
                        backgroundColor: '#f8f9ff',
                        borderBottom: '2px solid #e8ecf5'
                      }}>
                        <div style={{
                          padding: '12px',
                          fontWeight: '600',
                          color: '#3D52A0',
                          borderRight: '1px solid #e8ecf5'
                        }}>
                          Drug Type
                        </div>
                        <div style={{
                          padding: '12px',
                          fontWeight: '600',
                          color: '#3D52A0',
                          borderRight: '1px solid #e8ecf5'
                        }}>
                          Frequency
                        </div>
                        <div style={{
                          padding: '12px',
                          fontWeight: '600',
                          color: '#3D52A0'
                        }}>
                          Last Intake
                        </div>
                      </div>

                      {/* Table Rows */}
                      {[
                        { key: 'primaryUse', label: 'Primary use' },
                        { key: 'secondaryUse', label: 'Secondary use' },
                        { key: 'otherUse', label: 'Other' }
                      ].map((drugType, index) => (
                        <div key={drugType.key} style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr 1fr',
                          borderBottom: index < 2 ? '1px solid #e8ecf5' : 'none'
                        }}>
                          <div style={{
                            padding: '12px',
                            fontWeight: '500',
                            color: '#3D52A0',
                            backgroundColor: '#f8f9ff',
                            borderRight: '1px solid #e8ecf5'
                          }}>
                            {drugType.label}
                          </div>
                          <div style={{
                            padding: '8px',
                            borderRight: '1px solid #e8ecf5'
                          }}>
                            <input
                              type="text"
                              value={formData[drugType.key].frequency}
                              onChange={(e) => handleDrugUseChange(drugType.key, 'frequency', e.target.value)}
                              className="drugs-table-input"
                              placeholder="Frequency"
                            />
                          </div>
                          <div style={{ padding: '8px' }}>
                            <input
                              type="text"
                              value={formData[drugType.key].lastIntake}
                              onChange={(e) => handleDrugUseChange(drugType.key, 'lastIntake', e.target.value)}
                              className="drugs-table-input"
                              placeholder="Last intake"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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
              <span style={{ position: 'relative', zIndex: '2' }}>Save Substance Use History</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DrugsHistory; 