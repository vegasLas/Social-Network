import React, { Component, Suspense } from 'react';
import './App.css';
import { Route, withRouter, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import store, { AppReducersType } from "./redux/redux-store";
import Preloader from './common/Preloader';
import Navbar from './components/NavBar/Navbar';
import HeaderContainer from './components/Header/HeaderContainer';
import createSuspense from './hoc/Suspense';
import {initializeApp, ThunkType} from './redux/app-reducer'
const Login = React.lazy(() => import('./components/Login/Login'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

type PropsType =  mstp & mdtp 

class App extends Component<PropsType> {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Switch >
            <Route path = '/' exact> <Redirect to="/profile" /> </Route>
            <Route path='/profile/:userId?'
              render={createSuspense(ProfileContainer)} />
            <Route path='/login'
              render={createSuspense(Login)} />
            <Route path='/users'
              render={createSuspense(UsersContainer)} />
            <Route path='/dialogs'
              render={createSuspense(DialogsContainer)} />
          </Switch>
        </div>
      </div>
    );
  }
}
type mstp = {
  initialized: boolean
}
type mdtp = {
  initializeApp: () => void
}
const mapStateToProps = (state: AppReducersType) => ({
  initialized: state.app.initialized
})
let AppConteiner = compose(
  withRouter,
  connect<mstp, mdtp, unknown, AppReducersType>(mapStateToProps, { initializeApp })
)(App)

const MainApp = (props: any) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppConteiner />
      </Provider>
    </BrowserRouter>
  )

}

export default MainApp;
