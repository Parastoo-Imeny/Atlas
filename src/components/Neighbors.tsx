import Country from "../interfaces/Country";
import Neighbor from "./Neighbor";

interface Props {
  country: Country;
}

function Neighbors({ country }: Props) {

  return (
    <>
      <div className="font-medium text-[26px] text-[#000] leading-7 pt-[60px] pb-[10px]">Neighbors of {country?.name.common}</div>
      <div>
        {country && <Neighbor codes={country?.borders?.toString()} />}
        {/* {country &&
          country?.borders.map((item, index) => (<Neighbor key={index} codes={item} />))} */}
      </div>
    </>
  );
}

export default Neighbors;
