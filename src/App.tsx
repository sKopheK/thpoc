import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { getCharacter, getEquipment } from "./apiRequests";
import "./App.scss";
import CharacterModel from "./components/Character/CharacterModel";
import EquipmentModel from "./components/Equipment/EquipmentModel";
import Error from "./components/Error/Error";
import Ctx, { AppCtx } from "./Ctx";

const App = (): JSX.Element => {
    const [ character, setCharacter ] = useState<CharacterModel | null>(null);
    const [ equipment, setEquipment ] = useState([] as EquipmentModel[]);

    const [ refreshState, setRefreshState ] = useState(false);
    const refresh = () => setRefreshState(curr => !curr);
    const state: AppCtx = {
        character,
        equipment,
        refresh,
    }

    const [ isFetchError, setFetchError ] = useState(false);

    useEffect(() => {
      getCharacter()
        .then(data => setCharacter(data))
        .catch(() => setFetchError(true));
    }, [ refreshState ]);

    useEffect(() => {
        getEquipment()
            .then(data => setEquipment(data))
            .catch(() => setFetchError(true));
    }, [ refreshState ]);

    const links = [
        { label: 'Inventory', route: '/inventory' },
        { label: 'Store', route: '/store' },
    ];

    return (
        <div className="App">
            <nav>
                <ul>
                    {links.map(({label, route}, i) => (
                        <li key={`menu-${i}`}>
                            <NavLink to={route} className={({isActive}) => isActive ? 'active' : ''}>{label}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            {isFetchError && <Error />}
            <Ctx.Provider value={state}>
                <Outlet />
            </Ctx.Provider>
        </div>
    )
};
export default App;
