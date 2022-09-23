import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <p style={{ color: '#f0c000' }}>Count Value: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ background: 'red', color: '#000', width: '100px' }}
      >
        +
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ background: 'red', color: '#000', width: '100px' }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
