import Country from "../interfaces/Country";
import population from "./population";

const cardDescription = (country: Country) => {
  return (
    <p className="font-normal text-[14px] text-[#000]/70 min-h-[100px]">{`${
      country?.name?.official
    } is ${
      country?.independent ? "an indepebdent" : "a dependent"
    } country in ${
      country?.subregion
    } with an estimated population of over ${population(
      country?.population
    )} people.`}</p>
  );
};

export default cardDescription;
