import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
import { CountryInfo } from "../../api/api.types";

const infoFontTheme = createTheme({
   typography: {
      fontSize: 12,
      h5: {
         fontSize: "1.1rem",
      },
   },
});

export const Info = ({
   name,
   capital,
   population,
   region,
}: Omit<CountryInfo, "flags">) => {
   const populationFormatted = population.toLocaleString().replaceAll(",", " ");

   return (
      <ThemeProvider theme={infoFontTheme}>
         <Box
            component="section"
            sx={{
               display: "flex",
               flexDirection: "column",
               alignContent: "start",
               px: 4,
               fontSize: 2,
            }}
         >
            <Typography
               component="h2"
               variant="h5"
               sx={{ mb: 2 }}
            >
               <strong>{name.common}</strong>
            </Typography>
            <Typography>Capital: {capital}</Typography>
            <Typography>Region: {region}</Typography>
            <Typography>Population: {populationFormatted}</Typography>
         </Box>
      </ThemeProvider>
   );
};
