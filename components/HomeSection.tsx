import React from "react";
import { Button } from "./ui/button";


const HomeSection = () => {
  return (
    <main className=" w-full">
    <div
     className=" background-image py-[6rem] mx-auto max-w-6xl ">
      <div className="flex items-center  justify-center ">
        <div className="w-1/2 ">
          <h1 className="text-[2.5rem] md:text-[3.375rem] font-[700] text-white ">
           
            <span className="homeheading">SafeSpark - </span>Safety Wired, Shock Inspired.
          </h1>
          <p className="font-[1.125rem] text-white text-[400] leading-normal">
            SafeSpark is a dedicated specialist PAT testing company in Glasgow,
            providing a professional customer focused,simple and cost effective
            solution to testing for companies, schools, educational
            institutions, landlords, letting agents and many other types of
            organisations
          </p>
          <div className="flex gap-5 pt-[50px]">
            <Button className="homebtn">Contact us</Button>
            <Button className="homebutton" variant='ghost'>Read more...</Button>
          </div>
        </div>
        <div className="w-1/3"></div>
      </div>
    </div>
    
    </main>
  );
};

export default HomeSection;
