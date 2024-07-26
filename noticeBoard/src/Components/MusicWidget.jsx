// src/components/MusicWidgets.jsx
import React from 'react';

const MusicWidgets = () => (
  <div style={styles.container}>
    <div style={styles.widget}>
      <h3 style={styles.title}>Spotify Playlist</h3>
      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"
        width="100%"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        style={styles.iframe}
        title="Spotify Playlist"
      ></iframe>
    </div>

    
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  widget: {
    width: '100%',
    maxWidth: '600px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '10px',
    fontSize: '1.5em',
    color: '#333',
  },
  iframe: {
    borderRadius: '10px',
    border: '1px solid #ddd',
  },
};

export default MusicWidgets;
