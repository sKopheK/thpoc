import { useCallback, useContext } from "react";
import { purchase } from "../../apiRequests";
import Ctx from "../../Ctx";
import Equipment from "../Equipment/Equipment";
import EquipmentModel from "../Equipment/EquipmentModel";
import PurchaseBtn from "../PurchaseBtn/PurchaseBtn";
import "./EquipmentList.scss";

const EquipmentList = (
    {
        equipment,
        renderButton = true
    }: {
        equipment: EquipmentModel[],
        renderButton?: boolean
    }
) => {
    const { character, refresh } = useContext(Ctx);

    const purchaseItem = useCallback((id: string) => {
        purchase(id).then(data => {
            if (data && data.equipmentId === id)
            {
                refresh();
            }
        });
    }, [refresh]);

    return (
        <ul className="EquipmentList">
            {equipment.map((item, i) => (
                <li key={i}>
                    <Equipment item={item} button={renderButton && (
                        <PurchaseBtn
                            disabled={!character || character.wealth < item.value}
                            onClick={() => purchaseItem(item.id)}
                            className="Equipment__btn"
                        />
                    )}/>
                </li>
            ))}
        </ul>
    );
};

export default EquipmentList;