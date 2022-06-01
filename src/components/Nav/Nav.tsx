import { NavLink } from "react-router-dom";
import styles from './Nav.module.scss';
import stylesButton from '../../scss/widget/button.module.scss';

const links = [
    { label: 'Inventory', route: '/inventory' },
    { label: 'Store', route: '/store' },
];

const Nav = () => (
        <nav>
            <ul className={styles.base}>
                {links.map(({label, route}, i) => (
                    <li key={`menu-${i}`}>
                        <NavLink to={route} className={({isActive}) => `${stylesButton.base} ${isActive ? 'is-active' : ''}`}>{label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
);

export default Nav;