import { useState } from "react";

interface Props {
  id: number;
}

function Favorite({ id }: Props) {
  const [isLiked, setIsLiked] = useState<boolean>(
    !!localStorage.getItem(`${id}`)
  );

  const handleClick = (id: number) => {
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
      <use href="src/icons/sprite.svg#name=rs-heart"></use>
    </svg>
  );

  const likeIcon = (
    <svg className="w-5 h-5">
      <use href="src/icons/sprite.svg#Vector-black"></use>
    </svg>
  );

  return (
    <div
      onClick={() => handleClick(id)}
      className="bg-stone-100 w-[36px] h-[36px] rounded-full shadow-[#00000]/[10%] flex justify-center items-center"
    >
      {isLiked ? likeIcon : unLikeIcon}
    </div>
  );
}

export default Favorite;
