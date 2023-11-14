import Image from "next/image";
import React from "react";

const EcirAbout = () => {
  return (
    <main className="max-w-6xl mx-auto">
      <div className="w-full md:py-[100px]">
        <div className="flex flex-col md:flex-row gap-[2.38rem] my-4">
          <div className="flex flex-col gap-[1.25rem] text-center md:text-left md:w-[60%]">
            <h1 className="legisH1">What is EICR report?</h1>
            <p className="text-[#646464] text-[1.5rem] font-medium leading-normal">
              What is the aim of a condition report? The five main aims of a
              condition report are: Record the results of the inspection and
              testing to make sure the electrical installation is safe to be
              used until the next inspection (following any work needed to make
              it safe) Find any damage and wear and tear that might affect
              safety, and report it Find any parts of the electrical
              installation that do not meet the IEE Wiring Regulations Help find
              anything that may cause electric shocks and high temperatures
              Provide and important record of the installation at the time of
              the inspection, and for inspection testing in the future.
            </p>
          </div>
          <div className="flex items-center justify-center md:w-[40%]">
            <Image src={"/eicrabout.png"} alt="sd" width={432} height={437} />
          </div>
        </div>

        <div className="md:py-[100px] flex flex-col gap-[1.25rem] text-center md:text-left">
          <h1 className="legisH1">Types of condition report</h1>
          <p className="text-[#646464] text-[1.5rem] font-medium uppercase">
            In general, there are two types of domestic electrical installation
            condition report: Visual condition report - this does not include
            testing and is only suitable if the installation has been testing
            recently.
            <br />
            Periodic inspection reports - this is what we would normally
            recommend, as it tests the installation and would find any hidden
            damage
            <br />
            EICR is required at least every five years on a domestic property.
          </p>
        </div>
      </div>
    </main>
  );
};

export default EcirAbout;
