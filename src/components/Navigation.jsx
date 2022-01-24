import { Link, useLocation } from "react-router-dom";
import "../assets/styles/Navigation.scss";
import { navLists } from '../utils/navBarOptions';

let changeActive = (event) => {
    let activeElement = document.querySelector("a.active");
    if(activeElement!==null){
        activeElement.classList.remove("active");
    }
    if(event.currentTarget!==null){
        event.currentTarget.classList.add("active");
    }
}

const Navigations = () => {
    const location = useLocation();
    let listItems = navLists.map((item, index) => {
        return <Link key={index} className={`nav-link ${location.pathname === item.path?"active":" "}`} to={item.path} onClick={changeActive}>
            {item.icon}
            <span>{item.title}</span>
        </Link>
    })
    return (
        <nav className="nav mt-2">
            {listItems}
        </nav>
    )
}

export default Navigations;