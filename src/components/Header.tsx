import { useState } from "react";
import DropdownPanel from "./DropdownPanel";
import FilterBadge from "./FilterBadge";
import Option from "../interfaces/Option";

interface Props {
  handleChange: (endpoint: string) => void;
}

function Header({ handleChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeOption, setActiveOption] = useState("All Regions");

  const handleBadgeClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    setIsOpen(false);
    setActiveOption(option.title);
    handleChange(option.endpoint);
  };

  // const onChange = (option: string) => console.log(option);
  return (
    <div>
      <header className="pt-5 pb-5 lg:flex lg:justify-between lg:items-center">
        <div className="lg:w-[811px]">
          <h1 className="font-semibold text-[30px] text-[#000] leading-9">
            Atlas: The Ultimate Guide to the World
          </h1>
          <p className="font-normal text-[16px] leading-6 text-[#000]/70">
            Atlas is a website that lists every country with their flags and
            facts. You can explore the world map, search by name or region, and
            filter by criteria. Learn about the world and its diversity with
            Atlas!
          </p>
        </div>
        <div className="lg:flex lg:flex-col lg:w-[177px] lg:visible hidden">
          <FilterBadge handleBadgeClick={handleBadgeClick} />
          <div className="absolute top-[170px] w-[177px]">
            {isOpen && (
              <DropdownPanel
                handleOptionClick={handleOptionClick}
                activeOption={activeOption}
              />
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
