import React, {useContext} from 'react';
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from 'react-router-dom'
import {DarkModeContext} from "../../context/darkModeContext";

const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext)
    return (
        <div className={'sidebar'}>
            <div className={'top'}>
                <Link to={'/'} style={{textDecoration: 'none'}}>
                    <span className={'logo'}>Vadim</span>
                </Link>

            </div>
            <hr/>
            <div className={'center'}>
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className={'icon'}/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to={'/users'} style={{textDecoration: 'none'}}>
                        <li>
                            <PersonOutlineOutlinedIcon className={'icon'}/>
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to={'/products'} style={{textDecoration: 'none'}}>
                        <li>
                            <StoreIcon className={'icon'}/>
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <CreditCardIcon className={'icon'}/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className={'icon'}/>
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <InsertChartIcon className={'icon'}/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className={'icon'}/>
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <HealthAndSafetyIcon className={'icon'}/>
                        <span>System health</span>
                    </li>
                    <li>
                        <PsychologyIcon className={'icon'}/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className={'icon'}/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountBoxIcon className={'icon'}/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className={'icon'}/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className={'bottom'}>
                <div className={'colorOption'} onClick={() => dispatch({type: 'LIGHT'})}></div>
                <div className={'colorOption'} onClick={() => dispatch({type: 'DARK'})}></div>
            </div>
        </div>
    );
};

export default Sidebar;