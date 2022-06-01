import { useContext } from "react";
import EquipmentList from "../components/EquipmentList/EquipmentList";
import Ctx from "../Ctx";

const Store = () => {
  const { equipment } = useContext(Ctx);
  return (
    <>
      <h1 className="ui-heading">Store</h1>
      <EquipmentList equipment={equipment} />
    </>
  );
}
export default Store;