import React from 'react'
import './Addpost.css';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';
export default function Addpost() {
  return (
    <div className='AddpostContainer'>
        <div className='postContainer'>
        <div className="addPostTop">
            <img src='/images/img1.jpg' alt='' className="addPostPic"/>
            <input placeholder="What's in your mind?" type='text' className='addPostInput'/>

        </div>
        <hr className='addPostHr'/>
        <div className="addPostBottom">
            <div className="addPostOption">
           <div className="addPostOptions">
           <InsertPhotoIcon htmlColor='green' className='addPhoto'/>
            <span className='addpostOptionText'>Add photo</span>
           </div>
           <div className="addPostOptions">
           <AddLocationAltIcon htmlColor='red' className='addPhoto'/>
            <span className='addpostOptionText'>Location</span>
           </div>
           <div className="addPostOptions">
           <LocalOfferIcon htmlColor='blue'className='addPhoto'/>
            <span className='addpostOptionText'>Tag friends</span>
           </div>
           <div className="addPostOptions">
           <LiveTvIcon htmlColor='red' className='addPhoto'/>
            <span className='addpostOptionText'>Live</span>
           </div>
           <button className='PostButton'>Post</button>
            </div>
           
        </div>
        </div>
    </div>
  )
}
