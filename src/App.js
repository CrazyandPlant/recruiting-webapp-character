import { useState, useEffect } from "react";
import "./App.css";
import AttributeDisplay from "./components/AttributeDisplay.jsx";
import ClassComponent from "./components/ClassComponent.jsx";
import SkillComponent from "./components/SkillComponent.jsx";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "./consts.js";

function App() {
  const [allAtt, setAllAtt] = useState({
    Strength: 0,
    Dexterity: 0,
    Constitution: 0,
    Intelligence: 0,
    Wisdom: 0,
    Charisma: 0,
  });

  const handleClick = (num, attr) => {
    switch (attr) {
      case "str":
        setAllAtt({ ...allAtt, Strength: num });
        break;
      case "dex":
        setAllAtt({ ...allAtt, Dexterity: num });
        break;
      case "con":
        setAllAtt({ ...allAtt, Constitution: num });
        break;
      case "int":
        setAllAtt({ ...allAtt, Intelligence: num });
        break;
      case "wis":
        setAllAtt({ ...allAtt, Wisdom: num });
        break;
      case "cha":
        setAllAtt({ ...allAtt, Charisma: num });
        break;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>DND Character Sheet</h1>
      </header>
      <section className="App-section">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridGap: 20,
          }}
        >
          <div>
            <AttributeDisplay
              skillName="Strength"
              currlvl={allAtt.Strength}
              setLevel={(num) => handleClick(num, "str")}
            />
            <AttributeDisplay
              skillName="Dexterity"
              currlvl={allAtt.Dexterity}
              setLevel={(num) => handleClick(num, "dex")}
            />
            <AttributeDisplay
              skillName="Constitution"
              currlvl={allAtt.Constitution}
              setLevel={(num) => handleClick(num, "con")}
            />
            <AttributeDisplay
              skillName="Intelligence"
              currlvl={allAtt.Intelligence}
              setLevel={(num) => handleClick(num, "int")}
            />
            <AttributeDisplay
              skillName="Wisdom"
              currlvl={allAtt.Wisdom}
              setLevel={(num) => handleClick(num, "wis")}
            />
            <AttributeDisplay
              skillName="Charisma"
              currlvl={allAtt.Charisma}
              setLevel={(num) => handleClick(num, "cha")}
            />
          </div>
          <div>
            <ClassComponent charAttributes={allAtt} />
          </div>
          <div>
            <SkillComponent />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
