
import React from 'react';
import '../css/jbr_info.css';
import '../css/jbr_offenses.css';

function JBROffenses({ values = {}, onChange }) {
  const rows = values?.rows && values.rows.length > 0 ? values.rows : [{ caseNo: '', offense: '' }];
  const courtOfOrigin = values?.courtOfOrigin || '';

  const handleRowChange = (idx, field, value) => {
    const updated = rows.map((row, i) => i === idx ? { ...row, [field]: value } : row);
    if (onChange) onChange({ rows: updated, courtOfOrigin });
  };

  const addRow = () => {
    if (onChange) onChange({ rows: [...rows, { caseNo: '', offense: '' }], courtOfOrigin });
  };

  const deleteRow = (idx) => {
    if (rows.length === 1) return;
    const updated = rows.filter((_, i) => i !== idx);
    if (onChange) onChange({ rows: updated, courtOfOrigin });
  };

  const handleCourtChange = (e) => {
    if (onChange) onChange({ rows, courtOfOrigin: e.target.value });
  };

  return (
    <div className="form-container">
      <h3 className="section-title"><span className="section-accent"></span>Offenses</h3>
      <div className="jbr-offenses-dynamic-rows">
        {rows.map((row, idx) => (
          <div key={idx} className="jbr-offenses-row">
            <div className="jbr-offenses-row-col">
              <label className="form-label">Crim. Case No. {`(${String.fromCharCode(97 + idx)})`.toUpperCase()}</label>
              <input
                type="text"
                name={`crimCaseNo${String.fromCharCode(65 + idx)}`}
                value={row.caseNo}
                onChange={e => handleRowChange(idx, 'caseNo', e.target.value)}
                className="form-input"
              />
            </div>
            <div className="jbr-offenses-row-col">
              <label className="form-label">Offense Charged {`(${String.fromCharCode(97 + idx)})`.toUpperCase()}</label>
              <input
                type="text"
                name={`offense${String.fromCharCode(65 + idx)}`}
                value={row.offense}
                onChange={e => handleRowChange(idx, 'offense', e.target.value)}
                className="form-input"
              />
            </div>
            {rows.length > 1 && (
              <button
                type="button"
                className="jbr-offenses-delete-btn"
                onClick={() => deleteRow(idx)}
              >
                Delete
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          className="jbr-offenses-add-btn"
          onClick={addRow}
        >
          + Add Crim. Case No.
        </button>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <label className="form-label">Court of Origin</label>
        <input type="text" name="courtOfOrigin" value={courtOfOrigin} onChange={handleCourtChange} className="form-input" />
      </div>
    </div>
  );
}

export default JBROffenses;
