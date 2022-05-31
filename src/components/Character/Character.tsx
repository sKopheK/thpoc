import { useEffect, useState } from "react";
import { CharacterModel, getCharacter } from "../../apiRequests";

const Character = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    getCharacter().then((data: CharacterModel) => {
      setName(data.name);
    });
  }, []);

  return (
    <div style={{ marginTop: "24px", textAlign: "center" }}>
      <h1>Character</h1>
      <h2>Name: {name}</h2>
    </div>
  );
};

export default Character;
