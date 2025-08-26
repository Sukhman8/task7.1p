import React from 'react';

export default function Hero() {
  return (
    <div style={{ marginTop: 10 }}>
      <img
        src="https://picsum.photos/1200/300"
        alt="Hero"
        style={{ width: '100%', height: '300px', objectFit: 'cover', border: '3px solid #222' }}
      />
    </div>
  );
}
