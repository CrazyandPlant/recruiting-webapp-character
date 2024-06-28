import { useState } from "react";

const AttributeDisplay = ({ skillName, currlvl, setLevel = () => {} }) => {
  const handleClick = (val) => {
    console.log(val);
    setLevel(val);
  };

  const calcModifier = () => {
    return;
  };

  return (
    <div>
      {skillName}:{currlvl}
      <button onClick={() => handleClick(currlvl + 1)}>+</button>
      <button onClick={() => handleClick(currlvl - 1)}>-</button>
      Modifier: {Math.floor((currlvl - 10) / 2)}
    </div>
  );
};

export default AttributeDisplay;
