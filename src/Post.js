import React from 'react'
import "./Post.css"
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import InputOption from './InputOption';
import { Avatar } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import { forwardRef } from "react";

const Post = forwardRef(({name, description, message, photoUrl}, ref) => {

  return (
    <div ref={ref} className='post'>
      <div className="post-header">
        <Avatar src={photoUrl}>{name[0].toUpperCase()}</Avatar>
        <div className="post-info">
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
      </div>
      <div className="post-body">
        <p>{message}</p>
      </div>
      <div className="post-buttons">
        <InputOption Icon={ThumbUpOffAltIcon} title="like" color="#0074b1"/>
        <InputOption Icon={CommentIcon} title="Comment" color="#0074b1"/>
        <InputOption Icon={ShareIcon} title="Share" color="lightgreen"/>
        <InputOption Icon={SendIcon} title="Send" color="pink"/>
      </div>
    </div>
  )
})

export default Post
