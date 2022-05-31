import React, { useContext } from "react";
import Ctx from "../../Ctx";
import Equipment from "../Equipment/Equipment";
import CharacterModel, { characterAttrModifiers, CharacterAttrs, CharacterModelProp, EQUIPMENT_KEY } from "./CharacterModel";
import "./Character.scss";

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
        const base = character[key as CharacterAttrs];
        const bonus = modifier(character[key as CharacterAttrs], character);
        const total = base + bonus;
        charInfo[key as keyof typeof characterAttrModifiers] = (
          <>
          {total}
          {bonus ? <span className="char-calc">{base} + {bonus}</span> : ''}
        </>);
      }
      // prepare list of equipment
      else if (key === EQUIPMENT_KEY)
      {
        let equipmentList: string | JSX.Element = 'Your inventory is empty, but your wallet is not.';
        if (character && character[key].length > 0)
        {
          equipmentList = (
            <ul className="EquipmentList">
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
        <dl className="Character-detail">
        {charInfoKeys.map((key) => (
          <React.Fragment key={key}>
            <dt className={`char-${key}--label ico ico-char-${key}`}>{key[0].toUpperCase() + key.slice(1)}</dt>
            <dd className={`char-${key}`}>{charInfo[key as CharacterModelProp]}</dd>
          </React.Fragment>
        ))}
        </dl>
      )}
    </div>
  );
};

export default Character;
