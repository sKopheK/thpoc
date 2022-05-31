import React from "react";
import CharacterModel from "./components/Character/CharacterModel";
import EquipmentModel from "./components/Equipment/EquipmentModel";

interface AppCtx
{
    character: CharacterModel | null,
    equipment: EquipmentModel[],
    refresh: Function,
}

export default React.createContext<AppCtx>({
    character: null,
    equipment: [],
    refresh: () => {},
});

export type { AppCtx };

