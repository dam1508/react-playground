import React from "react";
import "../Calculator.css";
import Header from "./Header/Header";
import Display from "./Display/Display";

const Body = () => {
   return (
      <div className="Body">
         <form>
            <Header />
            <Display />
         </form>
      </div>
   );
};

export default Body;
