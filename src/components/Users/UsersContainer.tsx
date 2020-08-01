import React from 'react'
import Preloader from '../../common/Preloader';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors';
import { compose } from 'redux';

import { requestUsers, follow, unfollow } from '../../redux/usersReducer';
import Users from './UsersType';
import { userType } from '../../types/types';
import { AppReducersType } from '../../redux/redux-store';
import { connect, MapDispatchToProps } from 'react-redux';

type MapStatePropsType = {
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<number>
}
type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    unfollow: (userId: number) => void,
    follow: (userId: number) => void
}
type OwnToProps = {

}
type PropsType = MapStatePropsType &  MapDispatchPropsType


class UsersContainer extends React.Component <PropsType> {
    componentDidMount() {
        const { currentPage, pageSize } = this.props
        this.props.getUsers(currentPage, pageSize)
    }
    onPageChanged = (pageNumber: number) => {
        const { pageSize } = this.props;
        this.props.getUsers(pageNumber, pageSize)
    }
    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingProgress={this.props.followingProgress} />
        </>
    }
}

let mapStateToProps = (state: AppReducersType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnToProps, AppReducersType>(mapStateToProps, { follow, unfollow, getUsers: requestUsers })
)(UsersContainer)