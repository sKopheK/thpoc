import axios from "axios";
import CharacterModel from "./components/Character/CharacterModel";
import EquipmentModel from "./components/Equipment/EquipmentModel";

interface PurchaseModel
{
  equipmentId: string;
}

async function get<T>(url: string): Promise<T> {
  const resp = await axios.get<T>(url);
  return resp.data;
}

async function getCharacter(): Promise<CharacterModel> {
  return get("/api/character");
}

async function getEquipment(): Promise<EquipmentModel[]> {
  return get("/api/equipment");
}

async function purchase(equipmentId: string): Promise<PurchaseModel> {
  const resp = await axios.post("/api/purchases", {equipmentId});
  return resp.data;
}

export { getCharacter, getEquipment, purchase };
