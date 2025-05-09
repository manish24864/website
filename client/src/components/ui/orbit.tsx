import React from 'react';

const Orbit: React.FC = () => {
  return (
    <div className="orbit absolute opacity-30" style={{ zIndex: 0 }}>
      <div className="electron electron-1"></div>
      <div className="electron electron-2"></div>
      <div className="electron electron-3"></div>
    </div>
  );
};

export default Orbit;
