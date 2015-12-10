import React, { Component, PropTypes } from 'react';
import ListItem from './Content';

export default class ContentManager extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    styles: PropTypes.object.isRequired
  };

  render() {
    const { items, styles } = this.props;
    return (
      <span>
      {
        [...items].map((item, index) => {
          return (
            <ListItem 
              key={index}
              item={item.paragraph}
              styles={styles}
            />
          );
        })
      }
      </span>
    );
  }
}
