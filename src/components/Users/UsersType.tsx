import React from 'react';
import Paginator from "../../common/Paginator/PaginatorDemo";
import User from "./User";
import { userType } from '../../types/types';
type PropsType = {
    currentPage: number,
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (pageNumber: number) => void,
    users: Array<userType>,
    followingProgress: Array<number>,
    unfollow: (userId: number) => void,
    follow: (userId: number) => void
}
let Users: React.FC<PropsType> = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
            totalItemsCount={totalUsersCount} pageSize={pageSize} />
        <div>
            {
                users.map(u => <User user={u}
                    followingProgress={props.followingProgress}
                    key={u.id}
                    unfollow={props.unfollow}
                    follow={props.follow}
                />
                )
            }
        </div>
    </div>
}

export default Users;