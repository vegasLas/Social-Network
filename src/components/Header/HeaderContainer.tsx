import React, { Component } from 'react'
import { connect } from 'react-redux';
import {logout} from '../../redux/auth-reducer';
import Header from './Header';
import { AppReducersType } from '../../redux/redux-store';

export type PropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

class HeaderContainer extends Component<PropsType>{
    render () {
        return <Header 
        isAuth = {this.props.isAuth}
        login = {this.props.login}
        logout = {this.props.logout}/>
    }
}

const mapStateToProps = (state: AppReducersType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});
type mstp = {
    isAuth: boolean
    login: string | null
}
type mdtp = {
    logout: () => void
}
export default connect<mstp, mdtp, unknown, AppReducersType>(mapStateToProps, {logout}) (HeaderContainer)