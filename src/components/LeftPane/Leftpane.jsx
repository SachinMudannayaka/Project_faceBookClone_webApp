import React from 'react'
import './LeftPane.css'
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import Groups3Icon from '@mui/icons-material/Groups3';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function Leftpane() {
  return (
    <div className='leftPaneBox'>

      <div className="leftPaneContainer">
        <div className="leftPaneMenu">
          <li className='leftPaneMenuItem'>
          <MarkEmailUnreadIcon className='leftPaneMenuIcon'/>
          <span className='leftPaneMenu'>Chats</span>
          </li>
          <li className='leftPaneMenuItem'>
          <Groups3Icon className='leftPaneMenuIcon'/>
          <span className='leftPaneMenu'>Groups</span>
          </li>
          <li className='leftPaneMenuItem'>
          <FlagCircleIcon className='leftPaneMenuIcon'/>
          <span className='leftPaneMenu'>Events</span>
          </li>
          <li className='leftPaneMenuItem'>
          <RssFeedIcon className='leftPaneMenuIcon'/>
          <span className='leftPaneMenu'>Feed</span>
          </li>
          <li className='leftPaneMenuItem'>
          <CalendarMonthIcon className='leftPaneMenuIcon'/>
          <span className='leftPaneMenu'>Calender</span>
          </li>
          <li className='leftPaneMenuItem'>
          <AccountBalanceIcon className='leftPaneMenuIcon'/>
          <span className='leftPaneMenu'>Accounts</span>
          </li>
          <li className='leftPaneMenuItem'>
          <SportsEsportsIcon className='leftPaneMenuIcon'/>
          <span className='leftPaneMenu'>Entertaintment</span>
          </li>
          <li className='leftPaneMenuItem'>
          <NewspaperIcon className='leftPaneMenuIcon'/>
          <span className='leftPaneMenu'>News</span>
          </li>
          <li className='leftPaneMenuItem'>
          <FitnessCenterIcon className='leftPaneMenuIcon'/>
          <span className='leftPaneMenu'>Jobs</span>
          </li>
          <li className='leftPaneMenuItem'>
          <AddShoppingCartIcon className='leftPaneMenuIcon'/>
          <span className='leftPaneMenu'>Shopping</span>
          </li>
          <hr/>
          
          <div className='pagesULiked'><h3>Pages you liked</h3></div>
          <div className='pageList'>
          <li className='pageListItem'><img src='./images/img1.jpg' alt=''className='pagePic'/>
          <span className='PageName'>Lisa</span></li>
          <li className='pageListItem'><img src='./images/img1.jpg' alt=''className='pagePic'/>
          <span className='PageName'>Lisa</span></li>
          <li className='pageListItem'><img src='./images/img1.jpg' alt=''className='pagePic'/>
          <span className='PageName'>Lisa</span></li>
          <li className='pageListItem'><img src='./images/img1.jpg' alt=''className='pagePic'/>
          <span className='PageName'>Lisa</span></li>
          <li className='pageListItem'><img src='./images/img1.jpg' alt=''className='pagePic'/>
          <span className='PageName'>Lisa</span></li>
          <li className='pageListItem'><img src='./images/img1.jpg' alt=''className='pagePic'/>
          <span className='PageName'>Lisa</span></li>
          <li className='pageListItem'><img src='./images/img1.jpg' alt=''className='pagePic'/>
          <span className='PageName'>Lisa</span></li>
          <li className='pageListItem'><img src='./images/img1.jpg' alt=''className='pagePic'/>
          <span className='PageName'>Lisa</span></li>
          <li className='pageListItem'><img src='./images/img1.jpg' alt=''className='pagePic'/>
          <span>Lisa</span></li>
          </div>
        </div>
      </div>
    </div>
  )
}
