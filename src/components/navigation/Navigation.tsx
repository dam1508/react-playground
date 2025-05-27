import { Route, Routes } from "react-router-dom";
import "./Navigation.css";
import Playground from "../pages/playground/Playground";
import Calculator from "../pages/calculator/Calculator";
import Canvas from "../canvas/Canvas";

export const Navigation = () => {
   type Route = {
      name: string;
      path: string;
      node: React.ReactNode;
   };

   const routes: Record<string, Route> = {
      playground: {
         name: "Playground",
         path: "/playground",
         node: <Playground />,
      },
      calculator: {
         name: "Calculator",
         path: "/calculator",
         node: <Calculator />,
      },
   };

   return (
      <>
         <nav>
            {Object.keys(routes).map(routeName => {
               const { name, path } = routes[routeName];
               return (
                  <a
                     href={path}
                     key={name}
                  >
                     {name}
                  </a>
               );
            })}
         </nav>
         <Canvas>
            <Routes>
               {Object.keys(routes).map(routeName => {
                  const { path, node } = routes[routeName];
                  return (
                     <Route
                        path={path}
                        element={node}
                     />
                  );
               })}
            </Routes>
         </Canvas>
      </>
   );
};
