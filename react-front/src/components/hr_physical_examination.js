import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PDLHealthRecord from './hr_info';
import InitialHealthAssessment from './hr_medical_history';
import PsychiatricHistory from './hr_psychiatric_history';
import DrugsHistory from './hr_drugs_history';
import TBScreening from './hr_tb_screening';
import TBConclusion from './hr_tb_conclusion';
import '../css/hr_physical_examination.css';

function PhysicalExamination() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('physical');
  const [vitals, setVitals] = useState({
    temperature: '',
    bp: '',
    hr: '',
    rr: '',
    height: '',
    weight: '',
    bmi: ''
  });
  const [findings, setFindings] = useState([
    { label: 'General appearance', note: 'upright with coordinated movement, no signs of distress', value: null },
    { label: 'Head, eyes, ears, nose and throat', note: 'Normocephalic, pink palpebral conjunctiva, white and clear sclera, PERLA, no nasal/aural discharges, no tonsillo-pharyngeal congestion', value: null },
    { label: 'Neck', note: 'no lymph nodes palpable', value: null },
    { label: 'Chest/lungs', note: 'symmetrical chest and lung expansion, clear both sounds', value: null },
    { label: 'Heart', note: 'regular rhythm, no abnormal heart sounds', value: null },
    { label: 'Abdomen', note: 'flat, soft, no masses, normal bowel sounds', value: null },
    { label: 'Genito-urinary', note: 'no lesions, no urethral discharges, no palpable hernia', value: null },
    { label: 'Musculo-skeletal', note: 'no gross deformities, no limitation of movement', value: null },
    { label: 'Extremities', note: 'no swelling/deformity, no weakness, good capillary refill, strong pulses, normal flexes', value: null },
    { label: 'Other significant findings (specify)', note: '', value: null }
  ]);
  const [detailedFindings, setDetailedFindings] = useState('');

  const handleVitalsChange = (e) => {
    const { name, value } = e.target;
    setVitals(prev => ({ ...prev, [name]: value }));
  };

  const handleFindingChange = (idx, val) => {
    setFindings(prev => prev.map((f, i) => i === idx ? { ...f, value: val } : f));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log({ vitals, findings, detailedFindings });
  };

  // Tab navigation logic
  if (activeTab === 'basic') return <PDLHealthRecord />;
  if (activeTab === 'assessment') return <InitialHealthAssessment />;
  if (activeTab === 'psychiatric') return <PsychiatricHistory />;
  if (activeTab === 'drugs') return <DrugsHistory />;
  if (activeTab === 'tb') {
    return <TBScreening />;
  }
  if (activeTab === 'tb_conclusion') {
    return <TBConclusion />;
  }

  return (
    <div className="physical-container">
      {/* Back Button */}
      <button onClick={() => navigate('/')} className="back-button">← Back</button>

      {/* Header */}
      <div className="header-container">
        <div className="header-card">
          <h1 className="main-title">BUREAU OF JAIL MANAGEMENT AND PENOLOGY</h1>
          <h2 className="sub-title">PDL HEALTH RECORD</h2>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button onClick={() => setActiveTab('basic')} className={`tab-button ${activeTab === 'basic' ? 'active' : 'inactive'}`}>PDL Information</button>
        <button onClick={() => setActiveTab('assessment')} className={`tab-button ${activeTab === 'assessment' ? 'active' : 'inactive'}`}>Medical History</button>
        <button onClick={() => setActiveTab('psychiatric')} className={`tab-button ${activeTab === 'psychiatric' ? 'active' : 'inactive'}`}>Psychiatric History</button>
        <button onClick={() => setActiveTab('drugs')} className={`tab-button ${activeTab === 'drugs' ? 'active' : 'inactive'}`}>Substance Use History</button>
        <button onClick={() => setActiveTab('physical')} className={`tab-button ${activeTab === 'physical' ? 'active' : 'inactive'}`}>Physical Exam</button>
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

      {/* Main Form */}
      <div className="physical-form-container">
        <form onSubmit={handleSubmit}>
          {/* Vitals */}
          <div className="vitals-row">
            <label>T: <input type="text" name="temperature" value={vitals.temperature} onChange={handleVitalsChange} className="vitals-input" /> °C</label>
            <label>BP: <input type="text" name="bp" value={vitals.bp} onChange={handleVitalsChange} className="vitals-input" /> mmHg</label>
            <label>HR: <input type="text" name="hr" value={vitals.hr} onChange={handleVitalsChange} className="vitals-input" /> bpm</label>
            <label>RR: <input type="text" name="rr" value={vitals.rr} onChange={handleVitalsChange} className="vitals-input" /> cpm</label>
            <label>Height: <input type="text" name="height" value={vitals.height} onChange={handleVitalsChange} className="vitals-input" /> m</label>
            <label>Weight: <input type="text" name="weight" value={vitals.weight} onChange={handleVitalsChange} className="vitals-input" /> kg</label>
            <label>BMI: <input type="text" name="bmi" value={vitals.bmi} onChange={handleVitalsChange} className="vitals-input" /> kg/m²</label>
          </div>

          {/* Checklist */}
          <div className="physical-checklist">
            <div className="checklist-header">
              <span> </span>
              <span>Yes</span>
              <span>No</span>
            </div>
            {findings.map((item, idx) => (
              <div className="checklist-row" key={item.label}>
                <div className="checklist-label">
                  <span className="checklist-title">{idx + 1}. {item.label}</span>
                  {item.note && <span className="checklist-note"> ({item.note})</span>}
                </div>
                <div className="checklist-radio">
                  <input type="radio" name={`finding${idx}`} checked={item.value === true} onChange={() => handleFindingChange(idx, true)} />
                </div>
                <div className="checklist-radio">
                  <input type="radio" name={`finding${idx}`} checked={item.value === false} onChange={() => handleFindingChange(idx, false)} />
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Findings */}
          <div className="detailed-findings-section">
            <label>Detailed findings</label>
            <textarea
              className="detailed-findings-textarea"
              value={detailedFindings}
              onChange={e => setDetailedFindings(e.target.value)}
              placeholder="Enter details here..."
            />
          </div>

          {/* Submit Button */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button type="submit" className="submit-button">
              <span className="submit-button-text">Save Physical Examination</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PhysicalExamination; 