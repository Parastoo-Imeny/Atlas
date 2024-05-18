import { useState } from "react";
import AtlasGrid from "../components/AtlasGrid";
import Header from "../components/Header";
// import HorizontalScroll from "../components/HorizontalScroll";

function HomePage() {
  const [endPoint, setEndPoint] = useState<string>('/all');
  const handleChange = (endpoint: string) => setEndPoint(endpoint);

  return (
    <>
      <div className="bg-[#A7B3C7] pt-20 pr-5 pb-20 pl-5 grid gap-[30px]">
        <div>
          <Header handleChange={handleChange} />
        </div>
        <div>
          <AtlasGrid endPoint={endPoint} />
          {/* <HorizontalScroll /> */}
        </div>
      </div>
    </>
  );
}

export default HomePage;
