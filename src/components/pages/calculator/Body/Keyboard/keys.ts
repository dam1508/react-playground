export type Key = {
   value: string;
   type: "input" | "delete" | "reset" | "submit";
};

export type Actions =
   | { type: "input"; value: string }
   | { type: "delete" }
   | { type: "reset" }
   | { type: "submit" };

export const keys: Key[] = [
   {
      value: "7",
      type: "input",
   },
   {
      value: "8",
      type: "input",
   },
   {
      value: "9",
      type: "input",
   },
   {
      value: "DEL",
      type: "delete",
   },
   {
      value: "4",
      type: "input",
   },
   {
      value: "5",
      type: "input",
   },
   {
      value: "6",
      type: "input",
   },
   {
      value: "+",
      type: "input",
   },
   {
      value: "1",
      type: "input",
   },
   {
      value: "2",
      type: "input",
   },
   {
      value: "3",
      type: "input",
   },
   {
      value: "-",
      type: "input",
   },
   {
      value: ".",
      type: "input",
   },
   {
      value: "0",
      type: "input",
   },
   {
      value: "/",
      type: "input",
   },
   {
      value: "x",
      type: "input",
   },
   {
      value: "RESET",
      type: "reset",
   },
   {
      value: "=",
      type: "submit",
   },
];
