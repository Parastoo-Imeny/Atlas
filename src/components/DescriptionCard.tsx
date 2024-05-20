import Country from "../interfaces/Country";

interface Props {
  flags: {
    svg: string;
    alt: string;
  };
  country: Country;
}

function DescriptionCard({ flags, country }: Props) {
  // console.log("country?.gini", country?.gini )
  const giniIndex = country?.gini && Object.values(country?.gini)[0];
  const equality =
    giniIndex && giniIndex < 30 ? (
      <svg className="w-5 h-5 pr-[5px]">
        <use href="../../publicDir/icons/sprite-vercel.svg#name=ss-caret-down"></use>
      </svg>
    ) : (
      <svg className="w-5 h-5 pr-[5px] fill-[#B52A22] !important">
        <use href="../../publicDir/icons/sprite-vercel.svg#name=ss-caret-up"></use>
      </svg>
    );

  return (
    <div className="bg-[#FFFFFF99]/60 grid gap-[8px] rounded-[10px] p-[20px] shadow-lg">
      <div className="rounded-lg flex justify-center overflow-hidden border-separate w-fit">
        <img
          className="overflow-hidden md:w-auto w-[100vw]"
          src={flags?.svg}
          alt={flags?.alt}
        />
      </div>
      <div className="pt-5 pb-2.5 text-[16px] text-[#000] leading-6 font-medium flex justify-center">
        {country?.name?.official}
      </div>
      <div className="divide-y-2 divide-slate-300 divide-solid">
        <div className="flex justify-between font-normal text-[14px] leading-5 pb-2.5 pt-2.5">
          <p className="text-[#000]/50">Capital</p>
          <p className="text-[#000]/90">{country?.capital[0]}</p>
        </div>
        <div className="flex justify-between font-normal text-[14px] leading-5 pb-2.5 pt-2.5">
          <p className="text-[#000]/50">Official languages</p>
          <div className="flex flex-col">
            {country?.languages &&
              Object.values(country?.languages).map((item) => (
                <p key={item} className="text-[#000]/90 text-end">
                  {item}
                </p>
              ))}
          </div>
        </div>
        <div className="flex justify-between font-normal text-[14px] leading-5 pb-2.5 pt-2.5">
          <p className="text-[#000]/50">Demonym</p>
          {country?.demonyms?.eng &&
            Object.values(country?.demonyms.eng).map((item, index) => (
              <p key={index} className="text-[#000]/90">
                {index === 1 && item}
              </p>
            ))}
        </div>
        <div className="flex justify-between font-normal text-[14px] leading-5 pb-2.5 pt-2.5">
          <p className="text-[#000]/50">Total Area</p>
          <p className="text-[#000]/90">
            {country?.area} km<sup>2</sup>
          </p>
        </div>
        <div className="flex justify-between font-normal text-[14px] leading-5 pb-2.5 pt-2.5">
          <p className="text-[#000]/50">Population</p>
          <p className="text-[#000]/90">
            {country?.population.toLocaleString("en-US")}
          </p>
        </div>
        <div className="flex justify-between font-normal text-[14px] leading-5 pb-2.5 pt-2.5">
          <p className="text-[#000]/50">Density</p>
          <p className="text-[#000]/90">
            {(country?.population / country?.area).toFixed()} / km<sup>2</sup>
          </p>
        </div>
        <div className="flex justify-between font-normal text-[14px] leading-5 pb-2.5 pt-2.5">
          <p className="text-[#000]/50">
            Gini{" "}
            <span className="text-[10px]">
              ({country?.gini && Object.keys(country?.gini)})
            </span>
          </p>
          <p className="text-[#000]/90 flex items-center">
            {equality}
            {country?.gini && Object.values(country?.gini)}
          </p>
        </div>
        <div className="flex justify-between font-normal text-[14px] leading-5 pb-2.5 pt-2.5">
          <p className="text-[#000]/50">Currency</p>
          {country?.currencies &&
            Object.values(country?.currencies).map((item) => (
              <p key={item.name} className="text-[#000]/90">
                {item.name} ({item.symbol})
              </p>
            ))}
        </div>
        <div className="flex justify-between font-normal text-[14px] leading-5 pb-2.5 pt-2.5">
          <p className="text-[#000]/50">Time zone</p>
          <div className="flex flex-col text-end">
            {country?.timezones.map((item, index) => (
              <p key={index} className="text-[#000]/90">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="flex justify-between font-normal text-[14px] leading-5 pb-2.5 pt-2.5">
          <p className="text-[#000]/50">Driving side</p>
          <p className="text-[#000]/90">{country?.car?.side}</p>
        </div>
        <div className="flex justify-between font-normal text-[14px] leading-5 pb-2.5 pt-2.5">
          <p className="text-[#000]/50">Start of week</p>
          <p className="text-[#000]/90 capitalize">{country?.startOfWeek}</p>
        </div>
        <div className="flex justify-between font-normal text-[14px] leading-5 pb-2.5 pt-2.5">
          <p className="text-[#000]/50">Calling root</p>
          <p className="text-[#000]/90">{country?.idd?.root}</p>
        </div>
      </div>
    </div>
  );
}

export default DescriptionCard;
