import React, { Component } from 'react'
import Profile from './ProfileType'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getStatus, getUserProfile, updateStatus,  setPhoto, saveProfile } from "../../redux/profile-reducer";
//@ts-ignore
import { withRouter } from 'react-router-dom'
import { ProfileType, SaveProfileType } from '../../types/types'
import { AppReducersType } from '../../redux/redux-store';
import { RouteComponentProps } from 'react-router';
type PathParamsType = {
    userId: any
}

type PropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDisptchToPropsType 



class ProfileContainer extends Component<PropsType> {
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
    componentDidUpdate(prevProps: PropsType) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }
    render() {
        return (
            <Profile  {...this.props}
                isOwner={!this.props.match.params.userId}
                setPhoto={this.props.setPhoto}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                saveProfile={this.props.saveProfile} />
        )
    }
}
let mapStateToProps = (state: AppReducersType): MapStateToPropsType => {
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userid,
        isAuth: state.auth.isAuth
    })
}
type MapStateToPropsType = {
    profile: ProfileType | null,
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}
type MapDisptchToPropsType = {
    setPhoto: (photo: Blob) => void
    updateStatus: (status: string) => void
    getStatus: (userId: number) => void
    getUserProfile: (userId: number) => void
    saveProfile: (profile: SaveProfileType) => void
}
type OwnToProps = {
    nash: 'samKak'
}

export default compose(
    connect<MapStateToPropsType, MapDisptchToPropsType, OwnToProps, AppReducersType>(mapStateToProps, { setPhoto, updateStatus, getStatus, getUserProfile, saveProfile }),
    withRouter)
    (ProfileContainer)