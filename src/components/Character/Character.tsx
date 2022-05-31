import React, { useContext } from "react";
import Ctx from "../../Ctx";
import Equipment from "../Equipment/Equipment";
import "./Character.scss";
import CharacterModel, { characterAttrModifiers, CharacterAttrs, CharacterModelProp, EQUIPMENT_KEY } from "./CharacterModel";

const Character = () => {
  const {character} = useContext(Ctx);
  const charInfo: Partial<{[k in CharacterModelProp]: string | JSX.Element}> = {};

  if (character)
  {
    // evaluate each attribute
    (Object.keys(character) as (keyof CharacterModel)[]).forEach(key => {
      const modifier = characterAttrModifiers[key as CharacterAttrs];
      // attribute can be modified
      if (modifier)
      {
        charInfo[key as keyof typeof characterAttrModifiers] = modifier(character[key as CharacterAttrs], character).toString();
      }
      // prepare list of equipment
      else if (key === EQUIPMENT_KEY)
      {
        let equipmentList: string | JSX.Element = 'No equipment';
        if (character && character[key].length > 0)
        {
          equipmentList = (
            <ul>
              {character[EQUIPMENT_KEY].map((equipmentItem, i) => <li key={i}><Equipment item={equipmentItem}></Equipment></li>)}
            </ul>
          );
        }
        charInfo[key] = equipmentList;
      }
      else
      {
        charInfo[key] = character[key].toString();
      }
    });
  }

  const charInfoKeys = Object.keys(charInfo);

  return (
    <div className="Character">
      {charInfoKeys.length > 0 && (
        <dl>
        {charInfoKeys.map((key) => (
          <React.Fragment key={key}>
            <dt>{key[0].toUpperCase() + key.slice(1)}</dt>
            <dd>{charInfo[key as CharacterModelProp]}</dd>
          </React.Fragment>
        ))}
        </dl>
      )}
    </div>
  );
};

export default Character;
