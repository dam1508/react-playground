import React from "react";
import "../Calculator.css";
import Header from "./Header/Header";
import Display from "./Display/Display";
import Keyboard from "./Keyboard/Keyboard";

const Body = () => {
   return (
      <div className="Body">
         <form
            onSubmit={event => {
               event.preventDefault();
            }}
         >
            <Header />
            <Display />
            <Keyboard />
         </form>
      </div>
   );
};

export default Body;
