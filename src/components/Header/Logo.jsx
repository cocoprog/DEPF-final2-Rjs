import { NavLink } from "react-router-dom";

export function Logo () {
    return (
        <NavLink to={'/'}>
            <img src="marca3.png" alt="logo-enio" className="logo-enio" />
        </NavLink>
    )
}