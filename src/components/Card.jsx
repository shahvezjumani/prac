import React from "react";

const Card = ({ name, age, occupation }) => {
  return (
    <>
      <div className="w-[200px] h-[200px] bg-red-500">{name}</div>;
    </>
  );
};

export default Card;
