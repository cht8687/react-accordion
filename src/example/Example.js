import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import ReactAccordion from '..';
import {
  DATA,
  OPTIONS
} from './const';

let styles = {
  outerDiv: {
    overflowY: 'auto',
    outline: '1px solid #ADBCE0',
    width: '410px',
  },

  ul: {
    margin: '0px',
    listStyleType: 'none',
    padding: '0'
  },

  fixedPosition: {
    position : 'fixed',
    width : '383px',
    top: '0px'
  },

  listHeader: {
    width: '390px',
    height: '20px',
    background: 'grey',
    color: 'white',
    padding: '5px 0px 5px 20px',
    marginBottom: '3px'
  },

  listItems: {
    color: 'blue'
  },
};

class App extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    options: PropTypes.object.isRequired
  };

  render() {
   const { data, options } = this.props;
    return (
      <ReactAccordion 
        data={data} 
        options={options}
        headerAttName="headerName"
        itemsAttName="items" 
        styles={styles}
      />
    );
  }
}


const appRoot = document.createElement('div');
appRoot.id = 'app';
document.body.appendChild(appRoot);

render(<App data= {DATA} options={OPTIONS}/>, appRoot);
  
