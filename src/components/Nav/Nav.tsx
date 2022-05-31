import { NavLink } from "react-router-dom";
import '../../scss/widget/btn.scss';
import './Nav.scss';

const links = [
    { label: 'Inventory', route: '/inventory' },
    { label: 'Store', route: '/store' },
];

const Nav = () => (
        <nav>
            <ul className="Menu">
                {links.map(({label, route}, i) => (
                    <li key={`menu-${i}`}>
                        <NavLink to={route} className={({isActive}) => `ui-btn${isActive ? ' is-active' : ''}`}>{label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
);

export default Nav;