import React from 'react'
import './post.css'
export default function Post() {
  return (
    <div className='post'>
        <div className="postContain">
            <div className="postTop">
                <img src="/images/img1.jpg" alt="" className="postImage" />
                <span className='postUserName'>Anne Marie</span>
                <span className='postTime'>5 mins ago </span>
            </div>
            <div className="postCenter">
                <div className="postCaption">
                    Hellow I'm batwoman
                </div>
                <img src="/images/img1.jpg" alt="" className="postedImg" />
            </div>
            <div className="postBottom">
                <div className="postBottonLeft">
                    <img src="/images/heart.jpg" alt="" className="reaction" />
                    <img src="/images/haha.jpg" alt="" className="reaction" />
                    <img src="/images/angry.jpg" alt="" className="reaction" />
                    <img src="/images/sad.jpg" alt="" className="reaction" />
                    <spam className='likeCount'>Batman and 210 others</spam>
                </div>
                <div className="postBottomRight">
                    <span className='commentContent'>
                        15 comments
                    </span>
                </div>
            </div>
        </div>

    </div>
  )
}
