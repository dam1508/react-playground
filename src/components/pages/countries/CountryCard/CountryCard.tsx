import { CountryInfo } from "../api/api.types";
import Flag from "./Flag";
import "./CountryCard.css";
import Info from "./Info";
import { Box, Grid, Paper } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

export const CountryCard = ({ country }: { country: CountryInfo }) => {
   const { name, flags } = country;
   const path = useLocation();

   return (
      <Grid
         size={1}
         display="flex"
         justifyContent="center"
      >
         <Paper
            component="article"
            sx={{
               borderRadius: 4,
               justifyContent: "center",
               width: 250,
            }}
            elevation={2}
         >
            <Box
               sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  gap: 2,

                  bgcolor: "hsl(209, 23%, 22%)",
                  height: "100%",
                  width: 1,
                  p: 0,
                  pb: 1,

                  borderRadius: 3,
                  textDecoration: "none",
                  color: "hsl(0, 100%, 100%)",
               }}
               component={NavLink}
               to={path.pathname + "/" + name.common}
            >
               <Flag
                  flagSrc={flags.png}
                  flagAlt={flags.alt}
                  isNepal={name.common === "Nepal"}
               />
               <Info {...country}></Info>
            </Box>
         </Paper>
      </Grid>
   );
};
