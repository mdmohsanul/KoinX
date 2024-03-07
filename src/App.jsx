import React from "react";
import Navbar from "./components/Navbar";
import Chart from "./components/Chart";
import "./global.css";
import NavMenu from "./components/NavMenu";

const App = () => {
  return (
    <>
      <Navbar />
      <Chart />
      <NavMenu />
    </>
  );
};

export default App;
