import React, { useState } from 'react';
import {
  InputNumber
} from '@/components';

function App() {
  const [value, setValue] = useState('aaa');

  return (
    <div>
      <InputNumber value={value} onChange={e => { }} /><br />
      <InputNumber defaultValue={value} onChange={e => { }} />
    </div>
  )
}

export default App;