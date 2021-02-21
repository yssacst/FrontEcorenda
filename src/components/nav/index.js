import { Link } from 'react-router-dom'

import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import MenuIcon from '@material-ui/icons/Menu'

import './navbar.css'

export function Navbar() {
    return (
        <nav>
            <Link to="/FrontEcorenda"><HomeIcon /><br/>Inicio</Link>
            <Link to="/FrontEcorenda/buscar"><SearchIcon /><br/>Buscar</Link>
            <Link to="/FrontEcorenda/entrar"><AccountCircleIcon /><br/>Entrar</Link>
            
        </nav>
    )
}

export function NavbarUser() {
    return (
        <nav>
            <Link to="/FrontEcorenda/user"><HomeIcon /><br/>Inicio</Link>
            <Link to="/FrontEcorenda/buscar"><SearchIcon /><br/>Buscar</Link>
            <Link to="/FrontEcorenda/menu"><MenuIcon /><br/>Menu</Link>
        </nav>
    )
}

