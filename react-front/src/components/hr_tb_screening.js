import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PDLHealthRecord from './hr_info';
import InitialHealthAssessment from './hr_medical_history';
import PsychiatricHistory from './hr_psychiatric_history';
import DrugsHistory from './hr_drugs_history';
import PhysicalExamination from './hr_physical_examination';
import TBConclusion from './hr_tb_conclusion';
import '../css/hr_tb_screening.css';

function TBScreening() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('tb');
  const [checklist, setChecklist] = useState({
    A: null,
    B: null,
    B_known: null,
    C_blood: null,
    C_weight: null,
    C_fever: null,
    D: null,
    E: null,
    F: null,
  });
  const [remarks, setRemarks] = useState({
    presumptiveTB: false,
    presumptiveDRTB: false,
    notTB: false,
    ongoing: false,
    other: false,
    otherText: ''
  });
  const [finalResult, setFinalResult] = useState({
    newCase: false,
    retreatment: false,
    negative: false,
    bc: false,
    cd: false
  });
  const [knownMedical] = useState('');
  const [tbOutcome, setTbOutcome] = useState('');
  const [tbExposure, setTbExposure] = useState('');

  const handleChecklist = (key, value) => {
    setChecklist(prev => ({ ...prev, [key]: value }));
  };

  const handleRemarks = (key, value) => {
    setRemarks(prev => ({ ...prev, [key]: value }));
  };

  const handleFinalResult = (key, value) => {
    setFinalResult(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log({ checklist, remarks, finalResult, knownMedical, tbOutcome, tbExposure });
  };

  // Tab navigation logic
  if (activeTab === 'basic') return <PDLHealthRecord />;
  if (activeTab === 'assessment') return <InitialHealthAssessment />;
  if (activeTab === 'psychiatric') return <PsychiatricHistory />;
  if (activeTab === 'drugs') return <DrugsHistory />;
  if (activeTab === 'physical') return <PhysicalExamination />;
  if (activeTab === 'tb_conclusion') {
    return <TBConclusion />;
  }

  return (
    <div className="tb-container">
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
        <button onClick={() => setActiveTab('tb')} className={`tab-button ${activeTab === 'tb' ? 'active' : 'inactive'}`}>TB Screening</button>
        <button
          onClick={() => setActiveTab('tb_conclusion')}
          className={`tab-button ${activeTab === 'tb_conclusion' ? 'active' : 'inactive'}`}
        >
          TB Conclusion
        </button>
      </div>

      {/* Main Form */}
      <div className="tb-form-container">
        <form onSubmit={handleSubmit}>
          <div className="tb-checklist">
            {/* Checklist Items */}
            <div className="tb-row">
              <div className="tb-label">A. Unexplained cough, any duration</div>
              <div className="tb-radio"><input type="radio" name="A" checked={checklist.A === true} onChange={() => handleChecklist('A', true)} /></div>
              <div className="tb-radio"><input type="radio" name="A" checked={checklist.A === false} onChange={() => handleChecklist('A', false)} /></div>
            </div>
            <div className="tb-row">
              <div className="tb-label">B. BMI {'<'} 18.5</div>
              <div className="tb-radio"><input type="radio" name="B" checked={checklist.B === true} onChange={() => handleChecklist('B', true)} /></div>
              <div className="tb-radio"><input type="radio" name="B" checked={checklist.B === false} onChange={() => handleChecklist('B', false)} /></div>
            </div>
            <div className="tb-row">
              <div className="tb-label">Known medical conditions<br /><span className="tb-note">(Clinical High-risk Groups: HIV/AIDS, diabetes, end-stage renal disease, cancer, connective tissue diseases, autoimmune diseases, silicosis, gastrectomy, solid organ transplantation, prolonged systemic steroids)</span></div>
              <div className="tb-radio"><input type="radio" name="B_known" checked={checklist.B_known === true} onChange={() => handleChecklist('B_known', true)} /></div>
              <div className="tb-radio"><input type="radio" name="B_known" checked={checklist.B_known === false} onChange={() => handleChecklist('B_known', false)} /></div>
            </div>
            <div className="tb-row">
              <div className="tb-label">C. Blood-streaked sputum</div>
              <div className="tb-radio"><input type="radio" name="C_blood" checked={checklist.C_blood === true} onChange={() => handleChecklist('C_blood', true)} /></div>
              <div className="tb-radio"><input type="radio" name="C_blood" checked={checklist.C_blood === false} onChange={() => handleChecklist('C_blood', false)} /></div>
            </div>
            <div className="tb-row">
              <div className="tb-label">Weight loss or BMI {'<'} 18.5</div>
              <div className="tb-radio"><input type="radio" name="C_weight" checked={checklist.C_weight === true} onChange={() => handleChecklist('C_weight', true)} /></div>
              <div className="tb-radio"><input type="radio" name="C_weight" checked={checklist.C_weight === false} onChange={() => handleChecklist('C_weight', false)} /></div>
            </div>
            <div className="tb-row">
              <div className="tb-label">Persistent fever</div>
              <div className="tb-radio"><input type="radio" name="C_fever" checked={checklist.C_fever === true} onChange={() => handleChecklist('C_fever', true)} /></div>
              <div className="tb-radio"><input type="radio" name="C_fever" checked={checklist.C_fever === false} onChange={() => handleChecklist('C_fever', false)} /></div>
            </div>
            <div className="tb-row">
              <div className="tb-label">D. Chest x-ray suggestive of TB</div>
              <div className="tb-radio"><input type="radio" name="D" checked={checklist.D === true} onChange={() => handleChecklist('D', true)} /></div>
              <div className="tb-radio"><input type="radio" name="D" checked={checklist.D === false} onChange={() => handleChecklist('D', false)} /></div>
            </div>
            <div className="tb-row">
              <div className="tb-label">E. History of previous TB treatment<br /><input type="text" className="tb-input" placeholder="If outcome known, specify" value={tbOutcome} onChange={e => setTbOutcome(e.target.value)} /></div>
              <div className="tb-radio"><input type="radio" name="E" checked={checklist.E === true} onChange={() => handleChecklist('E', true)} /></div>
              <div className="tb-radio"><input type="radio" name="E" checked={checklist.E === false} onChange={() => handleChecklist('E', false)} /></div>
            </div>
            <div className="tb-row">
              <div className="tb-label">F. Exposure to TB case<br /><input type="text" className="tb-input" placeholder="If known, specify" value={tbExposure} onChange={e => setTbExposure(e.target.value)} /></div>
              <div className="tb-radio"><input type="radio" name="F" checked={checklist.F === true} onChange={() => handleChecklist('F', true)} /></div>
              <div className="tb-radio"><input type="radio" name="F" checked={checklist.F === false} onChange={() => handleChecklist('F', false)} /></div>
            </div>
          </div>

          {/* Remarks and Results */}
          <div className="tb-remarks-results">
            <div className="tb-remarks">
              <label>Remarks:</label>
              <div className="tb-checkbox-row">
                <label><input type="checkbox" checked={remarks.presumptiveTB} onChange={e => handleRemarks('presumptiveTB', e.target.checked)} /> Presumptive TB</label>
                <label><input type="checkbox" checked={remarks.presumptiveDRTB} onChange={e => handleRemarks('presumptiveDRTB', e.target.checked)} /> Presumptive DR-TB</label>
                <label><input type="checkbox" checked={remarks.notTB} onChange={e => handleRemarks('notTB', e.target.checked)} /> Not TB</label>
                <label><input type="checkbox" checked={remarks.ongoing} onChange={e => handleRemarks('ongoing', e.target.checked)} /> On-going TB treatment <span className="tb-note">(Ask for NTP Referral Form)</span></label>
                <label><input type="checkbox" checked={remarks.other} onChange={e => handleRemarks('other', e.target.checked)} /> Other follow-up, specify: <input type="text" className="tb-input" value={remarks.otherText} onChange={e => handleRemarks('otherText', e.target.value)} /></label>
              </div>
            </div>
            <div className="tb-final-result">
              <label>Final Result:</label>
              <div className="tb-checkbox-row">
                <label><input type="checkbox" checked={finalResult.newCase} onChange={e => handleFinalResult('newCase', e.target.checked)} /> New Case</label>
                <label><input type="checkbox" checked={finalResult.retreatment} onChange={e => handleFinalResult('retreatment', e.target.checked)} /> Retreatment</label>
                <label><input type="checkbox" checked={finalResult.negative} onChange={e => handleFinalResult('negative', e.target.checked)} /> Negative</label>
                <label><input type="checkbox" checked={finalResult.bc} onChange={e => handleFinalResult('bc', e.target.checked)} /> BC</label>
                <label><input type="checkbox" checked={finalResult.cd} onChange={e => handleFinalResult('cd', e.target.checked)} /> CD</label>
              </div>
            </div>
          </div>

          {/* Presumptive TB/DR-TB Info */}
          <div className="tb-info-box">
            <strong>Presumptive TB if:</strong>
            <ul>
              <li>Unexplained cough of any duration (A) with/without other signs/symptoms (C) or risk factors (B).</li>
              <li>X-ray suggestive of TB (D)</li>
              <li>If with any other signs/symptoms (C) or risk factors (B), refer to physician.</li>
              <li>In absence of physician, you may consider presumptive TB.</li>
            </ul>
            <strong>Presumptive DR-TB if:</strong>
            <ul>
              <li>Presumptive TB with previous treatment (E)</li>
              <li>Presumptive TB with exposure to known active DR-TB case (F)</li>
            </ul>
          </div>

          {/* Submit Button */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button type="submit" className="submit-button">
              <span className="submit-button-text">Save TB Screening</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TBScreening; 