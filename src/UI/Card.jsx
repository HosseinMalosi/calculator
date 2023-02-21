import React from "react";

const Card = ({ className, value, id, onClick , onSubmit , type ,color , fontSize}) => {
  return (
    <button
      type={type || "button"}
      id={id}
      className={`flex p-1 ${className} ${color || "bg-sky-900"} justify-center items-center rounded-md shadow-xl active:-translate-y-[2px]  ${fontSize || "text-lg"} text-neutral-800`}
      onClick={(e) => onClick(e)}
      value={value}
    >
      {value}
    </button>
  );
};

export default Card;
