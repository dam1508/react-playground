import {
   createBrowserRouter,
   Outlet,
   RouteObject,
   RouterProvider,
} from "react-router-dom";
import "./App.css";
import { Navigation } from "./components/navigation/Navigation";
import Playground from "./components/pages/playground/Playground";
import Calculator from "./components/pages/calculator/Calculator";
import Countries from "./components/pages/countries";
import Canvas from "./components/canvas/Canvas";

type Route = {
   name?: string;
   path: string;
   node: React.ReactNode;
   children?: Route[];
};

export const routes: Array<Route> = [
   {
      name: "Home",
      path: "/",
      node: (
         <>
            <Navigation />
            <Canvas>
               <Outlet />
            </Canvas>
         </>
      ),
      children: [
         {
            name: "Playground",
            path: "/playground",
            node: <Playground />,
         },
         {
            name: "Calculator",
            path: "/calculator",
            node: <Calculator />,
         },
         {
            name: "Countries",
            path: "/countries",
            node: <Countries />,
         },
         {
            path: "/countries/:name",
            node: <h1>COUNTRY</h1>,
         },
      ],
   },
];

const createRoutesObj = (routes: Array<Route>): RouteObject[] => {
   return routes.map(route => {
      const { path, node, children } = route;
      return {
         path,
         element: node,
         children: children ? createRoutesObj(children) : undefined,
      };
   });
};

const router = createBrowserRouter(createRoutesObj(routes));

function App() {
   return (
      <div className="App">
         <RouterProvider router={router} />
      </div>
   );
}

export default App;
