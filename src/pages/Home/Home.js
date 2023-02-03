import React from 'react'
import Leftpane from '../../components/LeftPane/Leftpane'
import Navbar from '../../components/Navigation/Navbar'
import Postpane from '../../components/PostPane/Postpane'
import RightPane from '../../components/RightPane/RightPane'
import './home.css';
export default function Home() {
  return (
  <div>
    <Navbar/>
    <div className='bottomContainer'>
    <Leftpane/>
    <Postpane/>
    <RightPane/>
    </div>
  </div>
    
    
  )
}
