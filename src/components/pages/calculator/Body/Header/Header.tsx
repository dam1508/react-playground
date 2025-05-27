import { useCalculatorContext } from "../../Calculator";
import "../../Calculator.css";

const ThemeButton = () => {
   const context = useCalculatorContext();
   const { setNextTheme } = context;
   return (
      <button
         onClick={event => {
            setNextTheme();
         }}
         className="ThemeButton"
      >
         Change Theme
      </button>
   );
};

const Header = () => {
   return (
      <div className="Header">
         <div>Calculator</div>
         <div>
            <ThemeButton />
         </div>
      </div>
   );
};

export default Header;
