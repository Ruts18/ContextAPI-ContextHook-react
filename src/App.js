import "./styles.css";
import React, { createContext } from "react";
import ComA from "./ComA";
// import CompB "./CompB";
const FirstName = createContext();
const LastName = createContext();
const MiddleName = createContext();
// import CompB from "./CompB";
const App = () => {
  return (
    <>
      <FirstName.Provider value={"Ruts "}>
        <LastName.Provider value={"Pharande "}>
          <MiddleName.Provider value={"Vishwas "}>
            <ComA />;
          </MiddleName.Provider>
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};
export default App;
export { FirstName, LastName, MiddleName };
