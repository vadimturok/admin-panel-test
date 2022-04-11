import React, {useContext} from 'react';
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import {LanguageOutlined, DarkModeOutlined, FullscreenExitOutlined, NotificationsNoneOutlined, ChatBubbleOutlineOutlined, ListOutlined} from "@mui/icons-material";
import {DarkModeContext} from "../../context/darkModeContext";
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = () => {
    const {darkMode,dispatch} = useContext(DarkModeContext)
    return (
        <div className={'navbar'}>
            <div className={'wrapper'}>
                <div className="search">
                    <input type="text" placeholder={'Search...'}/>
                    <SearchIcon/>
                </div>
                <div className={'items'}>
                    <div className={'item'}>
                        <LanguageOutlined className={'icon'}/>
                        English
                    </div>
                    <div className={'item'}>
                        {darkMode ? <DarkModeIcon className={'icon darkIcon'} onClick={() => dispatch({type: 'TOGGLE'})}/> :
                            <DarkModeOutlined className={'icon darkIcon'} onClick={() => dispatch({type: 'TOGGLE'})}/>
                        }
                    </div>
                    <div className={'item'}>
                        <FullscreenExitOutlined className={'icon'}/>
                    </div>
                    <div className={'item'}>
                        <NotificationsNoneOutlined className={'icon'}/>
                        <div className="counter">1</div>
                    </div>
                    <div className={'item'}>
                        <ChatBubbleOutlineOutlined className={'icon'}/>
                        <div className="counter">2</div>
                    </div>
                    <div className={'item'}>
                        <ListOutlined className={'icon'}/>
                    </div>
                    <div className={'item'}>
                        <img src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress" alt="profile_photo" className={'avatar'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;