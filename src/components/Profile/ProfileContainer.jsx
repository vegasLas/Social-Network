import React, { Component } from 'react'
import { getInformationProfile } from '../../redux/profile-reducer'
import Profile from './Profile'
import { compose } from 'redux'
import { connect } from 'react-redux'
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import { withRouter } from 'react-router-dom'

class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    render() {
        return (
            <Profile  {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus} />
        )
    }
}
let mapStateToProps = (state) => {
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userid,
        isAuth: state.auth.isAuth
    })
}

export default compose(
    connect(mapStateToProps, {updateStatus, getStatus, getUserProfile, getInformationProfile}), 
    withRouter)
    (ProfileContainer)