import React from "react";
import { Button } from "./ui/button";


const HomeSection = () => {
  return (
    <main className=" w-full">
    <div
     className=" background-image py-[6rem] mx-auto max-w-[80rem] px-4"  >
      <div className="flex flex-col  items-center  justify-center text-center px-4 md:px-[16rem] ">
       
          <h1 className="text-[1.5rem] md:text-[3.375rem] font-[700] text-white text-center ">
           
            <span className="homeheading">SafeSpark - </span>Safety Wired, Shock Inspired.
          </h1>
          <p className="md:text-[1.125rem] text-[1rem] text-white font-[400] leading-normal">
            SafeSpark is a dedicated specialist PAT testing company in Glasgow,
            providing a professional customer focused,simple and cost effective
            solution to testing for companies, schools, educational
            institutions, landlords, letting agents and many other types of
            organisations
          </p>
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 pt-[50px]">
            <Button className="homebtn ">Contact us</Button>
            <Button className="homebutton" variant='ghost'>Read more...</Button>
          </div>
        </div>

      </div>
    
    
    </main>
  );
};

export default HomeSection;
