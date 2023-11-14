import React from "react";
import Image from "next/image";

const LegisAbout = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="w-full md:py-[100px]">
        <div className="flex flex-col-reverse lg:flex-row justify-between">
          <div className="w-full lg:w-[64%] max-md:w-full max-md:ml-0">
            <div className="text-[#323232] text-[1.5rem] font-medium leading-[2.4375rem;] w-full ">
              Portable appliance testing is a major contributor to ensuring safety at all times, and will enable your business to comply with legal standards. Failure to implement a program of regular appliance testing can lead to serious consequences, as well as affecting insurance policies, as most insurance companies will assume that the owners of a business are compliant with all relevant regulations. These insurers are fully entitled to reduce, delay, or even refuse to pay on a claim for damage caused by a portable appliance that has not been PAT tested.
              <br />
              <br />
              The legislation of specific relevance to electrical maintenance is –
            </div>
          </div>
          <div className="w-full lg:w-[36%] lg:ml-5 max-md:w-full max-md:ml-0">
            <Image
              src="/Legisabout.png"
              alt="Mde"
              width={432}
              height={437}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegisAbout;
