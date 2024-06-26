import { useState } from "react";

interface Props {
  id: string;
}

function Favorite({ id }: Props) {
  const [isLiked, setIsLiked] = useState<boolean>(
    !!localStorage.getItem(`${id}`)
  );

  const handleClick = (id: string) => {
    if (isLiked) {
      setIsLiked(false);
      localStorage.removeItem(`${id}`);
    } else {
      setIsLiked(true);
      localStorage.setItem(`${id}`, "true");
    }
  };

  const unLikeIcon = (
    <svg className="w-5 h-5">
      <use href="../../publicDir/icons/sprite-vercel.svg#name=rs-heart"></use>
    </svg>
  );

  const likeIcon = (
    <svg className="w-5 h-5">
      <use href="../../publicDir/icons/sprite-vercel.svg#Vector"></use>
    </svg>
  );

  return (
    <div
      onClick={() => handleClick(id)}
      className="bg-stone-100 w-[36px] h-[36px] rounded-full shadow-[#00000]/[10%] flex justify-center items-center cursor-pointer"
    >
      {isLiked ? likeIcon : unLikeIcon}
    </div>
  );
}

export default Favorite;
