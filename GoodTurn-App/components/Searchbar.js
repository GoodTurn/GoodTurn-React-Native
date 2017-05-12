import React from 'react';
import { TextInput } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from '../actions/action_feed.js';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(term) {
    this.setState({term: term});
    this.props.search(term);
  }

  render() {
    return (
      <TextInput
        placeholder="Search profiles"
        autoCorrect={false}
        autoCapitalize="none"
        value={this.state.term}
        style={styles.inputStyle}
        onChangeText={this.onInputChange}
        placeholderTextColor="#F2EEEB"
        />
    )
  }
}

const styles = {
  inputStyle: {
    backgroundColor: '#6c93b6',
    color: 'white',
    paddingHorizontal: 5,
    paddingVertical: 3,
    alignSelf: 'stretch',
    height: 20,
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 3,
    fontSize: 14,

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ search }, dispatch);
}

export default connect(null, mapDispatchToProps)(Searchbar);
