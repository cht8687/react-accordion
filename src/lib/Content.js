import React, { Component, PropTypes } from 'react';


export default class Content extends Component {
   static get propTypes() {
    return {
      children: React.PropTypes.object,
      isReactComponent: React.PropTypes.bool
    };
  }

  render() {
    const { isReactComponent } = this.props;
    return (
      <span className="react-accordion_listItems">
        { isReactComponent ? this.props.children : this.props.children.title }
        <br />
      </span>
    );
  }
}
