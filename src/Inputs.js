import React, { useState } from 'react';

function Inputs() {
  const [value, setValue] = useState('');

  function funcSetValue(e){
    setValue(e.target.value)
  }
  return (
      <div>
          {Array(5).fill(1).map(() =>
            <input className={'block'} value={value} onChange={funcSetValue}/>
          )}
      </div>
  );
}

export default Inputs;