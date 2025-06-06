import { CountryInfo } from "../../api/api.types";

export const Info = ({ name }: Omit<CountryInfo, "flags">) => {
   return (
      <section>
         <h2>
            <strong>{name.common}</strong>
         </h2>
      </section>
   );
};
