import React from "react";
import EquipmentModel, { EquipmentModelProp, ID_KEY } from "./EquipmentModel";

const Equipment = ({item, includeId = false}: {item: EquipmentModel, includeId?: boolean}) => {
    let propsToRender = Object.keys(item);
    if (!includeId)
    {
        propsToRender = propsToRender.filter(key => key !== ID_KEY);
    }

    return (<>
        <h3>{item.name}</h3>
        <dl>
        {propsToRender.map(key => (
            <React.Fragment key={`${item.name}-${key}`}>
                <>
                    <dt>{key[0].toUpperCase() + key.slice(1)}</dt>
                    <dd>{item[key as EquipmentModelProp]}</dd>
                </>
            </React.Fragment>
        ))}
        </dl>
    </>);
};

export default Equipment;