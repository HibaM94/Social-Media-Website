import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { Home, MailOutline, NotificationsNone, PermIdentity, Search, Logout } from "@mui/icons-material";
import { Button } from "@mui/material";
import SidebarOption from "./SidebarOption/SidebarOption";
import host from '../../Utils/HostURL';

const Sidebar = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            window.localStorage.removeItem("user");
            window.localStorage.removeItem("token");
            await axios.post(`${host.URL}/logout`);
            navigate("/");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    }; 
    const handleAddCountryClick = () => {
        navigate(`/add/country`);
    };
    return (
        <div className="sidebar">
            <Link to="/home" className="sidebar__link"><SidebarOption Icon={Home} text="Home" /></Link>
            <Link to="/Search" className="sidebar__link"><SidebarOption Icon={Search} text="Search" /></Link>
            <Link to="/notifications" className="sidebar__link"><SidebarOption Icon={NotificationsNone} text="Notifications" /></Link>
            <Link to="/messenger" className="sidebar__link"><SidebarOption Icon={MailOutline} text="Messages" /></Link>
            <Link to="/profile" className="sidebar__link"><SidebarOption Icon={PermIdentity} text="Profile" /></Link>
            <Link to="/" onClick={handleLogout} className="sidebar__link"><SidebarOption Icon={Logout} text="Logout" /></Link>

            <Button className="sidebar__tweet-btn" onClick={handleAddCountryClick} variant="outlined" fullWidth>
                Add country
            </Button>
        </div>
    );
};

export default Sidebar;
