import Option from "../interfaces/Option";

interface Props {
  handleOptionClick: (option: Option) => void;
  activeOption : string;
}

function DropdownPanel({ handleOptionClick, activeOption }: Props) {

  const options = [
    { title: "All Regions", endpoint: "/all" },
    { title: "Africa", endpoint: "/region/africa" },
    { title: "Americas", endpoint: "/region/americas" },
    { title: "Antarctica", endpoint: "/region/antarctica" },
    { title: "Asia", endpoint: "/region/asia" },
    { title: "Europe", endpoint: "/region/europe" },
    { title: "Oceania", endpoint: "/region/oceania" },
  ];

  const renderedDropdown = options.map((option, index) => (
    <div
      onClick={() => {
        handleOptionClick(option);
      }}
      className={`text-[#000] pt-[8px] pr-[16px] pb-[8px] pl-[16px] hover:border-l-[1px] hover:border-[#2670E9] cursor-pointer ${
        activeOption === option.title &&
        "bg-gradient-to-r from-[#2670E9]/30 to-[#2670E9]/0 origin-right border-l-[1px] border-[#2670E9] shadow-[#2670E9]/45"
      }`}
      key={index}
    >
      <div className={`${ activeOption === option.title && "translate-x-[7px]"}`}>{option.title}</div>
    </div>
  ));

  return (
    <div className="bg-[#fff]/70 rounded-[10px] shadow-lg p-[16px] mt-[8px] font-medium text-[14px] shadow-lg ">
      {renderedDropdown}
    </div>
  );
}

export default DropdownPanel;
