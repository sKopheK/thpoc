import { useCallback, useContext } from "react";
import { purchase } from "../../apiRequests";
import Ctx from "../../Ctx";
import Equipment from "../Equipment/Equipment";
import EquipmentModel from "../Equipment/EquipmentModel";
import PurchaseBtn from "../PurchaseBtn/PurchaseBtn";
import styles from "./EquipmentList.module.scss";
import stylesEquipment from "../Equipment/Equipment.module.scss";

const EquipmentList = (
    {
        equipment,
        className,
        renderButton = true
    }: {
        equipment: EquipmentModel[],
        className?: string,
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
        <ul className={`${styles.base} ${className}`}>
            {equipment.map((item, i) => (
                <li key={i} className={styles.item}>
                    <Equipment item={item} button={renderButton && (
                        <PurchaseBtn
                            disabled={!character || character.wealth < item.value}
                            onClick={() => purchaseItem(item.id)}
                            className={stylesEquipment.btn}
                        />
                    )}/>
                </li>
            ))}
        </ul>
    );
};

export default EquipmentList;