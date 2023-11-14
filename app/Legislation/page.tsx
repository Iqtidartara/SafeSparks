import LegisAbout from '@/components/LegisAbout'; // Import LegisAbout component
import LegisHome from '@/components/LegisHome';
import LegisText from '@/components/LegisText';
import React from 'react';

const Legislation = () => {
  return (
    <div className='w-full'>
      <LegisHome />
      <LegisAbout />
      <LegisText />
    </div>
  );
}

export default Legislation;
