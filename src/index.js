import React, { useContext } from 'react';

const renderType = {
  'boolean': val => {
    return val ? 'true' : 'false'
  },
  'object': val => {
    return JSON.stringify(val);
  },
  'function': () => {
    return 'function';
  }
}

const formatValue = val => {
  if(val === null){
    return 'null';
  }

  const type = typeof val;

  if(!renderType.hasOwnProperty(type)){
    return val;
  }

  return renderType[type](val);
}

export default ({ Context }) => {
  const { state } = useContext(Context);

  return (
    <div>
      {
        Object.keys(state).map(s => {
          return (
            <div
              key={`test-element_${s}`}
              data-testid={s}>{formatValue(state[s])}</div>
          );
        })
      }
    </div>
  );
}