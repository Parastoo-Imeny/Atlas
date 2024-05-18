import Country from "../interfaces/Country";
import cardDescription from "../functions/cardDescription";
import Favorite from "./Favorite";
import { Link } from "react-router-dom";

interface Props {
  country: Country;
  id: string;
}

function Card({ country, id }: Props) {
//  console.log("country", country)
  return (
    <div className="bg-[#FFF]/60 flex flex-col justify-between rounded-[10px] p-[20px]">
      <div className="rounded-[10px] overflow-hidden ">
      {/* object-fill object-center */}
        <img
          className="rounded-[10px] overflow-hidden aspect-[600/400] w-[100vw]" 
          src={country?.flags?.png}
          alt={country?.flags?.alt}
        />
      </div>
      <div className="pt-[10px] pb-[10px] grid gap-[10px]">
        <div className="flex justify-between">
          <p className="font-bold text-base	mt-2 mb-2 leading-6 font-Inter">
            {country?.name?.common}
          </p>
          <Favorite id={id} />
        </div>
        <div>{cardDescription(country)}</div>
      </div>
      <div className="overflow-hidden font-medium text-[14px] rounded-[8px] shadow-lg bg-gradient-to-r from-[#fff]/50 to-[#fff]/0  w-fit h-fit">
        <Link className="flex items-center pt-[8px] pr-[16px] pb-[8px] pl-[16px]" to={`/${country?.name?.common}`}>
          <p className="">Learn more</p>
          <svg className="w-5 h-5 ml-[8px]">
            <use href="src/icons/sprite.svg#name=rs-angle-small-right"></use>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Card;
