import { NavLink } from "react-router-dom";
import { routes } from "../../App";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

export const Navigation = () => {
   const [value, setValue] = useState(0);

   return (
      <>
         <Tabs
            value={value}
            onChange={(_, value) => {
               setValue(value);
            }}
            sx={{
               display: "flex",
               ".MuiTabs-flexContainer": {
                  justifyContent: "space-around",
               },
            }}
         >
            {routes
               .find(route => route.name === "Home")
               ?.children?.map((route, index) => {
                  const { name, path } = route;
                  if (name)
                     return (
                        <Tab
                           key={name}
                           label={name}
                           id={`${index}`}
                           component={NavLink}
                           to={path}
                           value={index}
                        />
                     );
               })}
         </Tabs>
      </>
   );
};
