import { use } from "react";
import { CountryInfo } from "../api/api.types";

export const CountryCard = ({
   countryPromise,
}: {
   countryPromise: Promise<CountryInfo[]>;
}) => {
   const country = use(countryPromise);
   return <h1>{country[0].name.common ?? "Countries"}</h1>;
};
