import React from 'react';
import Paginator from "../../common/Paginator/PaginatorDemo";
import User from "./User";
import { userType } from '../../types/types';
import { FilterType } from '../../redux/usersReducer';
import UsersSearchForm from './UsersSearchForm'
type PropsType = {
    currentPage: number,
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (pageNumber: number) => void,
    users: Array<userType>,
    followingProgress: Array<number>,
    unfollow: (userId: number) => void,
    onFilterChange: (filter: FilterType) => void
    follow: (userId: number) => void
}
let Users: React.FC<PropsType> = ({ currentPage, totalUsersCount, pageSize, onFilterChange, onPageChanged, users, ...props }) => {
    return <div>
        <UsersSearchForm onFilterChange={onFilterChange} />
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