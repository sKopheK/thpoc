import React from "react";
import EquipmentList from "../EquipmentList/EquipmentList";
import CharacterModel, { characterAttrModifiers, CharacterAttrs, CharacterModelProp, EQUIPMENT_KEY } from "./CharacterModel";
import styles from "./Character.module.scss";
import stylesList from "../EquipmentList/EquipmentList.module.scss";

const Character = (
  {
    character
  }: {
    character: CharacterModel | null
  }
) => {
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
          {bonus ? <span className={styles.calc}>{base} + {bonus}</span> : ''}
        </>);
      }
      // prepare list of equipment
      else if (key === EQUIPMENT_KEY)
      {
        let equipmentList: string | JSX.Element = 'Your inventory is empty, but your wallet is not.';
        if (character && character[key].length > 0)
        {
          equipmentList = <EquipmentList equipment={character[EQUIPMENT_KEY]} className={stylesList['base--left']} renderButton={false} />;
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
    <div className={styles.base}>
      {charInfoKeys.length > 0 && (
        <dl className={styles.detail}>
        {charInfoKeys.map((key) => (
          <React.Fragment key={key}>
            <dt className={`${styles.label} ${styles[key + '-label'] ?? ''}`}>{key[0].toUpperCase() + key.slice(1)}</dt>
            <dd className={`${styles.value} ${styles[key] ?? ''}`}>{charInfo[key as CharacterModelProp]}</dd>
          </React.Fragment>
        ))}
        </dl>
      )}
    </div>
  );
};

export default Character;
