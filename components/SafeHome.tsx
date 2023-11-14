import React from 'react';

const SafeHome = () => {
  return (
    <main className='w-full'>
      <div className='max-w-5xl mx-auto py-16'>
        <div className='flex flex-col items-center gap-6'>
          <h1 className='legisH1 text-[3rem] md:text-[3rem] lg:text-[3rem] font-bold text-center leading-normal'>
          Why SafeSpark ?
          </h1>
          <p className='text-center text-[#323232] text-[1.5rem] md:text-[1.5rem] lg:text-[1.5rem] font-medium leading-normal'>
          The Health and Safety Executive claimed that more then 2000 thousand fires were caused by faulty electrical appliances in any single year. The governing law is there in the interests of employers, employees and tenants of rented accommodation, it is there to protect all <br/> users of portable electrical equipment.<br/>
PAT testing is not strictly compulsory, but is regarded as the best way of abiding by electrical regulations that exist to protect employees, customers and tenants.
          </p>
        </div>
      </div>
    </main>
  );
};

export default SafeHome;
