import React, { Component, PropTypes } from 'react';


export default class Content extends Component {
  static propTypes = {
    item: PropTypes.string.isRequired
  };

  render() {
    const { item } = this.props;
    return (
      <span className="react-accordion_listItems">{item}<br /></span>
    );
  }
}
