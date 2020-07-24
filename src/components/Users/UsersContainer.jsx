import React from 'react'
import Preloader from '../../common/Preloader';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { requestUsers, follow, unfollow, setCurrentPage, toggleIsFillowingProgress } from '../../redux/usersReducer';
import Users from './Users';


class UsersContainer extends React.Component {
    componentDidMount() {
        const { currentPage, pageSize } = this.props
        this.props.getUsers(currentPage, pageSize)
    }
    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize)
    }
    render () {

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

let mapStateToProps = (state) => {
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
    connect(mapStateToProps,  {follow, unfollow, setCurrentPage, toggleIsFillowingProgress, getUsers: requestUsers})
) (UsersContainer)