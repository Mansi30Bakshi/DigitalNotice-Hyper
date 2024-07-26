// src/components/MusicWidgets.jsx
import React from 'react';

const MusicWidgets = () => (
  <div className="music-widgets bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-xs">
    <div className="widget">
      <h3 className="text-lg mb-4">Spotify Playlist</h3>
      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"
        width="100%"
        height="380"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
        className="rounded-lg border-2 border-gray-200"
        title="Spotify Playlist"
      ></iframe>
    </div>
  </div>
);

export default MusicWidgets;
