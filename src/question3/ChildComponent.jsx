import React, { useState } from 'react';

export default function ChildComponent({ handleColor }) {
  const [backgroundColor, setBackgroundColor] = useState('');

  function handleChange(e) {
    const selectedColor = e.target.value;
    setBackgroundColor(selectedColor);
    handleColor(selectedColor);
  }

  return (
    <div>
      <select
        onChange={handleChange}
        style={{ backgroundColor: backgroundColor }}
      >
        <option value="red" style={{ color: 'red' }}>Red</option>
        <option value="green" style={{ color: 'green' }}>Green</option>
        <option value="blue" style={{ color: 'blue' }}>Blue</option>
      </select>
    </div>
  );
}
