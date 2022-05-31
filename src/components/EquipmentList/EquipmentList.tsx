import { useCallback, useContext } from "react";
import { purchase } from "../../apiRequests";
import Ctx from "../../Ctx";
import Equipment from "../Equipment/Equipment";
import PurchaseBtn from "../PurchaseBtn/PurchaseBtn";

const EquipmentList = () => {
    const { character, equipment, refresh } = useContext(Ctx);

    const purchaseItem = useCallback((id: string) => {
        purchase(id).then(data => {
            if (data && data.equipmentId === id)
            {
                refresh();
            }
        });
    }, [refresh]);

    return (
        <ul>
            {equipment.map((item, i) => (
                <li key={i}>
                    <Equipment item={item} />
                    <PurchaseBtn
                        disabled={!character || character.wealth < item.value}
                        onClick={() => purchaseItem(item.id)}
                    />
                </li>
            ))}
        </ul>
    );
};

export default EquipmentList;