import React from 'react';
import '../css/hr_tb_conclusion.css';


function TBConclusion({ values = {}, onChange }) {
  const defaultFurtherExam = {
    sbirt: false,
    philpen: false,
    neuro: false,
    allegation: false
  };
  const defaultFindings = {
    noInjury: false,
    noMarkings: false
  };
  const defaultImpressions = ['', '', ''];
  const defaultRecommendation = {
    dorm: false,
    isolated: false,
    hospitalized: false
  };
  const conclusion = values.conclusion || false;
  const furtherExam = { ...defaultFurtherExam, ...(values.furtherExam || {}) };
  const findings = { ...defaultFindings, ...(values.findings || {}) };
  const impressions = values.impressions || defaultImpressions;
  const recommendation = { ...defaultRecommendation, ...(values.recommendation || {}) };
  const signature = values.signature || '';

  const handleFurtherExam = (key, value) => {
    onChange && onChange({ ...values, furtherExam: { ...furtherExam, [key]: value } });
  };
  const handleFindings = (key, value) => {
    onChange && onChange({ ...values, findings: { ...findings, [key]: value } });
  };
  const handleImpression = (idx, value) => {
    const updated = impressions.map((v, i) => i === idx ? value : v);
    onChange && onChange({ ...values, impressions: updated });
  };
  const handleRecommendation = (key, value) => {
    onChange && onChange({ ...values, recommendation: { ...recommendation, [key]: value } });
  };
  const handleSignature = (e) => {
    onChange && onChange({ ...values, signature: e.target.value });
  };
  const handleConclusion = (e) => {
    onChange && onChange({ ...values, conclusion: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Let wizard handle submit
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} autoComplete="off">
        {/* Header (keep only one instance) */}
        {/* The header is rendered by the wizard, so remove it here */}
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
                  <input type="text" className="tb-signature-input" value={signature} onChange={handleSignature} />
                </div>
              </div>
            </div>
            <div className="tb-conclusion-details">
              <div className="tb-conclusion-section">
                <label><input type="checkbox" checked={conclusion} onChange={handleConclusion} /> Practically healthy</label>
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

    </form>
  </div>
  );
}

export default TBConclusion; 