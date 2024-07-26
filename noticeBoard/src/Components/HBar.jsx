import React from 'react';

const HorizontalScrollBar = ({ children }) => {
  return (
    <div className="overflow-x-auto whitespace-nowrap border border-gray-300 p-2">
      <div className="inline-block">
        {children}
      </div>
    </div>
  );
};

export default HorizontalScrollBar;
