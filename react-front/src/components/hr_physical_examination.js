import React from 'react';
import '../css/hr_physical_examination.css';


function PhysicalExamination({ values = {}, onChange }) {
  const defaultVitals = {
    temperature: '',
    bp: '',
    hr: '',
    rr: '',
    height: '',
    weight: '',
    bmi: ''
  };
  const defaultFindings = [
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
  ];
  const vitals = { ...defaultVitals, ...(values.vitals || {}) };
  const findings = values.findings || defaultFindings;
  const detailedFindings = values.detailedFindings || '';

  const handleVitalsChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...vitals, [name]: value };
    onChange && onChange({ ...values, vitals: updated });
  };

  const handleFindingChange = (idx, val) => {
    const updated = findings.map((f, i) => i === idx ? { ...f, value: val } : f);
    onChange && onChange({ ...values, findings: updated });
  };

  const handleDetailedFindingsChange = (e) => {
    onChange && onChange({ ...values, detailedFindings: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Let wizard handle submit
  };

  // Tab navigation removed for wizard compatibility

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} autoComplete="off">
        {/* Header */}

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
            onChange={handleDetailedFindingsChange}
            placeholder="Enter details here..."
          />
        </div>


      </form>
    </div>
  );
}

export default PhysicalExamination; 