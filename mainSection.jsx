"use client";
import { useState } from "react";
import Card from "@/components/card.js";
import team from "@/resources/team_member_details.json";
import AlumniDropdown from "@/components/alumniDropdown";

const MainSection = ({ data }) => {
  const years = ["final_year", "pre_final_year", "sophmore", "alumni"];
  const yearsNav = {
    final_year: "Final Year",
    pre_final_year: "Pre Final Year",
    sophmore: "Sophomore",
    alumni: "Alumni",
  };
  const [currentYear, setCurrentYear] = useState(years[0]);

  //defining sub-systems order
  const subSystemOrder = [
    "Robotics",
    "Electronics",
    "Mechanical",
    "Web&Automation",
    "Creative",
    "Management"
  ];

  //checking if role === lead
  const isLead = (role) => {
    if (!role) return false;  //this is to handle cases where role might be undefined or null

    const leadKeywords = ["President", "Vice President", "Secretary", "Lead"];

    return leadKeywords.some(keyword => role.includes(keyword));
  };

  // this variable will hold the sorted list based on the selected year
  let sortedTeam;

  if (currentYear === "alumni") {
    // for alumni, using data directly without sorting as they are already grouped by graduation year
    sortedTeam = team.alumni;
  } else {
    // for other years, applyig the sorting hierarchy (role -> subsystem)
    sortedTeam = team[currentYear]?.slice().sort((a, b) => {
      const aIsLead = isLead(a.role);
      const bIsLead = isLead(b.role);

    //1. leads should be above members
    if (aIsLead && !bIsLead) return -1; //a comes first
    if (!aIsLead && bIsLead) return 1;  //b comes first

    //2. sort based on sub-system order if roles are in same category(both leads or both members)
    const indexA = subSystemOrder.indexOf(a.sub_system);  //if not found, index will be -1
    const indexB = subSystemOrder.indexOf(b.sub_system);  //if not found, index will be -1
    
    // Handle subsystems not in our defined order by placing them at the end
    const effectiveIndexA = indexA === -1 ? Infinity : indexA;
    const effectiveIndexB = indexB === -1 ? Infinity : indexB;

    return effectiveIndexA - effectiveIndexB;
    });
  }

  return (
    <div className="flex flex-col gap-y-2 py-2 sm:gap-y-6 sm:py-6">
      <div className="flex text-nowrap  px-4 gap-1 bg-[r ed] sm:justify-center overflow-x-auto">
        {years.map((element, index) => (
          <div
            key={index}
            className={`bg-[#1e1e1e] text-white text-sm md:text-xl py-2 px-4 text-center align-middle justify-center ${
              currentYear === element ? "border-[#3f3f3f]" : "border-[#242424]"
            } border-2 rounded-[0.25rem] m-1 p-1 hover:cursor-pointer w-[120px] md:w-[150px]`}
            onClick={() => setCurrentYear(element)}
          >
            {yearsNav[element] || element}
          </div>
        ))}
      </div>

      <div className="flex flex-col text-white  rounded-md bg-[b lue]">
        {currentYear === "alumni" ? (
          <AlumniDropdown props={sortedTeam} />
        ) : (
          <div className="flex flex-wrap justify-center align-middle gap-x-4 gap-y-4 py-4 my-2">

            {/*Map over new sortedTeam array */}
            {sortedTeam?.map((item, index) => (
              <Card key={index} data={item} />

            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainSection;
