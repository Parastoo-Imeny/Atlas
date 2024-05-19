import Country from "../interfaces/Country";
import Card from "./Card";
import useData from "./hooks/useData";

interface Props {
  endPoint: string;
}

function AtlasGrid({ endPoint }: Props) {
  const { data, error, isLoading } = useData<Country[]>(endPoint);

  // console.log("endPoint", endPoint)
  // console.log("data", data)

  if (isLoading) return "Is Loading.....";
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <section className="grid gap-[30px] md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
      {data?.map((country, index) => {
        return <Card key={index} country={country} id={country?.ccn3} />;
      })}
    </section>
  );
}

export default AtlasGrid;
