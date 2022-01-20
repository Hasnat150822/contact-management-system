import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';

export const navLists = [
    { path: "/dashboard", title: "Dashboard", icon: <DashboardOutlinedIcon />, has_sub: false, subMenu: [] },
    { path: "/contacts", title: "View Contacts", icon: <PermContactCalendarOutlinedIcon />, has_sub: false, subMenu: [] },
    { path: "/addContact", title: "Add Contacts", icon: <AddIcCallOutlinedIcon />, has_sub: false, subMenu: [] }
]