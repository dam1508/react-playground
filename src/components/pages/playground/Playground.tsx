import { useState } from "react";
import "./Playground.css";
import { redirect, useLocation, useNavigate } from "react-router-dom";

const Playground = () => {
   const [, setUpdate] = useState(1);
   const [text, setText] = useState<string>("");
   const location = useLocation();
   const navigate = useNavigate();
   const test = "abc+";

   console.log(location.pathname);
   const handleType = (event: React.ChangeEvent<HTMLInputElement>) => {
      let newValue = event.target.value.replace(/\D/g, "");
      let newValueArray = newValue.split("");

      if (newValue.length > 3) {
         newValueArray.splice(3, 0, ")");
         newValueArray.splice(0, 0, "(");
      }

      if (newValue.length > 6) {
         newValueArray.splice(8, 0, "-");
      }

      newValueArray.at(-1)?.match(/[\D]/) ?? setText(newValueArray.join(""));
   };

   return (
      <div className="Playground">
         <input
            type="text"
            value={text}
            onInput={handleType}
            className="Input"
         />
         <button
            onClick={() => setText("")}
            className="reset"
         >
            Reset
         </button>
         <button
            onClick={() =>
               navigate(location.pathname + "/calculator", { replace: false })
            }
         >
            Calc
         </button>
      </div>
   );
};

export default Playground;
