import SafeAbout from "@/components/SafeAbout";
import SafeHome from "@/components/SafeHome";
import SafeTable from "@/components/SafeTable";
import SafeText from "@/components/SafeText";
import React from "react";

const SafeSpark = () => {
  return (
    <main>
      <SafeHome />
      <SafeAbout />
      <SafeText />
      <SafeTable />
    </main>
  );
};

export default SafeSpark;
