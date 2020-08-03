import React from 'react'
import { createField, input } from '../../common/Formcontrols/FormControl'
import { required } from '../../utils/validators'
import classes from '../../common/Formcontrols/FormControl.module.css'
import { reduxForm, InjectedFormProps } from 'redux-form'
import { Redirect } from 'react-router-dom'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { login, captchaDisplayed } from '../../redux/auth-reducer'
import { AppReducersType } from '../../redux/redux-store'



type LoginProsOwnProps = {
    captchaUrl: string | null
}

type FormData = {
    email: string , password: string, rememberMe: boolean, captcha: string | null
}

type FormDataKey  = Extract<keyof FormData, string>
const LoginForm: React.FC<InjectedFormProps<FormData, LoginProsOwnProps> & LoginProsOwnProps> = ({ handleSubmit, captchaUrl, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField<FormDataKey>('Email', 'email', [required], input)}
            {createField<FormDataKey>('Password', 'password', [required], input, { type: 'password' })}
            {createField<FormDataKey>(undefined, 'rememberMe', [], input, { type: 'checkbox' })}
            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && createField('enter symbols', 'captcha', [required], input)}
            {error && <div className={classes.formSummaryError}>{error}</div>}
            <div>   <button>Login</button> </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormData, LoginProsOwnProps>({ form: 'login' })(LoginForm)


const Login: React.FC<MapStateToPropsType & MapDispatchToPropsType > = ({captchaUrl, isAuth, login}) => {
    let onSubmit = (formData: FormData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (isAuth) {
        return <Redirect to={'./profile'} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state: AppReducersType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

type MapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string | null
}
type MapDispatchToPropsType = {
    login: (email: string , password: string, rememberMe: boolean, captcha: string | null) => void
    captchaDisplayed: () => void
}
type OwnType = {}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppReducersType>(mapStateToProps, { login, captchaDisplayed })(Login)
