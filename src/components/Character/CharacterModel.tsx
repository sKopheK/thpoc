import EquipmentModel from "../Equipment/EquipmentModel";

const EQUIPMENT_KEY = 'equipment';

interface CharacterModel {
    name: string;
    hitPoints: number;
    luck: number;
    wealth: number;
    [EQUIPMENT_KEY]: EquipmentModel[];
}

type CharacterModelProp = keyof CharacterModel;

export default CharacterModel;
export type { CharacterModelProp };
export { EQUIPMENT_KEY };