import { NavLink, Route, Routes } from "react-router-dom";
import "./Navigation.css";
import Playground from "../pages/playground/Playground";
import Calculator from "../pages/calculator/Calculator";
import Canvas from "../canvas/Canvas";
import Countries from "../pages/countries";
import { Suspense } from "react";

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
      countries: {
         name: "Countries",
         path: "/countries",
         node: <Countries />,
      },
   };

   return (
      <>
         <nav>
            {Object.keys(routes).map(routeName => {
               const { name, path } = routes[routeName];
               return (
                  <NavLink
                     to={path}
                     key={name}
                  >
                     {name}
                  </NavLink>
               );
            })}
         </nav>
         <Canvas>
            <Suspense fallback={<h1>Waiting</h1>}>
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
            </Suspense>
         </Canvas>
      </>
   );
};

// function Layout() {
//    let location = useLocation();
//    return (
//       <Suspense
//          fallback={<LoadModuleScreen />}
//          key={location.key}
//       >
//          <Outlet />
//       </Suspense>
//    );
// }
