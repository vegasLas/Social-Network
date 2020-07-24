import React, { Component, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import store from "./redux/redux-store";
import Preloader from './common/Preloader';
import Navbar from './components/NavBar/Navbar';
import HeaderContainer from './components/Header/HeaderContainer';
import createSuspense from './hoc/Suspense';
const Login = React.lazy(() => import('./components/Login/Login'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends Component {
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
          <Route path='/profile/:userId?'
            render={createSuspense(ProfileContainer)} />
          <Route path='/login'
            render={createSuspense(Login) } />
          <Route path='/users'
            render={createSuspense(UsersContainer) } />
          <Route path='/dialogs'
            render={createSuspense(DialogsContainer) } />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
let AppConteiner = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App)

const MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppConteiner />
      </Provider>
    </BrowserRouter>
  )

}

export default MainApp;
