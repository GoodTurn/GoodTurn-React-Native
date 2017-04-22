import React from 'react';
import { connect } from 'react-redux';
import SingleProfile from '../components/singleProfile';
import { getFeed } from '../actions/action_feed';
import { bindActionCreators } from 'redux';
import { selectProfile } from '../actions/action_selectProfile';

class ProfileFeed extends React.Component {
  componentDidMount() {
    const getFeed = this.props.getFeed;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        getFeed(position.coords.latitude, position.coords.longitude);



      }, function (error) {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
          case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
          default:
            //good to go!
        }
      });
    } else {
        alert("Geolocation is not supported by this browser.");
    }



  }



  // {profileItems}
  render() {
    const profiles = this.props.profiles.temp;
    let profileItems;
    if(profiles) {
      profileItems = profiles.map((profile, i) => {
        return <SingleProfile
          key={profile.id}
          profile={profile}
          onProfileSelect={this.props.selectProfile}
          selectedID={this.props.selectedProfile ? this.props.selectedProfile.id : null}/>
      });
    } else {
      profileItems = "";
    }



    return (
      <div className="profile-list">
        {profileItems}
      </div>
    );
  }
};

function mapStateToProps(store) {
  return {
    profiles: store.profiles,
    selectedProfile: store.selectedProfile,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getFeed: getFeed,
    selectProfile: selectProfile,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFeed);
