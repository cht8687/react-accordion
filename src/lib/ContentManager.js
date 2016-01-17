import React, { Component, PropTypes } from 'react';
import ListItem from './Content';

export default class ContentManager extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    const { items } = this.props;
    return (
      <span>
      {
        [...items].map((item, index) => {
          return (
            <ListItem 
              key={index}
              item={item.paragraph}
            />
          );
        })
      }
      </span>
    );
  }
}
