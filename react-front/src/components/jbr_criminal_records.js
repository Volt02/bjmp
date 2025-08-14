
import React from 'react';
import '../css/jbr_info.css';
import '../css/jbr_criminal_records.css';

function JBRCriminalRecords({ values = {}, onChange }) {
  const records = values?.records && values.records.length > 0 ? values.records : [{ caseNo: '', offense: '', court: '', sentence: '', dateArrested: '', dateRelease: '', authority: '' }];
  const remanded = values?.remanded && values.remanded.length > 0 ? values.remanded : [{ letter: 'a', sc: '', br: '' }];

  // Add/delete logic for records
  const addRecordRow = () => {
    if (onChange) onChange({ records: [...records, { caseNo: '', offense: '', court: '', sentence: '', dateArrested: '', dateRelease: '', authority: '' }], remanded });
  };
  const deleteRecordRow = (idx) => {
    if (records.length === 1) return;
    const updated = records.filter((_, i) => i !== idx);
    if (onChange) onChange({ records: updated, remanded });
  };

  // Add/delete logic for remanded
  const addRemandedRow = () => {
    const nextLetter = String.fromCharCode(97 + remanded.length);
    if (onChange) onChange({ records, remanded: [...remanded, { letter: nextLetter, sc: '', br: '' }] });
  };
  const deleteRemandedRow = (idx) => {
    if (remanded.length === 1) return;
    const updated = remanded.filter((_, i) => i !== idx);
    if (onChange) onChange({ records, remanded: updated });
  };

  const handleRecordChange = (idx, e) => {
    const { name, value } = e.target;
    const updated = records.map((rec, i) => i === idx ? { ...rec, [name]: value } : rec);
    if (onChange) onChange({ records: updated, remanded });
  };

  const handleRemandedChange = (idx, e) => {
    const { name, value } = e.target;
    const updated = remanded.map((row, i) => i === idx ? { ...row, [name]: value } : row);
    if (onChange) onChange({ records, remanded: updated });
  };

  return (
    <div className="form-container">
      <h3 className="section-title"><span className="section-accent"></span>Previous Criminal Records</h3>
      <div className="jbr-criminal-table-container">
        <table className="jbr-criminal-table">
          <thead>
            <tr>
              <th>Criminal Case No/s</th>
              <th>Offense/s</th>
              <th>Court</th>
              <th>Sentence</th>
              <th>Date Arrested</th>
              <th>Date Release</th>
              <th>Authority for Release</th>
              <th style={{ width: '60px' }}></th>
            </tr>
          </thead>
          <tbody>
            {records.map((rec, idx) => (
              <tr key={idx}>
                <td><input type="text" name="caseNo" value={rec.caseNo} onChange={e => handleRecordChange(idx, e)} className="form-input" /></td>
                <td><input type="text" name="offense" value={rec.offense} onChange={e => handleRecordChange(idx, e)} className="form-input" /></td>
                <td><input type="text" name="court" value={rec.court} onChange={e => handleRecordChange(idx, e)} className="form-input" /></td>
                <td><input type="text" name="sentence" value={rec.sentence} onChange={e => handleRecordChange(idx, e)} className="form-input" /></td>
                <td><input type="text" name="dateArrested" value={rec.dateArrested} onChange={e => handleRecordChange(idx, e)} className="form-input" /></td>
                <td><input type="text" name="dateRelease" value={rec.dateRelease} onChange={e => handleRecordChange(idx, e)} className="form-input" /></td>
                <td><input type="text" name="authority" value={rec.authority} onChange={e => handleRecordChange(idx, e)} className="form-input" /></td>
                <td>
                  {records.length > 1 && (
                    <button
                      type="button"
                      className="jbr-criminal-delete-btn"
                      onClick={() => deleteRecordRow(idx)}
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          type="button"
          className="jbr-criminal-add-btn"
          onClick={addRecordRow}
        >
          + Add Previous Criminal Record
        </button>
      </div>
      <h4 className="section-title" style={{marginTop:'32px'}}><span className="section-accent"></span>Remanded to RTC</h4>
      <div className="jbr-criminal-table-container">
        <table className="jbr-criminal-table">
          <thead>
            <tr>
              <th style={{width:'40px'}}> </th>
              <th>SC-</th>
              <th>Br</th>
              <th style={{ width: '60px' }}></th>
            </tr>
          </thead>
          <tbody>
            {remanded.map((row, idx) => (
              <tr key={row.letter}>
                <td>{row.letter}</td>
                <td><input type="text" name="sc" value={row.sc} onChange={e => handleRemandedChange(idx, e)} className="form-input" /></td>
                <td><input type="text" name="br" value={row.br} onChange={e => handleRemandedChange(idx, e)} className="form-input" /></td>
                <td>
                  {remanded.length > 1 && (
                    <button
                      type="button"
                      className="jbr-criminal-delete-btn"
                      onClick={() => deleteRemandedRow(idx)}
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          type="button"
          className="jbr-criminal-add-btn"
          onClick={addRemandedRow}
        >
          + Add Remanded to RTC
        </button>
      </div>
    </div>
  );
}

export default JBRCriminalRecords;
