interface LangType {
  [key: string]: string;
}

const lang: LangType = require("./lang.json");

export const translator = (value: string | undefined): string => {
 if(value){
  if (lang[value]) return lang[value];
  return value;
 }else{
  return '';
 }
};
