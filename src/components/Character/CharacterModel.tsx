import EquipmentModel from "../Equipment/EquipmentModel";

const EQUIPMENT_KEY = 'equipment';

interface CharacterModel {
    name: string;
    hitPoints: number;
    luck: number;
    wealth: number;
    [EQUIPMENT_KEY]: EquipmentModel[];
}

const characterAttrModifiers = {
    hitPoints: function modify(hp: number, character: CharacterModel): number {
        const equipment = character[EQUIPMENT_KEY];
        return hp + equipment.reduce((hpModSum, item) => hpModSum + item.hpModifier, 0);
    },
    luck: function modify(luck: number, character: CharacterModel): number {
        const equipment = character[EQUIPMENT_KEY];
        return luck + equipment.reduce((luckModSum, item) => luckModSum + item.luckModifier, 0);
    },
}

type CharacterAttrs = keyof typeof characterAttrModifiers;
type CharacterModelProp = keyof CharacterModel;

export default CharacterModel;
export { characterAttrModifiers };
export type { CharacterAttrs, CharacterModelProp };
export { EQUIPMENT_KEY };