import React, { Component, Suspense } from 'react';
import './App.scss';
import { Route, withRouter, BrowserRouter, Switch, Redirect } from "react-router-dom";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import store, { AppReducersType } from "./redux/redux-store";
import Preloader from './common/Preloader';
import Navbar from './components/NavBar/Navbar';
import HeaderContainer from './components/Header/HeaderContainer';
import createSuspense from './hoc/Suspense';
import { initializeApp, ThunkType } from './redux/app-reducer'
const Login = React.lazy(() => import('./components/Login/Login'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

type PropsType = mstp & mdtp

const ProfileConteincerWithSuspens = createSuspense(ProfileContainer)
const LoginWithSuspens = createSuspense(Login)
const UsersContainerWithSuspens = createSuspense(UsersContainer)
const DialogsContainerWithSuspens = createSuspense(DialogsContainer)


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
        <div className="app-wrapper-content">
          <Navbar />
          <div className="main-screen">
            <Switch>
              <Route path='/' exact> <Redirect to="/profile" /> </Route>
              <Route path='/profile/:userId?'
                render={() => <ProfileConteincerWithSuspens />} />
              <Route path='/login'
                render={() => <LoginWithSuspens />} />
              <Route path='/users'
                render={() => <UsersContainerWithSuspens />} />
              <Route path='/dialogs'
                render={() => <DialogsContainerWithSuspens />} />
            </Switch>
          </div>
        </div>
        <footer className="footer">
          Copyright
        </footer>
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
let AppConteiner = compose<React.ComponentType>(
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
