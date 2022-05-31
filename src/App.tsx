import { NavLink, Outlet } from "react-router-dom";
import "./App.scss";

const App = (): JSX.Element => {
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
            <Outlet />
        </div>
    )
};
export default App;
