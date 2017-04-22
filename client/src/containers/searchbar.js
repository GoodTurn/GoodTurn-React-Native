import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from '../actions/action_search.js';

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
      <div className="searchBar">
        <input className="profileSearch" placeholder="Search profiles"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ search }, dispatch);
}

export default connect(null, mapDispatchToProps)(Searchbar);
