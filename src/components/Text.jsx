import React from 'react';

const Text = ({ style, className, children }) => {
  return (
    <p style={style} className={className}>
      {children}
    </p>
  );
};

export default Text;
