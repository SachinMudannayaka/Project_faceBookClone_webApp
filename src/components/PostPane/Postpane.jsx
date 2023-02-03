import React from 'react';
import Addpost from '../AddPost/Addpost';
import './Postpane.css';
import Post from '../Post/Post';
export default function Postpane() {
  return (
    <div className='postPaneBox'>
    <Addpost/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    </div>
  )
}
