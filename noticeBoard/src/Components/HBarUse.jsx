import React from 'react';
import HorizontalScrollBar from './HBar';


const Example = () => {
  return (
    <HorizontalScrollBar>
      <div className="inline-block w-64 rounded-xl bg-gray-200 m-2">Item 1</div>
      <div className="inline-block w-64 rounded-xl bg-gray-300 m-2">Item 2</div>
      <div className="inline-block w-64 rounded-xl bg-gray-400 m-2">Item 3</div>
      <div className="inline-block w-64 rounded-xl bg-gray-500 m-2">Item 4</div>
      <div className="inline-block w-64 rounded-xl bg-gray-600 m-2">Item 5</div>
      <div className="inline-block w-64 rounded-xl bg-gray-200 m-2">Item 1</div>
      <div className="inline-block w-64 rounded-xl bg-gray-300 m-2">Item 2</div>
      <div className="inline-block w-64 rounded-xl bg-gray-400 m-2">Item 3</div>
      <div className="inline-block w-64 rounded-xl bg-gray-500 m-2">Item 4</div>
      <div className="inline-block w-64 rounded-xl bg-gray-600 m-2">Item 5</div>
    </HorizontalScrollBar>
  );
};

export default Example;
