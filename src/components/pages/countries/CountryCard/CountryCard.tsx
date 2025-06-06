import { CountryInfo } from "../api/api.types";
import Flag from "./Flag";
import "./CountryCard.css";
import Info from "./Info";

export const CountryCard = ({ country }: { country: CountryInfo }) => {
   const { name, flags } = country;

   return (
      <article className="country-card">
         <button className="country-button">
            <Flag
               flagSrc={flags.png}
               flagAlt={flags.alt}
            ></Flag>
            <Info name={name}></Info>
         </button>
      </article>
   );
};
