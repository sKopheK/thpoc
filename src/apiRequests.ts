import axios from "axios";

interface CharacterModel {
  name: string;
}

async function getCharacter(): Promise<CharacterModel> {
  const url = "/api/character";
  const resp = await axios.get<CharacterModel>(url);
  console.log(resp);
  return resp.data;
}

export { getCharacter };
export type { CharacterModel };
