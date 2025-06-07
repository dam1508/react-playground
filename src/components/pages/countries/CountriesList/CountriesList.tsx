import { use } from "react";
import "./CountriesList.css";
import { CountryInfo } from "../api/api.types";
import CountryCard from "../CountryCard";
import { Grid } from "@mui/material";

export const CountriesList = ({
   countriesPromise,
}: {
   countriesPromise: Promise<CountryInfo[]>;
}) => {
   let countries: CountryInfo[] = [];

   if (!sessionStorage.getItem("cntr")) {
      countries = use(countriesPromise);
      sessionStorage.setItem("cntr", JSON.stringify(countries));
   } else {
      let storedCountries = sessionStorage.getItem("cntr");
      if (storedCountries !== null) countries = JSON.parse(storedCountries);
   }
   return (
      <Grid
         container
         justifyContent="center"
         spacing={4}
         columns={4}
         sx={{}}
      >
         {countries.map(country => (
            <CountryCard
               key={country.name.common}
               country={country}
            ></CountryCard>
         ))}
      </Grid>
   );
};
