import React from 'react';

export default ({ bgColor, children }) => (
  <div
    className='isDark'
    style={{
      width: '100%',
      height: '100%',
      backgroundColor: bgColor? bgColor : 'black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff !important'
    }}
  >
    {children}
  </div>
);
