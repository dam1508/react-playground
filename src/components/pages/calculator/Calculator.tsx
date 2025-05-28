import Body from "./Body/Body";
import "./Calculator.css";
import { createContext, use, useReducer, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Theme, themes } from "./themes/themes";
import { Actions } from "./Body/Keyboard/keys";

type Equation = {
   sentence: string;
   result: number | undefined;
};

type CalculatorContextType = {
   theme: Theme;
   equation: Equation;
   setNextTheme: () => void;
   dispatchEquation: React.ActionDispatch<[action: Actions]>;
};

const CalculatorContext = createContext<CalculatorContextType | null>(null);

const CalculatorProvider = ({ children }: { children: React.ReactNode }) => {
   const updateEquation = (prevState: Equation, action: Actions) => {
      const { type } = action;

      switch (type) {
         case "input":
            return {
               ...prevState,
               sentence: prevState.sentence.concat(action.value),
            };
         case "delete":
            return {
               ...prevState,
               sentence: prevState.sentence.slice(0, -1),
            };
         case "reset":
            return {
               ...prevState,
               sentence: "",
            };
         case "submit":
            return {
               ...prevState,
               result: 100,
            };
      }
   };

   const [theme, setTheme] = useState<Theme>("aquatic");
   const [equation, dispatchEquation] = useReducer(updateEquation, {
      sentence: "",
      result: undefined,
   } as Equation);

   const setNextTheme = () => {
      setTheme(prevTheme => {
         switch (prevTheme) {
            case "aquatic":
               return "sky";
            case "sky":
               return "abyss";
            case "abyss":
               return "aquatic";
         }
      });
   };

   Object.entries(themes[theme]).forEach(variable => {
      const [variableName, variableValue] = variable;
      document
         .getElementById("calculator")
         ?.style.setProperty(variableName, variableValue);
   });

   const context = {
      theme,
      equation,
      setNextTheme,
      dispatchEquation,
   };

   return <CalculatorContext value={context}>{children}</CalculatorContext>;
};

export const useCalculatorContext = () => {
   const context = use(CalculatorContext);
   if (!context) throw new Error("No context available");

   return context;
};

const Calculator = () => {
   return (
      <ErrorBoundary
         FallbackComponent={error => {
            console.log(error.error);
            return <div>{error.error}</div>;
         }}
      >
         <CalculatorProvider>
            <div
               className="Calculator"
               id="calculator"
            >
               <Body />
            </div>
         </CalculatorProvider>
      </ErrorBoundary>
   );
};

export default Calculator;
