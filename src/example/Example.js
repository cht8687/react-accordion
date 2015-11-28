import React, { Component, PropTypes } from 'react';
import ReactAccordion from '..';

let styles = {
  outerDiv: {
    overflowY: 'auto',
    outline: '1px solid #ADBCE0',
    width: '383px',
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
    width: '383px',
    height: '20px',
    background: '#3E5DDA',
    color: 'white',
    padding: '5px 0px 5px 20px'
  },

  listItems: {
    margin: '2px'
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

const DATA = [
  {
    headerName : "Section 1",
    isOpened: true,
    items : [{
      paragraph : "Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate."
    }]
  }, {
    headerName : "Section 2",
    isOpened: false,
    items : [{
      paragraph : "Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate."
    }]
  },{
    headerName : "Section 3",
    isOpened: false,
    items : [{
      paragraph : "Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate."
    }]
  },{
    headerName : "Section 4",
    isOpened: false,
    items : [{
      paragraph : "Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam. Integer ut neque. Vivamus nisi metus, molestie vel, gravida in, condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit eu ante scelerisque vulputate."
    }]
  },
];

const OPTIONS = {
  autoClapse: true,
}
  
React.render(<App data= {DATA} options={OPTIONS} />, document.body);
