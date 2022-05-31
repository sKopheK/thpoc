import axios from "axios";
import CharacterModel from "./components/Character/CharacterModel";

async function getCharacter(): Promise<CharacterModel> {
  const url = "/api/character";
  const resp = await axios.get<CharacterModel>(url);
  return resp.data;
}

export { getCharacter };
