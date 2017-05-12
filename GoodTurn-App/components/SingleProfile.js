import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';
import SingleProfileSpec from './singleProfileSpec';
import { selectProfile } from '../actions/action_selectProfile'

class SingleProfile extends Component {
  constructor(props) {
    super(props);
    this.selectTheProfile = this.selectTheProfile.bind(this);
  }



  selectTheProfile() {
    this.props.selectProfile(this.props.profile)
    Actions.selectedProfile();
  }


  render() {
    const { profile } = this.props;
    const specs = [];
    const educ = profile.education;
    if (educ[0]) {
      specs.push({spec: educ[0], path: 'https://s3-us-west-2.amazonaws.com/goodturn-pics/education2.png'});
    }
    const work = profile.work;
    if (work[0]) {
      specs.push({spec: {value: work[0].value + " at " + work[0].employer}, path: 'https://s3-us-west-2.amazonaws.com/goodturn-pics/work.png'});
    }
    const relation = profile.relation;
    if (profile.relationship_status) {
      specs.push({spec: {value: profile.relationship_status}, path: 'https://s3-us-west-2.amazonaws.com/goodturn-pics/relationship.png'});
    } else if (relation[0]) {
      let type = "";
      switch (relation[0].value) {
        case 'Pet(s)':
          if (Number(relation[0].quantity) === 1) {
            type = 'Pet';
          } else {
            type = 'Pets';
          }
          break;
        case 'Child(ren)':
          if (Number(relation[0].quantity) === 1) {
            type = 'Child';
          } else {
            type = 'Children';
          }
          break;
        case 'Sibling(s)':
          if (Number(relation[0].quantity) === 1) {
            type = 'Sibling';
          } else {
            type = 'Siblings';
          }
          break;
        default:

      }
      specs.push({spec: { value: relation[0].quantity + " " + type }, path: 'https://s3-us-west-2.amazonaws.com/goodturn-pics/relationship.png'});
    }
    const lived = profile.lived;
    if (lived[0]) {
      specs.push({spec: lived[0], path: 'https://s3-us-west-2.amazonaws.com/goodturn-pics/location.png'});
    }

    const renderSpecs = specs.map((spec, i) => {
      return <SingleProfileSpec
        spec={spec.spec}
        key={i}
        path={spec.path} />
    });

    const id = (this.props.selectedID === profile.id) ? "selected-profile" : "";


    return (
      <TouchableOpacity onPress={this.selectTheProfile}>
        <View style={styles.containerStyle}>
          <View style={styles.containerStyle2}>
            <View style={styles.picContainer}>
              <Image style={styles.imageStyle} source={{uri: profile.pic}} />
            </View>
            <View style={styles.containerStyle3}>
              <View style={styles.containerStyle4}>
                <Text style={styles.textName}>{profile.first_name} {profile.last_name}</Text>
                <Text style={styles.textDist}>{profile.distance}</Text>
              </View>
              <View style={styles.containerStyle5}>
                {renderSpecs}
              </View>
            </View>
          </View>
          {(profile.gtky[0] !== "") && <View style={styles.containerStyle7}>
            <Text style={styles.textQ}>Ask Me about...</Text>
            <Text style={styles.textA}>{profile.gtky[0]}</Text>
          </View>}
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = {
  containerStyle: {
    alignSelf: 'stretch',
    marginHorizontal: 10,
    marginVertical: 2,
    padding: 2,
    backgroundColor: '#fffdfb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    borderRadius: 5,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    justifyContent: 'flex-start',
  },
  imageStyle: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  picContainer: {
    flex: 1
  },
  containerStyle2: {
    flexDirection: 'row',
    alignSelf: 'stretch'
  },
  containerStyle3: {
    alignSelf: 'stretch',
    flex: 4
  },
  containerStyle4: {
    flexDirection: 'row',
    marginVertical: 5,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  containerStyle5: {
    marginLeft: 8,
    marginBottom: 10
  },
  containerStyle7: {
    marginBottom: 10,
    marginLeft: 20,
    alignSelf: 'stretch'
  },
  textName: {
    color: '#444',
    fontSize: 18
  },
  textDist: {
    color: '#aaa',
    fontSize: 12
  },
  textQ: {
    color: '#444',
    fontSize: 14
  },
  textA: {
    color: '#aaa',
    fontSize: 14,
    marginLeft: 20
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectProfile }, dispatch);
};

export default connect(null, mapDispatchToProps)(SingleProfile);
