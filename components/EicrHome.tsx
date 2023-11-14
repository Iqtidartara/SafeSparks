import React from 'react';

const EicrHome = () => {
  return (
    <main className='w-full'>
      <div className='max-w-5xl mx-auto py-16'>
        <div className='flex flex-col items-center gap-6'>
          <h1 className='legisH1 text-[3rem] md:text-[3rem] lg:text-[3rem] font-bold text-center leading-normal'>
          EICR
          </h1>
          <p className='text-center text-[#323232] text-[1.5rem] md:text-[1.5rem] lg:text-[1.5rem] font-medium leading-normal'>
          We also carry out EICR reports at a set price per circuit (no minimum charge)
          </p>
        </div>
      </div>
    </main>
  );
};

export default EicrHome;
