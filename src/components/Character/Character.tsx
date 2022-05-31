import React, { useEffect, useState } from "react";
import { getCharacter } from "../../apiRequests";
import CharacterModel, { CharacterModelProp, EQUIPMENT_KEY } from "./CharacterModel";
import "./Character.scss";
import Equipment from "../Equipment/Equipment";

const Character = () => {
  const [info, setInfo] = useState(null as CharacterModel | null);

  useEffect(() => {
    getCharacter().then((data: CharacterModel) => {
      setInfo(data);
    });
  }, []);

  let equipmentList: string | JSX.Element = 'No equipment';
  if (info && info[EQUIPMENT_KEY].length > 0)
  {
    equipmentList = (
      <ul>
        {info[EQUIPMENT_KEY].map(equipmentItem => <li><Equipment item={equipmentItem}></Equipment></li>)}
      </ul>
    );
  }

  return (
    <div className="Character">
      <dl>
      {info && Object.keys(info).map((key) => (
        <React.Fragment key={key}>
          <dt>{key[0].toUpperCase() + key.slice(1)}</dt>
          <dd>
            <>
              {key !== EQUIPMENT_KEY && info[key as CharacterModelProp]}
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
