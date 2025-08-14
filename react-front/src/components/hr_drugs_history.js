



import React from 'react';
import '../css/hr_drugs_history.css';


function DrugsHistory({ values = {}, onChange }) {
  const defaultFormData = {
    alcoholDrinker: '',
    alcoholAgeAtOnset: '',
    alcoholFrequencyPerWeek: '',
    alcoholVolumeConsumed: '',
    alcoholTypeOfDrinks: '',
    smokingStatus: '',
    smokingAgeAtOnset: '',
    cigarettesPerDay: '',
    useOfIllicitDrugs: '',
    drugsAgeAtOnset: '',
    injectingDrugs: '',
    multipleDrugsAtOnce: '',
    primaryUse: { frequency: '', lastIntake: '' },
    secondaryUse: { frequency: '', lastIntake: '' },
    otherUse: { frequency: '', lastIntake: '' }
  };
  const formData = { ...defaultFormData, ...values };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    onChange && onChange(updated);
  };

  const handleDrugUseChange = (drugType, field, value) => {
    const updated = {
      ...formData,
      [drugType]: {
        ...formData[drugType],
        [field]: value
      }
    };
    onChange && onChange(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Let wizard handle submit
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} autoComplete="off">
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

    </form>
  </div>
  );
}

export default DrugsHistory;