import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';

import ListItem from './list-item';

class LibraryList extends Component {
  componentWillMount() {
    const listSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.dataSource = listSource.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return < ListItem library={library} />;
  }
  
  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  console.log('state', state);
  return {
    libraries: state.libraries
  };
};

export default connect(mapStateToProps)(LibraryList);
