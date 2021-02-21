import { Link } from 'react-router-dom'

import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import MenuIcon from '@material-ui/icons/Menu'

import './navbar.css'

export function Navbar() {
    return (
        <nav>
            <Link to="/"><HomeIcon /><br/>Inicio</Link>
            <Link to="/buscar"><SearchIcon /><br/>Buscar</Link>
            <Link to="/entrar"><AccountCircleIcon /><br/>Entrar</Link>
            
        </nav>
    )
}

export function NavbarUser() {
    return (
        <nav>
            <Link to="/user"><HomeIcon /><br/>Inicio</Link>
            <Link to="/buscar"><SearchIcon /><br/>Buscar</Link>
            <Link to="/menu"><MenuIcon /><br/>Menu</Link>
        </nav>
    )
}

