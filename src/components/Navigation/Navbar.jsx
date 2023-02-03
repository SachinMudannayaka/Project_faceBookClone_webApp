import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import './navbar.css';
export default function Navbar() {
  return (
    
    <div className="navBarBox">
          
          <div className="navBarLeft">
            <span className="logo">facebook</span>
          </div>


    <div className="navBarCenter">
    <div className="searchBarBox">
    <SearchIcon className='searchicon'/>
    <input className='inputbar' placeholder='Search for your friends'/>
    </div>
    </div>
    
        <div className="navBarRight">
         <div className="navBarLinks">
            <span className='navBarLink'>HomePage</span>
            <span className='navBarLink'>Profile</span>
         </div>
        <div className="navBarIcons">
            <div className="navBarIcon"><PersonIcon/><span className='iconTag'>3</span></div>
            <div className="navBarIcon"><ChatIcon/><span className='iconTag'>5</span></div>
            <div className="navBarIcon"><SettingsIcon/><span className='iconTag'>1</span></div>
            <div className='pic'>
               <img src='/images/img1.jpg' alt='' className='Profilepic'/>
            </div>
        </div>
        </div>
    

   </div>
  )
}
