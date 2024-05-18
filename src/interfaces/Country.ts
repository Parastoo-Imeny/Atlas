export default interface Country {
  independent: boolean;
  subregion: string;
  population: number;
  capital: string[];
  area: number;
  startOfWeek: string;
  timezones: string[];
  borders: string[];
  languages: { [key: string]: string };
  currencies: {[key: string]: { [key: string]: string }};
  demonyms: {[key: string]: { f : any }};
  car: { [key: string] : string };
  gini: {[key: number]: number};
  idd:{root: string}
  maps: {googleMaps: string,
    openStreetMaps: string
   };
  flags: {
    svg: string;
    png: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
  };
}
