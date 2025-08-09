import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/jbr_info.css';

function JailBookingInfo() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    middleName: '',
    alias: '',
    presentAddress: '',
    cityProvincialAddress: '',
    telephone: '',
    dateOfBirth: '',
    placeOfBirth: '',
    occupation: '',
    nearestRelative: '',
    addressOfRelative: '',
    citizenship: '',
    noOfChildren: '',
    husbandWife: '',
    spouseOccupation: '',
    spouseAddress: '',
    spousePlaceOfBirth: '',
    govIds: '',
    civilStatus: '',
    prisonNo: '',
    sex: '',
    age: '',
    race: '',
    hair: '',
    height: '',
    weight: '',
    eyes: '',
    bloodType: '',
    complexion: '',
    build: '',
    religion: '',
    dialectSpoken: '',
    education: '',
    skills: '',
    gangAffiliation: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Map frontend fields to backend fields
    const payload = {
      last_name: formData.lastName,
      first_name: formData.firstName,
      middle_name: formData.middleName,
      alias_nickname: formData.alias,
      present_address: formData.presentAddress,
      city_prov_address: formData.cityProvincialAddress,
      telephone_no: formData.telephone,
      date_of_birth: formData.dateOfBirth,
      place_of_birth: formData.placeOfBirth,
      occupation: formData.occupation,
      nearest_relative: formData.nearestRelative,
      add_of_relative: formData.addressOfRelative,
      citizenship: formData.citizenship,
      no_of_children: formData.noOfChildren,
      husband_wife: formData.husbandWife,
      occupation_spouse: formData.spouseOccupation,
      address_spouse: formData.spouseAddress,
      place_of_birth_spouse: formData.spousePlaceOfBirth,
      gsis_sss_pagibig_tan_tin_ctc_no: formData.govIds,
      civil_status: formData.civilStatus,
      prison_no: formData.prisonNo,
      sex: formData.sex,
      age: formData.age,
      race: formData.race,
      hair: formData.hair,
      height: formData.height,
      weight: formData.weight,
      eyes: formData.eyes,
      blood_type: formData.bloodType,
      complexion: formData.complexion,
      build: formData.build,
      religion: formData.religion,
      dialect_spoken: formData.dialectSpoken,
      highest_educ_attain: formData.education,
      skills: formData.skills,
      gang_affiliation: formData.gangAffiliation,
    };
    try {
      const res = await fetch('http://localhost:8000/api/jbr-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const err = await res.json();
        alert('Error: ' + (err.message || JSON.stringify(err)));
        return;
      }
      await res.json();
      alert('Saved successfully!');
      setFormData({
        lastName: '',
        firstName: '',
        middleName: '',
        alias: '',
        presentAddress: '',
        cityProvincialAddress: '',
        telephone: '',
        dateOfBirth: '',
        placeOfBirth: '',
        occupation: '',
        nearestRelative: '',
        addressOfRelative: '',
        citizenship: '',
        noOfChildren: '',
        husbandWife: '',
        spouseOccupation: '',
        spouseAddress: '',
        spousePlaceOfBirth: '',
        govIds: '',
        civilStatus: '',
        prisonNo: '',
        sex: '',
        age: '',
        race: '',
        hair: '',
        height: '',
        weight: '',
        eyes: '',
        bloodType: '',
        complexion: '',
        build: '',
        religion: '',
        dialectSpoken: '',
        education: '',
        skills: '',
        gangAffiliation: '',
      });
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar Navigation */}
      <div className="jbr-info-sidebar">
        <button
          className={`tab-button${location.pathname === '/jbr-info' ? ' active' : ''}`}
          onClick={() => navigate('/jbr-info')}
        >
          Jail Booking Report
        </button>
        <button
          className={`tab-button${location.pathname === '/jbr-offenses' ? ' active' : ''}`}
          onClick={() => navigate('/jbr-offenses')}
        >
          Offenses
        </button>
        <button
          className={`tab-button${location.pathname === '/jbr-parent' ? ' active' : ''}`}
          onClick={() => navigate('/jbr-parent')}
        >
          Parent Information
        </button>
        <button
          className={`tab-button${location.pathname === '/jbr-arrest-info' ? ' active' : ''}`}
          onClick={() => navigate('/jbr-arrest-info')}
        >
          Apprehension Data
        </button>
        <button
          className={`tab-button${location.pathname === '/jbr-criminal-records' ? ' active' : ''}`}
          onClick={() => navigate('/jbr-criminal-records')}
        >
          Criminal Records
        </button>
      </div>
      {/* Main Content */}
      <div className="jbr-container" style={{ flex: 1 }}>
        <button onClick={() => navigate('/')} className="back-button">← Back</button>
        <div className="header-container">
          <div className="header-card">
            <h1 className="main-title">BUREAU OF JAIL MANAGEMENT AND PENOLOGY</h1>
            <div className="sub-title">JAIL BOOKING REPORT</div>
          </div>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h3 className="section-title"><span className="section-accent"></span>Personal Information</h3>
            <div className="form-grid">
              <div>
                <label className="form-label">Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Middle Name</label>
                <input type="text" name="middleName" value={formData.middleName} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Alias/Nickname</label>
                <input type="text" name="alias" value={formData.alias} onChange={handleInputChange} className="form-input" />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Present Address</label>
                <input type="text" name="presentAddress" value={formData.presentAddress} onChange={handleInputChange} className="form-input" />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">City/Provincial Address</label>
                <input type="text" name="cityProvincialAddress" value={formData.cityProvincialAddress} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Telephone No/s</label>
                <input type="text" name="telephone" value={formData.telephone} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Date of Birth</label>
                <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Place of Birth</label>
                <input type="text" name="placeOfBirth" value={formData.placeOfBirth} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Occupation</label>
                <input type="text" name="occupation" value={formData.occupation} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Nearest Relative</label>
                <input type="text" name="nearestRelative" value={formData.nearestRelative} onChange={handleInputChange} className="form-input" />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Address of Relative</label>
                <input type="text" name="addressOfRelative" value={formData.addressOfRelative} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Citizenship</label>
                <input type="text" name="citizenship" value={formData.citizenship} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">No. of Children</label>
                <input type="number" name="noOfChildren" value={formData.noOfChildren} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Husband/Wife</label>
                <input type="text" name="husbandWife" value={formData.husbandWife} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Occupation (Spouse)</label>
                <input type="text" name="spouseOccupation" value={formData.spouseOccupation} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Address (Spouse)</label>
                <input type="text" name="spouseAddress" value={formData.spouseAddress} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Place of Birth (Spouse)</label>
                <input type="text" name="spousePlaceOfBirth" value={formData.spousePlaceOfBirth} onChange={handleInputChange} className="form-input" />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">GSIS/SSS/PAG-IBIG/TAN/TIN/CTC No</label>
                <input type="text" name="govIds" value={formData.govIds} onChange={handleInputChange} className="form-input" />
              </div>
            </div>

            <h3 className="section-title"><span className="section-accent"></span>Physical & Demographic Information</h3>
            <div className="form-grid">
              <div>
                <label className="form-label">Civil Status</label>
                <input type="text" name="civilStatus" value={formData.civilStatus} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Prison No</label>
                <input type="text" name="prisonNo" value={formData.prisonNo} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Sex</label>
                <select name="sex" value={formData.sex} onChange={handleInputChange} className="form-input">
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <label className="form-label">Age</label>
                <input type="number" name="age" value={formData.age} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Race</label>
                <input type="text" name="race" value={formData.race} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Hair</label>
                <input type="text" name="hair" value={formData.hair} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Height</label>
                <input type="text" name="height" value={formData.height} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Weight</label>
                <input type="text" name="weight" value={formData.weight} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Eyes</label>
                <input type="text" name="eyes" value={formData.eyes} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Blood Type</label>
                <input type="text" name="bloodType" value={formData.bloodType} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Complexion</label>
                <input type="text" name="complexion" value={formData.complexion} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Build</label>
                <input type="text" name="build" value={formData.build} onChange={handleInputChange} className="form-input" />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label className="form-label">Religion</label>
                <input type="text" name="religion" value={formData.religion} onChange={handleInputChange} className="form-input" />
              </div>
            </div>

            <h3 className="section-title"><span className="section-accent"></span>Other Information</h3>
            <div className="form-grid">
              <div>
                <label className="form-label">Dialect Spoken</label>
                <input type="text" name="dialectSpoken" value={formData.dialectSpoken} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Highest Educ'l Attainment</label>
                <input type="text" name="education" value={formData.education} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Skill/s</label>
                <input type="text" name="skills" value={formData.skills} onChange={handleInputChange} className="form-input" />
              </div>
              <div>
                <label className="form-label">Gang Affiliation</label>
                <input type="text" name="gangAffiliation" value={formData.gangAffiliation} onChange={handleInputChange} className="form-input" />
              </div>
            </div>

            <div className="submit-button-container">
              <button type="submit" className="submit-button">
                <span className="submit-button-text">Save Jail Booking Report</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default JailBookingInfo;