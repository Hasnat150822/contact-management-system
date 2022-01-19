import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import "../assets/styles/Navigation.scss";
let navArray = [
    {
        path:"", title:"", icon:"", class:""
    }
];

const Navigations = () => {
    return (
        <ul className="list-unstyled mt-3 d-flex">
            <li>
                <a>
                    <DashboardOutlinedIcon />
                    <span>Dashboard</span>
                </a>
            </li>
            <li>
                <a>
                    <PermContactCalendarOutlinedIcon />
                    <span>Contacts</span>
                </a>
            </li>
        </ul>
    )
}

export default Navigations;