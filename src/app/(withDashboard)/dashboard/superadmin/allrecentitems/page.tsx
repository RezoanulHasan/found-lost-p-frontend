import React from "react";
import AllFound from "./AllFound";
import Alllost from "./Alllost";

const page: React.FC = () => {
  return (
    <div>
      <AllFound></AllFound>
      <div className="divider  bg-black"></div>
      <Alllost></Alllost>
    </div>
  );
};

export default page;
