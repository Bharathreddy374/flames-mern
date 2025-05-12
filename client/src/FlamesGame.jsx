import React, { useState } from 'react';

const FlamesGame = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const flamesMap = ['Friends', 'Love', 'Affection', 'Marriage', 'Enemies', 'Siblings'];

  const calculateFlames = async () => {
    let n1 = name1.toLowerCase().replace(/\s/g, '');
    let n2 = name2.toLowerCase().replace(/\s/g, '');

    for (let i = 0; i < n1.length; i++) {
      const char = n1[i];
      const index = n2.indexOf(char);
      if (index !== -1) {
        n1 = n1.replace(char, '');
        n2 = n2.slice(0, index) + n2.slice(index + 1);
        i--;
      }
    }

    const total = n1.length + n2.length;
    let flames = [...flamesMap];

    let idx = 0;
    while (flames.length > 1) {
      idx = (idx + total - 1) % flames.length;
      flames.splice(idx, 1);
    }

    const relationship = flames[0];
    setResult(relationship);

    try {
      await fetch('http://localhost:5000/api/flames/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name1, name2, result: relationship })
      });
    } catch (error) {
      console.error('Error saving to database:', error);
    }
  };

return (
    <div className="flames">
        <h1 className="flames-heading">FLAMES</h1>
        <p className='caption'>Find Your Relation</p>
        <input
            type="text"
            placeholder="Enter first name"
            className="name1"
            value={name1}
            onChange={(e) => setName1(e.target.value)}
        />
        <input
            type="text"
            placeholder="Enter second name"
            className="name2"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
        />
        <button
            className="boom-btn"
            onClick={() => {
                if (!name1 || !name2) {
                    setResult('Please enter both names');
                } else {
                    calculateFlames();
                }
            }}
        >
            Calculate
        </button>
        {result && (
            <div className="result">
                    {result}
            </div>
        )}
    </div>
);
};

export default FlamesGame;