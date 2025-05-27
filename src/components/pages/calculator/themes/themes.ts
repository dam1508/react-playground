import Themes from "./themes.json";

export const themes = Themes;

export type Theme = keyof typeof Themes;
