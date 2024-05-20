import Country from "../interfaces/Country";

interface Props {
  country: Country;
}

function MapOfCountry({ country }: Props) {
  return (
    <div className="rounded-[10px] flex flex-col">
      <div className="font-medium text-[26px] text-[#000] leading-7 pt-[60px] pb-[10px]">
        Map of {country?.name.common}
      </div>
      <iframe
        src={country?.maps.openStreetMaps}
        className="rounded-[10px] h-[346px]"
      >
        {country?.maps.openStreetMaps}
        <a
          href={country?.maps.googleMaps}
          target="_blank"
          className="z-10 text-[#000]"
        >
          Open in new tab
        </a>
      </iframe>
    </div>
  );
}

export default MapOfCountry;
