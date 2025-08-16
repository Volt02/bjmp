  import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import JailBookingInfo from './jbr_info';
  import JBROffenses from './jbr_offenses';
  import JBRParentInfo from './jbr_parent';
  import JBRArrestInfo from './jbr_arrest_info';
  import JBRCriminalRecords from './jbr_criminal_records';
  // Map arrest info fields to backend keys
  const mapArrestToApi = (arrest) => ({
    place_of_arrest: arrest.placeOfArrest,
    arrest_datetime: arrest.timeDateOfArrest,
    arresting_officer: arrest.arrestingOfficer,
    circumstances: arrest.circumstances,
    received_datetime: arrest.timeDateReceived,
  });
const formSteps = [
  { key: 'info', label: 'Jail Booking Report', component: JailBookingInfo },
  { key: 'offenses', label: 'Offenses', component: JBROffenses },
  { key: 'parent', label: 'Parent Information', component: JBRParentInfo },
  { key: 'arrest', label: 'Apprehension Data', component: JBRArrestInfo },
  { key: 'criminal', label: 'Criminal Records', component: JBRCriminalRecords },
];

function JBRWizard() {
  // Map parent info fields to backend keys
  const mapParentToApi = (parent) => ({
    father_name: parent.fatherName,
    father_place_of_birth: parent.fatherPlaceOfBirth,
    father_occupation: parent.fatherOccupation,
    father_address: parent.fatherAddress,
    mother_name: parent.motherName,
    mother_place_of_birth: parent.motherPlaceOfBirth,
    mother_occupation: parent.motherOccupation,
    mother_address: parent.motherAddress,
  });
  // Map offense rows to backend keys
  const mapOffensesToApi = (offenses) =>
    (offenses.rows || []).map(row => ({
      case_no: row.caseNo,
      offense_charged: row.offense,
    }));

  // Map criminal record rows to backend keys
  const mapCriminalRecordsToApi = (criminal) =>
    (criminal.records || []).map(row => ({
      case_no: row.caseNo,
      offense: row.offense,
      court: row.court,
      sentence: row.sentence,
      date_arrested: row.dateArrested,
      date_released: row.dateRelease,
      authority_release: row.authority,
    }));
  // Map camelCase form fields to snake_case for backend
  const mapInfoToApi = (info) => ({
    last_name: info.lastName,
    first_name: info.firstName,
    middle_name: info.middleName,
    alias_nickname: info.alias,
    present_address: info.presentAddress,
    city_prov_address: info.cityProvincialAddress,
    telephone_no: info.telephone,
    date_of_birth: info.dateOfBirth,
    place_of_birth: info.placeOfBirth,
    occupation: info.occupation,
    nearest_relative: info.nearestRelative,
    add_of_relative: info.addressOfRelative,
    citizenship: info.citizenship,
    no_of_children: info.noOfChildren,
    husband_wife: info.husbandWife,
    occupation_spouse: info.spouseOccupation,
    address_spouse: info.spouseAddress,
    place_of_birth_spouse: info.spousePlaceOfBirth,
    gsis_sss_pagibig_tan_tin_ctc_no: info.govIds,
    civil_status: info.civilStatus,
    prison_no: info.prisonNo,
    sex: info.sex,
    age: info.age,
    race: info.race,
    hair: info.hair,
    height: info.height,
    weight: info.weight,
    eyes: info.eyes,
    blood_type: info.bloodType,
    complexion: info.complexion,
    build: info.build,
    religion: info.religion,
    dialect_spoken: info.dialectSpoken,
    highest_educ_attain: info.education,
    skills: info.skills,
    gang_affiliation: info.gangAffiliation,
  });
  const [step, setStep] = useState(0);
  const [formState, setFormState] = useState({
    info: {},
    offenses: {},
    parent: {},
    arrest: {},
    criminal: {},
  });
  const navigate = useNavigate();

  const CurrentForm = formSteps[step].component;
  const currentKey = formSteps[step].key;

  const handleFormChange = (data) => {
    setFormState(prev => ({ ...prev, [currentKey]: data }));
  };

  const handleNext = () => {
    if (step < formSteps.length - 1) setStep(step + 1);
  };

  // Final submit: send all JBR data to backend in correct order

  const handleFinalSubmit = async () => {
    // 1. Validate JBR Info
    const requiredInfoFields = ['lastName', 'firstName', 'dateOfBirth', 'sex'];
    for (const field of requiredInfoFields) {
      if (!formState.info[field] || formState.info[field].toString().trim() === '') {
        alert('Please fill out all required fields in Personal Information.');
        return;
      }
    }

    // 2. Validate Offenses (at least one row, all fields filled)
    const offensesRows = formState.offenses && formState.offenses.rows ? formState.offenses.rows : [];
    if (offensesRows.length === 0 || offensesRows.some(row => !row.caseNo || !row.offense || row.caseNo.toString().trim() === '' || row.offense.toString().trim() === '')) {
      alert('Please fill out all required fields in Offenses.');
      return;
    }
    if (!formState.offenses.courtOfOrigin || formState.offenses.courtOfOrigin.toString().trim() === '') {
      alert('Please fill out the Court of Origin in Offenses.');
      return;
    }

    // 3. Validate Parent Info (all fields required)
    const parentFields = ['fatherName', 'fatherPlaceOfBirth', 'fatherOccupation', 'fatherAddress', 'motherName', 'motherPlaceOfBirth', 'motherOccupation', 'motherAddress'];
    for (const field of parentFields) {
      if (!formState.parent[field] || formState.parent[field].toString().trim() === '') {
        alert('Please fill out all required fields in Parent Information.');
        return;
      }
    }

    // 4. Validate Arrest Info (all fields required)
    const arrestFields = ['placeOfArrest', 'timeDateOfArrest', 'arrestingOfficer', 'circumstances', 'timeDateReceived'];
    for (const field of arrestFields) {
      if (!formState.arrest[field] || formState.arrest[field].toString().trim() === '') {
        alert('Please fill out all required fields in Apprehension Data.');
        return;
      }
    }

    // 5. Validate Criminal Records (at least one row, all fields filled)
    const criminalRows = formState.criminal && formState.criminal.records ? formState.criminal.records : [];
    if (criminalRows.length === 0 || criminalRows.some(row => !row.caseNo || !row.offense || !row.court || !row.sentence || !row.dateArrested || !row.dateRelease || !row.authority || row.caseNo.toString().trim() === '' || row.offense.toString().trim() === '' || row.court.toString().trim() === '' || row.sentence.toString().trim() === '' || row.dateArrested.toString().trim() === '' || row.dateRelease.toString().trim() === '' || row.authority.toString().trim() === '')) {
      alert('Please fill out all required fields in Previous Criminal Records.');
      return;
    }

    // If all validations pass, proceed to submit
    const arrestData = mapArrestToApi(formState.arrest || {});
    const criminalRecords = mapCriminalRecordsToApi(formState.criminal);

    try {
      // 1. Submit main JBR info
      const jbrInfoRes = await fetch('/api/jbr-info', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mapInfoToApi(formState.info)),
      });
      if (!jbrInfoRes.ok) throw new Error('Failed to save JBR Info');
      const jbrInfo = await jbrInfoRes.json();
      const jbr_info_id = jbrInfo.id;

      // 2. Submit Arrest Info
      await fetch('/api/jbr-arrest-info', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...arrestData, jbr_info_id }),
      });

      // 3. Submit Offenses
      const offenses = mapOffensesToApi(formState.offenses);
      await fetch('/api/jbr-offenses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jbr_info_id,
          offenses,
          court_origin: formState.offenses.courtOfOrigin,
        }),
      });

      // 4. Submit Criminal Records
      await fetch('/api/jbr-criminal-records', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jbr_info_id,
          records: criminalRecords,
        }),
      });

      // 5. Submit Parent Info
      await fetch('/api/jbr-parents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...mapParentToApi(formState.parent), jbr_info_id }),
      });

      alert('JBR record saved successfully!');
      navigate('/'); // Go back to homepage or wherever you want
    } catch (err) {
      alert('Error saving JBR record: ' + err.message);
    }
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
            }}
            onClick={() => navigate('/')}
          >
            <span style={{ fontSize: 22, display: 'flex', alignItems: 'center' }}>🏠</span>
            Home
          </button>
        </div>
      </div>
      <div style={{ flex: 1, padding: '40px 0 40px 0', minHeight: '100vh', paddingLeft: 280, position: 'relative' }}>
        {/* Sticky Back Button (always visible, but only in first step it appears beside sidebar) */}
        {(step === 0 || step > 0) && (
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
        )}
        <div className="header-container">
          <div className="header-card">
            <h1 className="main-title">BUREAU OF JAIL MANAGEMENT AND PENOLOGY</h1>
            <div className="sub-title">JAIL BOOKING REPORT</div>
          </div>
        </div>
        <div className="form-container">
          {/* Only render the form fields, not any internal Back button */}
          <CurrentForm
            values={formState[currentKey]}
            onChange={handleFormChange}
          />
          <div className="jbrwizard-nav-btns" style={{ marginTop: 32, display: 'flex', justifyContent: 'flex-end' }}>
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

export default JBRWizard;
