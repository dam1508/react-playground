import { Suspense } from "react";
import fetchCountries from "./api";
import CountriesList from "./CountriesList";

export const Countries = () => {
   const countriesPromise = fetchCountries();
   return (
      <Suspense fallback={<h1>Loading...</h1>}>
         <CountriesList countriesPromise={countriesPromise} />
      </Suspense>
   );
};
