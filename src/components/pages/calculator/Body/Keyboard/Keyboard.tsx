import { useCalculatorContext } from "../../Calculator";
import "../../Calculator.css";
import Button from "./Button/Button";
import { Key, keys } from "./keys";

const Keyboard = () => {
   const context = useCalculatorContext();

   const { dispatchEquation } = context;

   const createDispatch = (key: Key) => {
      dispatchEquation({
         type: key.type,
         value: key.value,
      });
   };

   return (
      <div className="Keyboard">
         {keys.map(key => {
            return (
               <Button
                  key={key.value}
                  calculatorKey={key}
                  createDispatch={createDispatch}
               />
            );
         })}
      </div>
   );
};

export default Keyboard;
