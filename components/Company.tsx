import Image from 'next/image';
import React from 'react';

const Company = () => {
  return (
    <main className='w-full bg-[#FFF]'>
      <div className='mx-auto max-w-6xl'>
        <div className="homelogo flex flex-col md:flex-row p-5 md:p-10 justify-between items-center mx-auto">
          <Image src='/1.png' alt="1" width={100} height={100} className="aspect-square mb-2 md:mb-0 md:mr-2" />
          <Image src='/2.png' alt="2" width={100} height={100} className="aspect-square mb-2 md:mb-0 md:mx-2" />
          <Image src='/3.png' alt="3" width={100} height={100} className="aspect-square" />
        </div>
      </div>
    </main>
  );
};

export default Company;
