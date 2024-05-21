import Country from "../interfaces/Country";
import Card from "./Card";
import useData from "./hooks/useData";

interface Props {
  codes: string;
}

function Neighbor({ codes }: Props) {
  const { data, error, isLoading } = useData<Country[]>(
    `/alpha?codes=${codes}`
  );

  if (isLoading) return <p>is Loading...</p>;
  if (error) return <p>is Loading...</p>;


  return (
    <div
      id="Main"
      className="flex flex-col gap-[30px] md:h-[430px] md:flex md:flex-row md:overflow-x-auto  md:snap-x scrollbar-hide"
    >
      {data &&
        data.map((item, index) => (
          <div className="md:min-w-[307.5px] md:max-w-[307.5px] md:snap-start">
            <Card key={index} country={item} id={item?.ccn3} />
          </div>
        ))}
    </div>
  );
}

export default Neighbor;

