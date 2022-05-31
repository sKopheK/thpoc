import React, { useContext } from "react";
import Ctx from "../../Ctx";
import Equipment from "../Equipment/Equipment";
import "./Character.scss";
import { CharacterModelProp, EQUIPMENT_KEY } from "./CharacterModel";

const Character = () => {
  const {character} = useContext(Ctx);

  let equipmentList: string | JSX.Element = 'No equipment';
  if (character && character[EQUIPMENT_KEY].length > 0)
  {
    equipmentList = (
      <ul>
        {character[EQUIPMENT_KEY].map((equipmentItem, i) => <li key={i}><Equipment item={equipmentItem}></Equipment></li>)}
      </ul>
    );
  }

  return (
    <div className="Character">
      <dl>
      {character && Object.keys(character).map((key) => (
        <React.Fragment key={key}>
          <dt>{key[0].toUpperCase() + key.slice(1)}</dt>
          <dd>
            <>
              {key !== EQUIPMENT_KEY && character[key as CharacterModelProp]}
              {key === EQUIPMENT_KEY && equipmentList}
            </>
          </dd>
        </React.Fragment>
      ))}
      </dl>
    </div>
  );
};

export default Character;
