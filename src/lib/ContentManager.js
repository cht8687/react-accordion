import React, { Component, PropTypes } from 'react';
import ListItem from './Content';

export default class ContentManager extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    isReactComponent: PropTypes.bool
  };

  render() {
    const { items, isReactComponent } = this.props;
    return (
      <span>
      {
        [...items].map((item, index) => {
          return (
            <ListItem key={index} isReactComponent={isReactComponent}>
              {item}
            </ListItem>
          );
        })
      }
      </span>
    );
  }
}
