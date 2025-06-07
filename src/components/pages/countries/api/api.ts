import { CountryInfo, countryParams } from "./api.types";

export const fetchCountries = async (): Promise<CountryInfo[]> => {
   const url = new URL("https://restcountries.com/v3.1/all");

   url.searchParams.set("fields", countryParams.join(","));

   let countries = new Promise(resolve => setTimeout(resolve, 2000)).then(
      async () =>
         fetch(url)
            .then(response => {
               return response.json();
            })
            .catch(err => {
               throw new Error(err);
            })
   );

   return countries;
};
