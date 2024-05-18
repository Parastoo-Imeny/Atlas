interface Props {
    handleOptionClick: (option: string) => void;
}

function DropdownPanel({handleOptionClick} : Props) {
  const options = [{title: 'All Regions', endpoint: '/all'},
  {title: 'Africa', endpoint: '/region/africa'},
  {title: 'Americas', endpoint: '/region/americas'},
  {title: 'Antarctica', endpoint: '/region/antarctica'},
  {title: 'Asia', endpoint: '/region/asia'},
  {title: 'Europe', endpoint: '/region/europe'},
  {title: 'Oceania', endpoint: '/region/oceania'},
  ];
  const renderedDropdown = options.map((option, index) => (
    <div
      onClick={() => handleOptionClick(option.endpoint)}
      className="pt-[8px] pr-[16px] pb-[8px] pl-[16px] hover: border-l-[1px] hover:border-[#2670E9] active:bg-gradient-to-r from-[#2670E9]/30 to-[#2670E9]/0"
      key={index}
    >
      {option.title}
    </div>
  ))


  return (
    <div className="bg-[#fff]/70 rounded-[10px] shadow-lg p-[16px] mt-[8px] font-medium text-[14px]">
      {renderedDropdown}
    </div>
  );
}

export default DropdownPanel;
