import { useState } from "react";
import "./Playground.css";

const Playground = () => {
   const [, setUpdate] = useState(1);
   const test = "abc+";

   if (!test.match(/d/)) {
      console.log("found");
   }

   return (
      <div className="Playground">
         <div
            className="test"
            data-theme="aha"
         >
            <div className="test2"></div>
         </div>
      </div>
   );
};

export default Playground;
