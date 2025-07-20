import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PDLHealthRecord from './hr_info';
import InitialHealthAssessment from './hr_medical_history';
import PsychiatricHistory from './hr_psychiatric_history';
import DrugsHistory from './hr_drugs_history';
import PhysicalExamination from './hr_physical_examination';
import TBScreening from './hr_tb_screening';
import '../css/hr_tb_conclusion.css';

function TBConclusion() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('tb_conclusion');
  const [conclusion, setConclusion] = useState(false);
  const [furtherExam, setFurtherExam] = useState({
    sbirt: false,
    philpen: false,
    neuro: false,
    allegation: false
  });
  const [findings, setFindings] = useState({
    noInjury: false,
    noMarkings: false
  });
  const [impressions, setImpressions] = useState(['', '', '']);
  const [recommendation, setRecommendation] = useState({
    dorm: false,
    isolated: false,
    hospitalized: false
  });
  const [signature, setSignature] = useState('');

  const handleFurtherExam = (key, value) => {
    setFurtherExam(prev => ({ ...prev, [key]: value }));
  };
  const handleFindings = (key, value) => {
    setFindings(prev => ({ ...prev, [key]: value }));
  };
  const handleImpression = (idx, value) => {
    setImpressions(prev => prev.map((v, i) => i === idx ? value : v));
  };
  const handleRecommendation = (key, value) => {
    setRecommendation(prev => ({ ...prev, [key]: value }));
  };

  // Tab navigation logic
  if (activeTab === 'basic') return <PDLHealthRecord />;
  if (activeTab === 'assessment') return <InitialHealthAssessment />;
  if (activeTab === 'psychiatric') return <PsychiatricHistory />;
  if (activeTab === 'drugs') return <DrugsHistory />;
  if (activeTab === 'physical') return <PhysicalExamination />;
  if (activeTab === 'tb') return <TBScreening />;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log({ conclusion, furtherExam, findings, impressions, recommendation, signature });
  };

  return (
    <div className="tb-conclusion-container">
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
        <button onClick={() => setActiveTab('tb_conclusion')} className={`tab-button ${activeTab === 'tb_conclusion' ? 'active' : 'inactive'}`}>TB Conclusion</button>
      </div>

      {/* Main Form */}
      <div className="tb-conclusion-form-container">
        <form onSubmit={handleSubmit}>
          <div className="tb-conclusion-body">
            <div className="tb-conclusion-figure">
              {/* Placeholder for body figure images */}
              <div className="tb-figure-imgs">
                <img src="/body-front.png" alt="Body front" className="tb-figure-img" />
                <img src="/body-back.png" alt="Body back" className="tb-figure-img" />
              </div>
              <div className="tb-figure-findings">
                <label><input type="checkbox" checked={findings.noInjury} onChange={e => handleFindings('noInjury', e.target.checked)} /> No signs of external physical injury</label>
                <label><input type="checkbox" checked={findings.noMarkings} onChange={e => handleFindings('noMarkings', e.target.checked)} /> No skin markings or unusual piercings</label>
                <div className="tb-signature-row">
                  <label>Signature of PDL:</label>
                  <input type="text" className="tb-signature-input" value={signature} onChange={e => setSignature(e.target.value)} />
                </div>
              </div>
            </div>
            <div className="tb-conclusion-details">
              <div className="tb-conclusion-section">
                <label><input type="checkbox" checked={conclusion} onChange={e => setConclusion(e.target.checked)} /> Practically healthy</label>
              </div>
              <div className="tb-conclusion-section">
                <label>For further examination/evaluation:</label>
                <div className="tb-checkbox-row">
                  <label><input type="checkbox" checked={furtherExam.sbirt} onChange={e => handleFurtherExam('sbirt', e.target.checked)} /> SBIRT</label>
                  <label><input type="checkbox" checked={furtherExam.philpen} onChange={e => handleFurtherExam('philpen', e.target.checked)} /> PhilPEN</label>
                  <label><input type="checkbox" checked={furtherExam.neuro} onChange={e => handleFurtherExam('neuro', e.target.checked)} /> Neuro-Psychiatric Evaluation</label>
                  <label><input type="checkbox" checked={furtherExam.allegation} onChange={e => handleFurtherExam('allegation', e.target.checked)} /> Further documentation of Allegation of Ill-Treatment</label>
                </div>
              </div>
              <div className="tb-conclusion-section">
                <label>Other impressions if not practically healthy:</label>
                {[0, 1, 2].map(idx => (
                  <input key={idx} type="text" className="tb-impression-input" value={impressions[idx]} onChange={e => handleImpression(idx, e.target.value)} placeholder="..." />
                ))}
              </div>
              <div className="tb-conclusion-section">
                <label>Recommendation:</label>
                <div className="tb-checkbox-row">
                  <label><input type="checkbox" checked={recommendation.dorm} onChange={e => handleRecommendation('dorm', e.target.checked)} /> to be accommodated in general dormitory</label>
                  <label><input type="checkbox" checked={recommendation.isolated} onChange={e => handleRecommendation('isolated', e.target.checked)} /> to be isolated</label>
                  <label><input type="checkbox" checked={recommendation.hospitalized} onChange={e => handleRecommendation('hospitalized', e.target.checked)} /> to be hospitalized</label>
                </div>
              </div>
            </div>
          </div>
          {/* Submit Button */}
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button type="submit" className="submit-button">
              <span className="submit-button-text">Save TB Conclusion</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TBConclusion; 