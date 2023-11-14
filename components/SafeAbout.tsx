import Image from 'next/image';
import React from 'react';

const SafeAbout = () => {
  return (
    <main className='max-w-6xl mx-auto'>
      <div className="w-full md:py-[100px] ">

        <div className='flex flex-col md:flex-row gap-[2.38rem]'>
          <div className='flex items-center mb-4 md:mb-0'>
            <p className='text-[#323232] text-[1.5rem] font-medium leading-[4.375rem]'>
              As an employer or landlord, without regular PAT testing you could end up in a very serious position if an electrical accident were to happen in your premises where you would be responsible and potentially liable.
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <Image src={'/Safeabout.png'} alt='sd' width={432} height={437} />
          </div>
        </div>

        <div className='flex flex-col md:flex-row gap-[2.38rem]'>
          <div className="flex items-center justify-center">
            <Image src={'/safeabout2.png'} alt='sd' width={432} height={437} />
          </div>
          <div className='flex items-center '>
            <p className='text-[#323232] text-[1.5rem] font-medium leading-[4.375rem]'>
              We all know that portable electrical appliances can become damaged during use and over time, what we need to understand is that this damage could render the appliance dangerous without knowing it. Regular PAT testing and inspection will make sure these faulty items are dealt with at the right times and in the correct fashion.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default SafeAbout;
