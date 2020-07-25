import React, { Component } from 'react'
import { getInformationProfile } from '../../redux/profile-reducer'
import Profile from './Profile'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getStatus, getUserProfile, updateStatus, setStatus, setPhoto, saveProfile } from "../../redux/profile-reducer";
import { withRouter } from 'react-router-dom'

class ProfileContainer extends Component {
    refreshProfile() {
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
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }
    render() {
        return (
            <Profile  {...this.props}
                isOwner = {!this.props.match.params.userId}
                setPhoto = {this.props.setPhoto}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                setStatus = {this.props.setStatus} 
                saveProfile = {this.props.saveProfile}/>
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
    connect(mapStateToProps, {setPhoto, updateStatus, getStatus, getUserProfile, getInformationProfile, setStatus, saveProfile }),
    withRouter)
    (ProfileContainer)