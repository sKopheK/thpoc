import { useContext } from "react";
import Character from "../components/Character/Character";
import Ctx from "../Ctx";
import stylesHeading from "../scss/widget/heading.module.scss";

const Inventory = () => {
  const {character} = useContext(Ctx);

  return (
    <>
      <h1 className={stylesHeading.base}>Inventory</h1>
      <Character character={character} />
    </>
  );
}

export default Inventory;