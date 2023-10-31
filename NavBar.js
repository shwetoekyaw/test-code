
import {Component} from "react";
import { MenuItems } from "./MenuItems";
import "./NavBarStyle.css";
class NavBar extends Component{
    render(){
        return(
            <nav className= "NavbarItems">
            <h1 className="navbar-logo">Health care</h1>
            <ul className="nav-menu">
            {MenuItems.map((items,index) => {
                return(
                    <li key={index}>
                    <a  className= {items.cName}
                    href="/">
                    <i className={items.icon}></i>{items.title}
                    </a>
                    </li>
                );
            })} 
            
            <button>Login</button>
            </ul>
            </nav>
        )
    }
}
export default NavBar;