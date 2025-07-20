import React from 'react';
import { useNavigate } from 'react-router-dom';

function JailBookingReport() {
  const navigate = useNavigate();

  return (
    <div className="blank-page">
      <button 
        className="back-btn" 
        onClick={() => navigate('/')}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        ← Back
      </button>
      <h2>Jail Booking Report</h2>
    </div>
  );
}

export default JailBookingReport; 