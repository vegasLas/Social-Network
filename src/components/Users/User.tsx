import React, { Props } from 'react';
import userPhoto from "../../pictures/user.png";
import { NavLink } from "react-router-dom";
import { userType } from '../../types/types';
import classes from './users.module.scss';

type PropsType = {
    user: userType
    followingProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

let User: React.FC<PropsType> = (props) => {
    let { user, followingProgress, unfollow, follow } = props
    debugger
    return (
        <div className={classes.userBlock}>
            <NavLink className={classes.userAvatar} to={'/profile/' + user.id}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto}
                    className={classes.img} />
            </NavLink>
            <div className={classes.userData}>
                <div className={classes.userName}>{user.name}</div>
                <div>{user.status}</div>
                <div>{"user.location.country"}</div>
                <div>{"user.location.city"}</div>
                {user.followed
                    ? <button disabled={followingProgress
                        .some(id => id === user.id)}
                        onClick={() => { unfollow(user.id) }}>
                        Unfollow</button>
                    : <button disabled={followingProgress
                        .some(id => id === user.id)}
                        onClick={() => { follow(user.id) }}>
                        Follow</button>}
            </div>
        </div>)
}

export default User;