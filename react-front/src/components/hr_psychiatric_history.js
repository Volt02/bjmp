import React, { useState } from 'react';
// ...existing code...
import '../css/hr_psychiatric_history.css';

function PsychiatricHistory({ values, onChange, onSubmit }) {
  const [formData, setFormData] = useState(values || {
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
    const updated = {
      ...formData,
      [name]: value
    };
    setFormData(updated);
    if (onChange) onChange(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
  };

  return (
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

  {/* Submit Button removed as requested */}
      </form>
    </div>
  );
}

export default PsychiatricHistory; 