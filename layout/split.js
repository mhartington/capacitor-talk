import React from 'react';

export const MhSplit = ({ children, ...props }) => {
  const [first, ...rest] = React.Children.toArray(children);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width:'90%',
        textAlign: 'center'
      }}
    >
      <div style={{ width: '50%' }}>{first}</div>
      <div style={{width: '50%'}}>{rest}</div>
    </div>
  );
};

export default MhSplit;
