

import React, { useState } from 'react';

const ChatGPTBox = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

 

  return (
    <div className="mt-8 p-4 max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-4 text-center">ChatGPT Box</h1>

      <textarea 
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here"
        className="w-full h-24 p-2 border border-gray-400 rounded-lg"
      />
      <button 
        className="mt-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
      >
        Send
      </button>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Response:</h3>
        <pre className="bg-gray-200 p-4 rounded-lg">
         
          {}
        </pre>
      </div>
    </div>
  );
};

export default ChatGPTBox;
