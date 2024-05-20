interface Props {
  handleBadgeClick: () => void;
}

function FilterBadge({ handleBadgeClick }: Props) {
  return (
    <div className="bg-[#fff]/60 flex justify-between items-center border-t-[1px] border-solid border-[#fff]\50 rounded-[30px] p-[4px] font-medium text-[14px] shadow-lg">
      <span className="text-[#000] pt-[4px] pr-[12px] pb-[4px] pl-[12px]">
        Filter
      </span>
      <button
        onClick={() => handleBadgeClick()}
        className="rounded-[30px] overflow-hidden shadow-lg pt-[8px] pr-[16px] pb-[8px] pl-[16px] "
      >
        <div className="text-[#000] flex items-center">
          Region
          <svg className="w-5 h-5 ml-[8px]">
            <use href="../../publicDir/icons/sprite-vercel.svg#fi-ss-angle-small-down"></use>
          </svg>
        </div>
      </button>
    </div>
  );
}

export default FilterBadge;

// border-t-[1px] border-solid border-[#000]
