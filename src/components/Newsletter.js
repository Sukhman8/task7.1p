import React from 'react';
import { Input, Button } from 'semantic-ui-react';

export default function Newsletter() {
  return (
    <div style={{ margin: '30px 0', textAlign: 'center' }}>
      <div style={{ background: '#dcdcdc', padding: '10px', display: 'inline-block', width: '100%' }}>
        <strong style={{ display: 'block', marginBottom: 8 }}>SIGN UP FOR OUR DAILY INSIDER</strong>
        <Input placeholder="Enter your email" style={{ width: 300 }} />
        <Button primary style={{ marginLeft: 10 }}>Subscribe</Button>
      </div>
    </div>
  );
}
