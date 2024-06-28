import { useState } from "react";
import { CLASS_LIST, EMPTY_ATTRIBUTES } from "../consts.js";

const ClassComponent = ({ charAttributes = EMPTY_ATTRIBUTES }) => {
  const [showReq, setShowReq] = useState(false);

  const [classReq, setClassReq] = useState("");

  const handleClick = (classAtt) => {
    setShowReq(!showReq);
    // If I had time, I would format this a little better
    setClassReq(<div>{JSON.stringify(CLASS_LIST[classAtt])}</div>);
    console.log(EMPTY_ATTRIBUTES[classAtt], CLASS_LIST[classAtt]);
  };

  const classDisplay = Object.keys(CLASS_LIST).map((className) => {
    // Parse through each attribute
    let isMin = true;
    Object.keys(CLASS_LIST[className]).forEach((attr) => {
      if (charAttributes[attr] < CLASS_LIST[className][attr]) {
        isMin = false;
      }
    });

    if (isMin) {
      return (
        <div>
          <button
            style={{
              color: "green",
              backgroundColor: "transparent",
              border: "none",
            }}
            onClick={() => handleClick(className)}
          >
            {className}
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button
            style={{
              color: "red",
              backgroundColor: "transparent",
              border: "none",
            }}
            onClick={() => handleClick(className)}
          >
            {className}
          </button>
        </div>
      );
    }
  });

  return (
    <div>
      {classDisplay} {showReq ? classReq : null}
    </div>
  );
};

export default ClassComponent;
