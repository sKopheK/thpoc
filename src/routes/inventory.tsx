import { useContext } from "react";
import Character from "../components/Character/Character";
import Ctx from "../Ctx";

const Inventory = () => {
  const {character} = useContext(Ctx);

  return (
    <>
      <h1 className="ui-heading">Inventory</h1>
      <Character character={character} />
    </>
  );
}

export default Inventory;