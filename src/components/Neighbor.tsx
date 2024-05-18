import Country from "../interfaces/Country";
import Card from "./Card";
import useData from "./hooks/useData";

interface Props {
    codes: string
}

function Neighbor({codes} : Props) {
const {data, error, isLoading} = useData<Country[]>(`/alpha?codes=${codes}`);

if (isLoading) return <p>is Loading...</p>;
if (error) return <p>is Loading...</p>;

    return(
        <div className="flex flex-col gap-[30px]">
            {data && data.map((item,index) => <Card key={index} country={item} id={item?.ccn3} />) }
        </div>
    )}

export default Neighbor;