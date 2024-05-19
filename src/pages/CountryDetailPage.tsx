import { Link, useParams } from "react-router-dom";
import DescriptionCard from "../components/DescriptionCard";
import useData from "../components/hooks/useData";
import Country from "../interfaces/Country";
import Neighbors from "../components/Neighbors";
import CountryDetailDescription from "../components/CountryDetailDescription";
import MapOfCountry from "../components/MapOfCountry";

function CountryDetailPage() {
  const { name } = useParams();
  //   const navigate = useNavigate();
  const { data, error, isLoading } = useData<Country[]>(
    `/name/${name}?fullText=true`
  );
  const country = data && data[0];

  if (isLoading) return "Is Loading...";
  if (error) return <p>{error}</p>;

  return (
    <div className="bg-[#A7B3C7] pt-20 pr-5 pb-20 pl-5">
      <div className="flex flex-col gap-[20px] max-w-[425px] md:max-w-[820px] lg:max-w-[1050px] xl:max-w-[1320px] m-auto">
        <header className="flex flex-col gap-[20px]">
          <h1 className="font-semibold text-[30px] leading-9">
            Atlas: Everything you need to know about {country?.name?.common}
          </h1>
          <div className="bg-[#fffff]/70 rounded-[8px] font-medium text-[14px] shadow-lg bg-[#fff]/50  w-fit">
            {/* <button onClick={() => navigate('/')}>Go Back</button> */}
            <Link
              className="flex items-center pt-[8px] pr-[16px] pb-[8px] pl-[16px]"
              to={"/"}
            >
              <svg className="w-5 h-5 mr-[8px]">
                <use href="src/icons/sprite.svg#name=rs-angle-small-right"></use>
              </svg>
              <p>Go Back</p>
            </Link>
          </div>
        </header>

        <div className="md:flex md:flex-row-reverse md:justify-between md:gap-[20px] lg:max-h-[1755px]">
          <div className="md:max-w-[250px] lg:max-w-[298px] xl:max-w-[307px]">
            {country && (
              <DescriptionCard flags={country?.flags} country={country} />
            )}
          </div>
          <div className="lg:max-w-[983px] md:grow">
            <div className="hidden md:visible md:flex">
              {country && <CountryDetailDescription country={country} />}
            </div>

            <div className="">
              {country && <MapOfCountry country={country} />}
            </div>
          </div>
        </div>
        <div className="md:hidden">
          {country && <Neighbors country={country} />}
        </div>
      </div>
    </div>
  );
}

export default CountryDetailPage;
