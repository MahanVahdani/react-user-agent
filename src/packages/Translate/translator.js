import lang from "./lang.json";

export const translator = (value) => {
  if (lang[value]) return lang[value];
  return value;
};
