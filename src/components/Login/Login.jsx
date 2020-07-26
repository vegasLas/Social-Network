import React from 'react'
import { createField, input } from '../../common/Formcontrols/FormControl'
import { required } from '../../utils/validators'
import classes from '../../common/Formcontrols/FormControl.module.css'
import { reduxForm } from 'redux-form'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { login, captchaDisplayed } from '../../redux/auth-reducer'

const LoginForm = ({ handleSubmit, captcha, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], input)}
            {createField('Password', 'password', [required], input, { type: 'password' })}
            {createField(null, 'rememberMe', [], input, { type: 'checkbox' })}
            {captcha && <img src={captcha} />}
            {captcha && createField('enter symbols', 'captcha', [required], input)}
            {error && <div className={classes.formSummaryError}>{error}</div>}
            <div>   <button>Login</button> </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    let onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'./profile'} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm captcha={props.captcha} onSubmit={onSubmit} captchaDisplayed={captchaDisplayed} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
})

export default connect(mapStateToProps, { login, captchaDisplayed })(Login)
