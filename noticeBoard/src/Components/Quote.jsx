import React, { useState, useEffect } from 'react';

const DailyQuote = () => {
  const [quote, setQuote] = useState({ text: '', author: '' });

  useEffect(() => {
    // Example list of quotes; replace with a real data source or API if needed
    const quoteData = [
      { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
      { text: 'In the end, we will remember not the words of our enemies, but the silence of our friends.', author: 'Martin Luther King Jr.' },
      { text: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.', author: 'Ralph Waldo Emerson' },
      { text: 'You must be the change you wish to see in the world.', author: 'Mahatma Gandhi' },
      { text: 'The purpose of our lives is to be happy.', author: 'Dalai Lama' },
    ];

    const today = new Date().getDate(); // Change to get the day of the month
    setQuote(quoteData[today % quoteData.length]);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg  text-center w-80 ml-8">
      <p className="text-md italic mb-2">"{quote.text}"</p>
      <p className="text-gray-600">— {quote.author}</p>
    </div>
  );
};

export default DailyQuote;
