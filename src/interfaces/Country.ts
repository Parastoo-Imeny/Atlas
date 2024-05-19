export default interface Country {
  area: number;
  borders: string[];
  capital: string[];
  car: { side: string; signs: string[] };
  ccn3: string;
  currencies: { [key: string]: { name: string; symbol: string } };
  demonyms: { [key: string]: { f: any } };
  flags: {
    svg: string;
    png: string;
    alt: string;
  };
  gini: { [key: number]: number };
  idd: { root: string; suffixes: string[] };
  independent: boolean;
  landlocked: boolean;
  languages: { [key: string]: string };
  maps: { googleMaps: string; openStreetMaps: string };
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  startOfWeek: string;
  subregion: string;
  timezones: string[];
}
