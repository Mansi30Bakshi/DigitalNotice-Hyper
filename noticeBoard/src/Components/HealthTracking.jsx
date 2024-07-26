// src/components/HealthTrackerWidget.jsx
import React, { useState } from 'react';

const HealthTrackerWidget = () => {
  const [steps, setSteps] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const [calories, setCalories] = useState('');

  const handleStepsChange = (e) => setSteps(e.target.value);
  const handleHeartRateChange = (e) => setHeartRate(e.target.value);
  const handleCaloriesChange = (e) => setCalories(e.target.value);

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Health & Steps Tracker</h3>
      <div style={styles.metric}>
        <span style={styles.metricLabel}>Steps:</span>
        <input
          type="number"
          value={steps}
          onChange={handleStepsChange}
          style={styles.input}
          placeholder="Enter steps"
        />
      </div>
      <div style={styles.metric}>
        <span style={styles.metricLabel}>Heart Rate:</span>
        <input
          type="number"
          value={heartRate}
          onChange={handleHeartRateChange}
          style={styles.input}
          placeholder="Enter heart rate (bpm)"
        />
      </div>
      <div style={styles.metric}>
        <span style={styles.metricLabel}>Calories Burned:</span>
        <input
          type="number"
          value={calories}
          onChange={handleCaloriesChange}
          style={styles.input}
          placeholder="Enter calories burned"
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '400px',
    margin: '0 auto',
  },
  title: {
    marginBottom: '20px',
    fontSize: '1.5em',
    color: '#333',
  },
  metric: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#f4f4f4',
  },
  metricLabel: {
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    width: '100px',
    padding: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
};

export default HealthTrackerWidget;
