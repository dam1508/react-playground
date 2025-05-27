import Body from "./Body/Body";
import "./Calculator.css";
import { createContext, use, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Theme, themes } from "./themes/themes";

type CalculatorContextType = {
   theme: Theme;
   setNextTheme: () => void;
};

const CalculatorContext = createContext<CalculatorContextType | null>(null);

const CalculatorProvider = ({ children }: { children: React.ReactNode }) => {
   const [theme, setTheme] = useState<Theme>("aquatic");

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
      setNextTheme,
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
