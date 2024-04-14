import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { Home, MailOutline, NotificationsNone, PermIdentity, Search, Logout } from "@mui/icons-material";
import { Button } from "@mui/material";
import SidebarOption from "./SidebarOption/SidebarOption";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <img src="./TrekkersIcon.jpg" alt="" className="sidebar__trekkersIcon" />
            <Link to="/home" className="sidebar__link"><SidebarOption Icon={Home} text="Home" /></Link>
            <Link to="/Search" className="sidebar__link"><SidebarOption Icon={Search} text="Search" /></Link>
            <Link to="/notifications" className="sidebar__link"><SidebarOption Icon={NotificationsNone} text="Notifications" /></Link>
            <Link to="/messenger" className="sidebar__link"><SidebarOption Icon={MailOutline} text="Messages" /></Link>
            <Link to="/profile" className="sidebar__link"><SidebarOption Icon={PermIdentity} text="Profile" /></Link>
            <Link to="/logout" className="sidebar__link"><SidebarOption Icon={Logout} text="Logout" /></Link>

            <Button className="sidebar__tweet-btn" variant="outlined" fullWidth>
                Post
            </Button>
        </div>
    );
};

export default Sidebar;
