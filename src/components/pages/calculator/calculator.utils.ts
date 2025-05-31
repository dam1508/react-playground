import { Actions } from "./Body/Keyboard/keys";
import { Equation } from "./Calculator";

export const updateSentence = (sentence: string, update: string) => {
   const lastSentenceChar = sentence.at(-1);
   const operation = /[+\-/x.]/;

   if (update.match(operation) && lastSentenceChar?.match(operation)) {
      //^^^^^--------------> if both last character of sentence and character we want to add is a special character

      if (!(update === lastSentenceChar))
         //^^^^----------------> if they are not the same

         return sentence.replace(/.$/, update);
   } else if (
      !(update === "." && sentence.match(/(?<=\.)\d+$/)) // -----> if you want to add a dot to a number that already has one
   )
      return sentence.concat(update);
   return sentence;
};

const operations = {
   "+": (a: string, b: string) => (Number(a) + Number(b)).toString(),
   "-": (a: string, b: string) => (Number(a) - Number(b)).toString(),
   x: (a: string, b: string) => (Number(a) * Number(b)).toString(),
   "/": (a: string, b: string) => (Number(a) / Number(b)).toString(),
} satisfies Record<string, (a: string, b: string) => string>;

const calculateResult = (sentence: string) => {
   const expressions = sentence.split(/(?=[+\-/x])|(?<=[+\-/x])/);

   while (
      expressions.some((element, index, array) => {
         if (element === "x" || element === "/") {
            let result = operations[element](
               expressions[index - 1],
               expressions[index + 1]
            );
            array.splice(index - 1, 3, result.toString());
            return true;
         } else return false;
      })
   ) {}

   while (
      expressions.some((element, index, array) => {
         if (element === "+" || element === "-") {
            let result = operations[element](
               expressions[index - 1],
               expressions[index + 1]
            );
            array.splice(index - 1, 3, result.toString());
            return true;
         } else return false;
      })
   ) {}
   console.log(expressions.at(0));
   return expressions.at(0) ?? "";
};

export const updateEquation = (prevState: Equation, action: Actions) => {
   const { type } = action;
   const { sentence } = prevState;

   switch (type) {
      case "input":
         let sentenceResult: string = updateSentence(sentence, action.value);

         return {
            ...prevState,
            sentence: sentenceResult,
         };
      case "delete":
         return {
            ...prevState,
            sentence: sentence.slice(0, -1),
         };
      case "reset":
         return {
            result: 0,
            sentence: "",
         };
      case "submit":
         return {
            sentence: calculateResult(sentence),
            result: Number(calculateResult(sentence)),
         };
   }
};
