import React from "react";
import EquipmentModel, { EquipmentModelProp, ID_KEY } from "./EquipmentModel";
import styles from "./Equipment.module.scss";

const Equipment = (
    {
        item,
        button,
        includeId = false
    }: {
        item: EquipmentModel,
        button: boolean | JSX.Element,
        includeId?: boolean
    }
) => {
    let propsToRender = Object.keys(item) as EquipmentModelProp[];
    if (!includeId)
    {
        propsToRender = propsToRender.filter(key => key !== ID_KEY);
    }

    return (<>
        <div className={styles.base}>
            <dl className={`${styles.attrList} ${styles[`type-${item.type}`]}`}>
            {propsToRender.map(key => (
                <React.Fragment key={key}>
                    <dt className={`${styles.label} ${styles[`label-${key}`] ?? ''}`}>{key[0].toUpperCase() + key.slice(1)}</dt>
                    <dd className={`${styles.value} ${styles[`value-${key}`] ?? ''}`}>{item[key as EquipmentModelProp]}</dd>
                </React.Fragment>
            ))}
            </dl>
            {button}
        </div>
    </>);
};

export default Equipment;