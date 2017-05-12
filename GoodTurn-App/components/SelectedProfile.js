import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';


//Components
import Header from './common/Header';
import SingleProfile from './SingleProfile';
import Nav from './Nav';
import Card from './common/Card';
import SelectedProfileSpec from './SelectedProfileSpec';
import SelectedProfileGTKY from './SelectedProfileGTKY';

class SelectedProfile extends Component {

  render() {

    const selectedProfile = this.props.profiles.selectedProfile;


    let education = "";
    let work = "";
    let relationship_status = "";
    let relation = "";
    let lived = "";
    let gtkys = "";
      if (selectedProfile) {
        if (selectedProfile.first_name) {
        education = selectedProfile.education.map((spec, i) => {
          let educSpec = {value: spec.value + " (" + spec.start + " - " + spec.end + ")"}
          return <SelectedProfileSpec
            spec={educSpec}
            key={i}
            path='https://s3-us-west-2.amazonaws.com/goodturn-pics/education2.png' />
        });
        work = selectedProfile.work.map((spec, i) => {
          let workSpec = {value: spec.value + " at " + spec.employer + " (" + spec.start + " - " + spec.end + ")"}
          return <SelectedProfileSpec
            spec={workSpec}
            key={i}
            path='https://s3-us-west-2.amazonaws.com/goodturn-pics/work.png' />
        });
        if(selectedProfile.relationship_status){
          const relationSpec = {value: selectedProfile.relationship_status}
          relationship_status = <SelectedProfileSpec
            spec={relationSpec}
            path='https://s3-us-west-2.amazonaws.com/goodturn-pics/relationship.png' />
        }
        relation = selectedProfile.relation.map((spec, i) => {
            let type = "";
            switch (spec.value) {
              case 'Pet(s)':
                if (Number(spec.quantity) === 1) {
                  type = 'Pet';
                } else {
                  type = 'Pets';
                }
                break;
              case 'Child(ren)':
                if (Number(spec.quantity) === 1) {
                  type = 'Child';
                } else {
                  type = 'Children';
                }
                break;
              case 'Sibling(s)':
                if (Number(spec.quantity) === 1) {
                  type = 'Sibling';
                } else {
                  type = 'Siblings';
                }
                break;
              default:

            }
          let relationSpec = {value: spec.quantity + " " + type}
          if (type !== "") {
            return <SelectedProfileSpec
              spec={relationSpec}
              key={i}
              path='https://s3-us-west-2.amazonaws.com/goodturn-pics/relationship.png' />
          }
        });


        lived = selectedProfile.lived.map((spec, i) => {
          return <SelectedProfileSpec
            spec={spec}
            key={i}
            path='https://s3-us-west-2.amazonaws.com/goodturn-pics/location.png' />
        });


        gtkys = selectedProfile.gtky.map((gtky, i) => {
          if (gtky) {
            return <SelectedProfileGTKY
              question={this.props.gtkyKEY[i]}
              answer={gtky}
              key={this.props.gtkyKEY[i]} />
          }
        });
      }
    }




    return (
      <View style={styles.bodyStyle} >
        <Header>
          <Image style={styles.imageStyle} source={require('../pics/GoodTurnWhite.png')} />
        </Header>
        <ScrollView>
          <Card>
            <View style={styles.containerStyle}>
              <View style={styles.containerStyle1}>
                <TouchableWithoutFeedback  onPress={() => Actions.feed()}>
                  <View style={styles.arrowContainer}>
                    <Text style={styles.arrowText}>&larr;</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
              <View style={styles.containerStyle2}>
                <Image style={styles.imageStyle2} source={{uri: selectedProfile.pic}} />
              </View>
              <View style={styles.containerStyle3}>
                <Text style={styles.textName}>
                  {selectedProfile.first_name} {selectedProfile.last_name}
                </Text>
              </View>
              <View style={styles.containerStyle4}>
                {(education === "") ? <Text>education</Text> : education}
                {(work === "") ? <Text>work</Text> : work}
                {(relationship_status === "") ? <Text>{relationship_status}</Text> : relationship_status}
                {(relation === "") ? <Text>relation</Text> : relation}
                {(lived === "") ? <Text>lived</Text> : lived}
              </View>
              <View style={styles.containerStyle5}>
                {(gtkys === "") ? <Text>gtkys</Text> : gtkys}
              </View>
            </View>
          </Card>
        </ScrollView>
        <Nav />
      </View>
    )
  }
}




const styles = {
  bodyStyle: {
    backgroundColor: '#F2EEEB',
    flex: 1,
    justifyContent: 'space-between'
  },
  imageStyle: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 35,
    width: 170,
    marginVertical: 10
  },
  imageStyle2: {
    height: 130,
    width: 130,
    borderRadius: 65
  },
  arrowContainer: {
    backgroundColor: '#597d9e',
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  arrowText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22
  },
  textName: {
    color: '#444',
    fontSize: 28
  },
  containerStyle: {
    alignItems: 'center'
  },
  containerStyle1: {
    marginVertical: 10,
    alignSelf: 'stretch',
    alignItems: 'flex-start'
  },
  containerStyle2: {
    marginVertical: 10
  },
  containerStyle3: {
    marginVertical: 10
  },
  containerStyle4: {
    marginVertical: 10,
    paddingHorizontal: 10
  },
  containerStyle5: {
    marginVertical: 10,
    alignSelf: 'stretch',
    alignItems: 'flex-start'
  }
};

function mapStateToProps(store) {
  return {
    profiles: store.profiles,
    gtkyKEY: store.gtkyKEY,
  };
}

export default connect(mapStateToProps)(SelectedProfile);
