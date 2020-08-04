import React from 'react'
import Preloader from '../../common/Preloader';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors';
import { compose } from 'redux';

import { requestUsers, follow, unfollow, FilterType } from '../../redux/usersReducer';
import Users from './UsersType';
import { userType } from '../../types/types';
import { AppReducersType } from '../../redux/redux-store';
import { connect } from 'react-redux';

type MapStatePropsType = {
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<number>
    filter: FilterType
}
type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
    unfollow: (userId: number) => void,
    follow: (userId: number) => void
}
type OwnToProps = {

}
type PropsType = MapStatePropsType & MapDispatchPropsType


class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const { currentPage, pageSize, filter } = this.props
        this.props.getUsers(currentPage, pageSize, filter)
    }
    onPageChanged = (pageNumber: number) => {
        const { pageSize, filter } = this.props;
        this.props.getUsers(pageNumber, pageSize, filter)
    }
    onFilterChange = (filter: FilterType) => {
        const { pageSize } = this.props
        this.props.getUsers(1, pageSize, filter)
    }
    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                onFilterChange={this.onFilterChange}
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
        followingProgress: getFollowingInProgress(state),
        filter: state.usersPage.filter
    }
}

export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, OwnToProps, AppReducersType>(mapStateToProps, { follow, unfollow, getUsers: requestUsers })
)(UsersContainer)