import "./styles.css";
import React from "react";
import { FirstName } from "./App";
import { LastName } from "./App";
const CompC = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => {
          return (
            <LastName.Consumer>
              {(lname) => {
                return (
                  <h1>
                    My Name is {fname}
                    {lname}
                  </h1>
                );
              }}
            </LastName.Consumer>
          );
        }}
      </FirstName.Consumer>
    </>
  );
};
export default CompC;
