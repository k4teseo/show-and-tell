import {NavLink} from "react-router-dom";

export default function Navigation() {
    return (
        <>
            <h3>Navigation Menu</h3>
            <nav>
                <ul>
                    <li><NavLink to={`/`}>Home</NavLink></li>
                    <li><NavLink to={`/about`}>About</NavLink></li>
                    <li><NavLink to={`/resume`}>Resume</NavLink></li>
                </ul>
            </nav>
        </>
    );
}