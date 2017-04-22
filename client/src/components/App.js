// FACEBOOK = me?fields=education,work,relationship_status,hometown,location,languages



import React from 'react';
import ProfileFeed from '../containers/profileFeed.js'
import Searchbar from '../containers/searchbar.js'
import SelectedProfile from '../containers/selectedProfile'
import _ from 'lodash';


class App extends React.Component {
render() {
    return (
      <main>
        <header>
          <div className="left-nav-items">
            <div className="blue-circle-container">
              <img src="./pics/profile_white.png" className="profile-view" alt="" />
            </div>
          </div>
          <div className="logo">
            <img className="logo-G" src="../pics/GTLogo3.png" alt="" />
          </div>
          <div className="right-nav"></div>
        </header>


        <div className="below-nav">
          <div className="left-column">
            <div>
              <div className="account-greeting-text">
                Welcome, Gil!
              </div>
              <div className="account-pic-container">
                <img className="account-pic" src="../pics/gil-pic.JPG" alt="" />
              </div>
            </div>
            <div className="account-options">
              <div className="account-options-box">Edit Profile</div>
              <div className="account-options-box">Help</div>
              <div className="account-options-box">Log Out</div>

            </div>
          </div>
          <div className="right-column">
            <div className="feed">
              <div className="gradient-back"></div>
              <Searchbar />
              <ProfileFeed />
            </div>
            <SelectedProfile />
          </div>
        </div>
      </main>
    );
  }
};


export default App;
