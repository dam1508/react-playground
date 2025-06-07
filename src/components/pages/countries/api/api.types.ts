type CountryName = {
   common: string;
   official: string;
};

type FlagInfoType = "png" | "svg" | "alt";

export type CountryInfo = {
   name: CountryName & { nativeName: Record<string, CountryName> };
   flags: Record<FlagInfoType, string>;
   capital: string[];
};

export const countryParams: (keyof CountryInfo)[] = [
   "name",
   "flags",
   "capital",
];
