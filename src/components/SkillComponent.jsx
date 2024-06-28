import { useState } from "react";
import { SKILL_LIST } from "../consts.js";

const emptySkills = {
  Acrobatics: 0,
  "Animal Handling": 0,
  Arcana: 0,
  Athletics: 0,
  Deception: 0,
  History: 0,
  Insight: 0,
  Intimidation: 0,
  Investigation: 0,
  Medicine: 0,
  Nature: 0,
  Perception: 0,
  Performance: 0,
  Persuasion: 0,
  Religion: 0,
  "Sleight of Hand": 0,
  Stealth: 0,
  Survival: 0,
};

const SkillComponent = () => {
  const [skillList, setSkillList] = useState(emptySkills);
  const handleClick = (skillName, num) => {
    setSkillList({ ...skillList, [skillName]: num });
  };

  const skillDisplay = SKILL_LIST.map((skill) => {
    return (
      <div>
        {skill.name}:{skillList[skill.name]}
        <button
          onClick={() => handleClick(skill.name, skillList[skill.name] + 1)}
        >
          +
        </button>
        <button>-</button>
      </div>
    );
  });

  return <div>{skillDisplay}</div>;
};

export default SkillComponent;
