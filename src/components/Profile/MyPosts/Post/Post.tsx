import React from 'react'
import avatar from '../../../../pictures/avatar.png'
import classes from './Post.module.css'

type PropsType = {
    message: string
    likesCount: number
}
const Post: React.FC<PropsType> = ({message, likesCount}) => {
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