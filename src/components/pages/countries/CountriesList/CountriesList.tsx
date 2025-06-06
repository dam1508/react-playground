import { use } from "react";
import "./CountriesList.css";
import { CountryInfo } from "../api/api.types";
import CountryCard from "../CountryCard";

export const CountriesList = ({
   countriesPromise,
}: {
   countriesPromise: Promise<CountryInfo[]>;
}) => {
   const countries = use(countriesPromise);

   return (
      <section className="countries-list">
         {countries.map(country => (
            <CountryCard
               key={country.name.common}
               country={country}
            ></CountryCard>
         ))}
      </section>
   );
};
