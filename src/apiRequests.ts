import axios from "axios";
import CharacterModel from "./components/Character/CharacterModel";

async function getCharacter(): Promise<CharacterModel> {
  const url = "/api/character";
  const resp = await axios.get<CharacterModel>(url);
  console.log(resp);
  return resp.data;
}

export { getCharacter };
