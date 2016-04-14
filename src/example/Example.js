import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import ReactAccordion from '..';
import {
  DATA,
  OPTIONS
} from './const';

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
      />
    );
  }
}


const appRoot = document.createElement('div');
appRoot.id = 'app';
document.body.appendChild(appRoot);

render(<App data= {DATA} options={OPTIONS}/>, appRoot);
  
