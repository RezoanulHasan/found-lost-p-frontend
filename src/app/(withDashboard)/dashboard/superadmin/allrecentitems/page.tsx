import React from "react";
import AllFound from "./AllFound";
import Alllost from "./Alllost";

const page: React.FC = () => {
  return (
    <div>
      <AllFound></AllFound>
      <div className="divider  bg-teal-500"></div>
      <Alllost></Alllost>
    </div>
  );
};

export default page;
