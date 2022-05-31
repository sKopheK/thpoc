type EquipmentType = "Armor" | "Weapon" | "Trinket";
type EquipmentModelProp = keyof EquipmentModel;

const ID_KEY = 'id';

interface EquipmentModel {
  [ID_KEY]: string;
  name: string;
  type: EquipmentType;
  hpModifier: number;
  luckModifier: number;
  value: number;
}

export default EquipmentModel;
export type { EquipmentType, EquipmentModelProp };
export { ID_KEY };