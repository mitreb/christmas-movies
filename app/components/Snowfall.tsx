'use client';

import ReactSnowfall from 'react-snowfall';

interface SnowfallProps {
  children: React.ReactNode;
}

const Snowfall = ({ children }: SnowfallProps) => {
  return (
    <div className="relative">
      <ReactSnowfall style={{ zIndex: 50 }} />
      {children}
    </div>
  );
};

export default Snowfall;
