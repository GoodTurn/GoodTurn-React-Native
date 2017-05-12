import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/LoginPage';
import Feed from './components/Feed';
import SelectedProfile from './components/SelectedProfile';
import UserProfilePage from './components/UserProfilePage';
import UserProfileEditPage from './components/UserProfileEditPage';

const RouterComponent = () => (
  <Router>
    <Scene key="auth" hideNavBar>
      <Scene key="login" component={Login} title="Please Login" />
    </Scene>

    <Scene key="main" hideNavBar>
      <Scene key="feed" component={Feed} title="Feed" />
      <Scene key="selectedProfile" component={SelectedProfile} title="Selected Profile" />
    </Scene>

    <Scene key="profile" hideNavBar>
      <Scene key="userProfile" component={UserProfilePage} title="User Profile" />
      <Scene key="userProfileEdit" component={UserProfileEditPage} title="Edit User Profile" />
    </Scene>
  </Router>
);

export default RouterComponent;
