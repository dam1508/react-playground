import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { routes } from "../../App";

export const Navigation = () => {
   return (
      <>
         <nav>
            {routes
               .find(route => route.name === "Home")
               ?.children?.map(route => {
                  const { name, path } = route;
                  if (name)
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
      </>
   );
};
