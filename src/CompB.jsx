import "./styles.css";
import { FirstName, LastName } from "./App";

import React, { useContext } from "react";
import CompC from "./CompC";
const CompB = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);

  return (
    <h1>
      My Name Is {fname}
      {lname}
    </h1>
  );
};
export default CompB;
