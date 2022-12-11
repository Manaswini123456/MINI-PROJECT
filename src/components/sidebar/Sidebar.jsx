import React from 'react'
import "./Sidebar.scss"
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HomeIcon from '@mui/icons-material/Home';
import HouseboatIcon from '@mui/icons-material/Houseboat';
import PaymentIcon from '@mui/icons-material/Payment';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
  return (
    <div>
      <div className='sidebar'>
        <div className='top'>
            <span className='logo'>H&G</span>
        </div>
        <hr />
        <div className='center'>
            <ul>
            <p className="title">MAIN</p>
                <li>
                <DashboardIcon className='icon'/>
                <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <li>
                    <PersonOutlineIcon className='icon'/>
                    <span>Users</span>
                </li>
                <li>
                    <HomeIcon className='icon'/>
                    <span>Homestays</span>
                </li>
                <li>
                    <HouseboatIcon className='icon'/>
                    <span>Tourist Spots</span>
                </li>
                <li>
                    <PaymentIcon className='icon'/>
                    <span>Guide Payments</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <QueryStatsIcon className='icon'/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsActiveIcon className='icon'/>
                    <span>Notification</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <SystemUpdateAltIcon className='icon'/>
                    <span>System health</span>
                </li>
                <li>
                    <ManageHistoryIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsApplicationsIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AssignmentIndIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className='icon'/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className='bottom'>
            <div className="colorOption"
            onClick={() =>dispatch({type:"LIGHT"})}></div>
            <div className="colorOption"
            onClick={() =>dispatch({type:"DARK"})}></div>
            
            </div>
      </div>
    </div>
  )
}

export default Sidebar
