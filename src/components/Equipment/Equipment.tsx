import React from "react";
import EquipmentModel, { EquipmentModelProp, ID_KEY } from "./EquipmentModel";
import "./Equipment.scss";

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
    let propsToRender = Object.keys(item);
    if (!includeId)
    {
        propsToRender = propsToRender.filter(key => key !== ID_KEY);
    }

    return (<>
        <div className={`Equipment Equipment--${item.type}`}>
            <dl>
            {propsToRender.map(key => (
                <React.Fragment key={key}>
                    <dt className={`item-${key}--label ico ico-item-${key}`}>{key[0].toUpperCase() + key.slice(1)}</dt>
                    <dd className={`item-${key}`}>{item[key as EquipmentModelProp]}</dd>
                </React.Fragment>
            ))}
            </dl>
            {button}
        </div>
    </>);
};

export default Equipment;