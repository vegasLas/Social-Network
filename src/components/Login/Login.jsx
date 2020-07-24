import React from 'react'
import { createField, input } from '../../common/Formcontrols/FormControl'
import { required } from '../../utils/validators'
import classes from '../../common/Formcontrols/FormControl.module.css'
import { reduxForm } from 'redux-form'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {login} from '../../redux/auth-reducer'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField('Email', 'email', [required], input)}
            {createField('Password', 'password', [required], input, { type: 'password' })}
            {createField(null, 'rememberMe', [], input, { type: 'checkbox' })}
            {props.error && <div className={classes.formSummaryError}>{props.error}</div>}
            <div>   <button>Login</button> </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    let onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    
    if (props.isAuth) {
        return <Redirect to={'./profile'} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login)
