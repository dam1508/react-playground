type CountryName = {
   common: string;
   official: string;
};

export type CountryInfo = {
   name: CountryName & { nativeName: Record<string, CountryName> };
   flags: Record<string, string>;
};

export const countryParams: (keyof CountryInfo)[] = ["name", "flags"];
