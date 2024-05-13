import Country from "../interfaces/Country";
import population from "./population";

const cardDescription = (country: Country) => {
  return (
    <p className="font-normal opacity-70">{`${country.name.official} is ${
      country.independent ? "an indepebdent" : "a dependent"
    } country in ${
      country.subregion
    } with an estimated population of over ${population(
      country.population
    )} people.`}</p>
  );
};

export default cardDescription;
