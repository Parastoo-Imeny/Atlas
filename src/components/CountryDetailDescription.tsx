import Country from "../interfaces/Country";
import population from "../functions/population";
import showingListOfSth from "../functions/showingListOfSth";

interface Props {
  country: Country;
}

const CountryDetailDescription = ({ country }: Props) => {
  return (
    <div className="flex flex-col font-normal text-[#000]/70 text-[16px] gap-[10px] md:max-w-[420px] lg:max-w-[620px] xl:max-w-[886px]">
      <p>
        {`${country?.name.common}, officially known as the ${
          country?.name.official
        }, is a vibrant and diverse country situated in ${
          country?.subregion
        }. With its capital at ${country?.capital[0]}, ${
          country?.name.common
        } boasts a rich cultural heritage and a population of approximately ${population(
          country?.population
        )} people. The official languages include ${showingListOfSth(
          Object.values(country?.languages)
        )}, reflecting the linguistic diversity of the nation.`}
      </p>
      <p>{country?.flags?.alt}</p>
      <p>
        {`The ${Object.values(country?.currencies).map(
          (item) => `${item.name} ${item.symbol}`
        )} serves as the official currency, with its symbol represented by ${Object.values(
          country?.currencies
        ).map((item) => `${item.symbol}`)}. Geographically, ${
          country?.name.common
        } spans an expansive area of ${country?.area?.toLocaleString(
          "en-US"
        )} square kilometers and shares borders with Bangladesh (BGD), Bhutan (BTN), Myanmar (MMR), China (CHN), Nepal (NPL), and Pakistan (PAK). Despite its vast size, ${
          country?.name.common
        } ${
          country?.landlocked ? "is" : "is not"
        } landlocked, enjoying access to the sea.`}
      </p>
      <p>
        {`${country?.name.common} holds the status of a United Nations member and operates as a republic, emphasizing its commitment to democratic governance. The country's national demonym is "Indian," both for males and females. The FIFA code representing ${country?.name.common} in international sports competitions is ${country?.car?.signs[0]} and the country follows ${country?.car?.side}-hand driving with vehicle registration signs marked as "${country?.car?.signs[0]}".`}
      </p>
      <p>
        {`The time zone in ${country?.name.common} is ${country?.timezones} and the official start of the week is on ${country?.startOfWeek}. The geographical coordinates of the capital, ${country?.capital}, are approximately 28.6° latitude and 77.2° longitude. The country's continent is ${country?.region}, aligning with its regional placement in ${country?.subregion}.`}
      </p>
      <p>
        {`${
          country?.name.common
        }'s postal codes adhere to a specific format, requiring six digits and matching the regular expression "^(\d{6})$." The country's international dialing code is ${
          country?.idd?.root
        }, signifying its global connectivity. With a Gini coefficient of ${Object.values(
          country?.gini
        )} in ${Object.keys(country?.gini)}, ${
          country?.name.common
        } addresses socio-economic inequality as it continues to evolve as a major player on the world stage.`}
      </p>
    </div>
  );
};

export default CountryDetailDescription;
