import React from "react";
import "../Calculator.css";
import Header from "./Header/Header";
import Display from "./Display/Display";

const Body = () => {
   return (
      <div className="Body">
         <form
            onSubmit={e => {
               e.preventDefault();
            }}
         >
            <Header />
            <Display />
         </form>
      </div>
   );
};

export default Body;
