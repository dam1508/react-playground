import "../../Calculator.css";
import { useCalculatorContext } from "../../Calculator";

const Display = () => {
   const context = useCalculatorContext();
   const {
      equation: { sentence },
      theme,
   } = context;

   return (
      <>
         <input
            readOnly
            value={sentence}
            name="equation"
            hidden
         />

         <div
            className="Display"
            data-theme={theme}
         >
            {sentence}
         </div>
      </>
   );
};

export default Display;
