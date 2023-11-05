import { Link } from "react-router-dom"

const Nav = (props) => {
    return (
        <nav>
            <ul>
                <Link to="/" className="borde-izquierdo">
                    <li>Inicio</li>
                </Link>
                <Link to="/juegos">
                    <li>Juegos</li>
                </Link>
                <Link to="/nosotros">
                    <li>Nosotros</li>
                </Link>
                <Link to="/blog">
                    <li>Blog</li>
                </Link>
                <Link to="/empleos">
                    <li>Empleos</li>
                </Link>
                <Link to="/contacto" className="borde-derecho">
                    <li>Contacto</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;