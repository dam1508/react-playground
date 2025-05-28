import { useCalculatorContext } from "../../Calculator";
import "../../Calculator.css";
import { Key, keys } from "./keys";

const Keyboard = () => {
   const context = useCalculatorContext();

   const { dispatchEquation } = context;

   const createDispatch = <T extends Key["type"]>(key: Key) => {
      dispatchEquation({
         type: "input",
         value: key.value,
      });
   };

   return (
      <div className="Keyboard">
         {keys.map(key => {
            return (
               <button
                  key={key.value}
                  onClick={() => createDispatch(key)}
               >
                  {key.value}
               </button>
            );
         })}
      </div>
   );
};

export default Keyboard;
