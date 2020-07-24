import React from 'react'
import avatar from '../../../../pictures/avatar.png'
import classes from './Post.module.css'


const Post = ({message, likesCount}) => {
    let state = {
        message: message
    }
    return (
        <div className = {classes.item}>
            <img src = {avatar} />
            {message}
            <div>
                <span>likes </span>
                {likesCount}
            </div>
        </div>
    )
}

export default Post