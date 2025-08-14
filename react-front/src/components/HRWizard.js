import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PDLHealthRecord from './hr_info';
import InitialHealthAssessment from './hr_medical_history';
import PsychiatricHistory from './hr_psychiatric_history';
import DrugsHistory from './hr_drugs_history';
import PhysicalExamination from './hr_physical_examination';
import TBScreening from './hr_tb_screening';
import TBConclusion from './hr_tb_conclusion';
import '../css/hr_wizard.css';

const formSteps = [
  { key: 'basic', label: 'PDL Information', component: PDLHealthRecord },
  { key: 'assessment', label: 'Medical History', component: InitialHealthAssessment },
  { key: 'psychiatric', label: 'Psychiatric History', component: PsychiatricHistory },
  { key: 'drugs', label: 'Substance Use History', component: DrugsHistory },
  { key: 'physical', label: 'Physical Exam', component: PhysicalExamination },
  { key: 'tb', label: 'TB Screening', component: TBScreening },
  { key: 'tb_conclusion', label: 'TB Conclusion', component: TBConclusion },
];

function HRWizard() {
  const [step, setStep] = useState(0);
  const [formState, setFormState] = useState({});
  const navigate = useNavigate();

  const CurrentForm = formSteps[step].component;
  const currentKey = formSteps[step].key;

  // Navigation handlers
  const handleNext = () => {
    if (step < formSteps.length - 1) setStep(step + 1);
  };

  // Data change handler
  const handleFormChange = (data) => {
    setFormState(prev => ({ ...prev, [currentKey]: data }));
  };

  const handleFinalSubmit = () => {
    // Here you can combine all formState and send to backend as needed
    console.log('Submitting all HR data:', formState);
    // TODO: Implement actual API submission logic
    alert('All Health Record data submitted!');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 50%, #EDE8F5 100%)' }}>
      <div className="jbr-info-sidebar" style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'space-between', zIndex: 1200, overflow: 'visible' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {formSteps.map((stepObj, idx) => (
            <button
              key={stepObj.key}
              className={`tab-button${step === idx ? ' active' : ''}`}
              onClick={() => setStep(idx)}
              style={{ marginBottom: idx !== formSteps.length - 1 ? 12 : 0 }}
            >
              {stepObj.label}
            </button>
          ))}
        </div>
        <div style={{ width: '100%', padding: '0 20px 32px 20px', marginTop: 24 }}>
          <button
            className="tab-button"
            style={{
              width: '100%',
              background: 'linear-gradient(90deg, #7091E6 0%, #3D52A0 100%)',
              color: 'white',
              fontWeight: 700,
              borderRadius: 14,
              padding: '18px 0',
              margin: 0,
              fontSize: 18,
              boxShadow: '0 4px 16px rgba(61,82,160,0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              letterSpacing: 1,
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/')}
          >
            <span style={{ fontSize: 22, display: 'flex', alignItems: 'center' }}>🏠</span>
            Home
          </button>
        </div>
      </div>
      <div style={{ flex: 1, padding: '40px 0 40px 0', minHeight: '100vh', paddingLeft: 280, position: 'relative' }}>
        {/* Fixed Back Button (like JBR) */}
        <button
          onClick={() => navigate('/')}
          className="back-button jbrwizard-back-btn"
          style={{
            position: 'fixed',
            top: 32,
            left: 300,
            zIndex: 1100,
            marginLeft: 0,
            marginTop: 0,
            boxShadow: '0 8px 25px rgba(61, 82, 160, 0.2)'
          }}
        >
          <span style={{ marginRight: 8, fontSize: 18 }}>←</span>Back
        </button>
  <div className="header-container">
          <div className="header-card">
            <h1 className="main-title">BUREAU OF JAIL MANAGEMENT AND PENOLOGY</h1>
            <div className="sub-title">PDL HEALTH RECORD</div>
          </div>
        </div>
  <div className="form-container">
          <CurrentForm
            values={formState[currentKey] || {}}
            onChange={handleFormChange}
          />
          <div className="hrwizard-nav-btns" style={{ marginTop: 32, display: 'flex', justifyContent: 'flex-end' }}>
            {step < formSteps.length - 1 ? (
              <button onClick={handleNext} className="next-button">Next</button>
            ) : (
              <button onClick={handleFinalSubmit} className="submit-button">Submit All</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HRWizard;