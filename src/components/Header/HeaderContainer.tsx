import React, { Component } from 'react'
import { connect } from 'react-redux';
import {logout} from '../../redux/auth-reducer';
import Header from './Header';


class HeaderContainer extends Component {
    render () {
        return <Header 
        isAuth = {this.props.isAuth}
        login = {this.props.login}
        logout = {this.props.logout}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect (mapStateToProps, {logout}) (HeaderContainer)