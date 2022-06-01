import { useContext } from "react";
import EquipmentList from "../components/EquipmentList/EquipmentList";
import Ctx from "../Ctx";
import stylesHeading from "../scss/widget/heading.module.scss";

const Store = () => {
  const { equipment } = useContext(Ctx);
  return (
    <>
      <h1 className={stylesHeading.base}>Store</h1>
      <EquipmentList equipment={equipment} />
    </>
  );
}
export default Store;