// src/components/GoogleMeetWidget.jsx
import React from 'react';

const GoogleMeetWidget = () => (
  <div style={{ textAlign: 'center', marginTop: '20px' }}>
    <h3>Join the Google Meet</h3>
    <a
      href="https://meet.google.com/your-meet-code"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-block',
        padding: '10px 20px',
        color: '#fff',
        backgroundColor: '#4285f4',
        borderRadius: '5px',
        textDecoration: 'none',
        fontWeight: 'bold',
      }}
    >
      Click here to join the meeting
    </a>
  </div>
);

export default GoogleMeetWidget;
