import { Key } from "../keys";
import "../../../Calculator.css";

const Button = ({
   calculatorKey,
   createDispatch,
}: {
   calculatorKey: Key;
   createDispatch: (key: Key) => void;
}) => {
   let specialClass = "";

   specialClass =
      calculatorKey.type !== "input" ? ` ${calculatorKey.type}` : "";

   const keyClass = "CalculatorKey" + specialClass;

   return (
      <button
         className={keyClass}
         onClick={() => createDispatch(calculatorKey)}
      >
         {calculatorKey.value}
      </button>
   );
};
export default Button;
