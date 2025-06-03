import { Suspense, use } from "react";
import fetchCountry from "./api";
import CountryCard from "./CountryCard";

export const Countries = () => {
   const countryPromise = fetchCountry();
   return (
      <Suspense fallback={<h1>LOL</h1>}>
         <CountryCard countryPromise={countryPromise} />
      </Suspense>
   );
};
