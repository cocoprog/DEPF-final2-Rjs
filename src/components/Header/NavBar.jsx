import { NavLink } from "react-router-dom";

export function NavBar () {
    return(
            <nav className="nav-container">
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink to={'/'} className="nav-link">HOME</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/category/zapato'} className="nav-link">ZAPATOS</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/category/bota'} className="nav-link">BOTAS</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'contacto'} className="nav-link">CONTACTO</NavLink>
                    </li>
                </ul>
            </nav>
    )
}