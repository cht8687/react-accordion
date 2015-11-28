# React Accordion
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/cht8687/help)

- React implementation of Accordion using React-motion.

![React Accordion](src/example/react-accordion.gif)

## Installation

### npm

```
$ npm install --save react-accordion-components
```

## Demo

[http://cht8687.github.io/react-accordion/example/](http://cht8687.github.io/accordion/example/)

## Usage

```js
<ReactAccordion 
        data={data} 
        options={options}
        headerAttName="headerName"
        itemsAttName="items" 
        styles={styles}
      />
```

## Options

#### `data`: PropTypes.array.isRequired

```js
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
```

#### `options`: PropTypes.object.isRequired

`autoClapse` indicate if close other section when new section being clicked.

```js
const OPTIONS = {
  autoClapse: true,
}

```


#### `headerAttName`: PropTypes.string.isRequired

variable name of section header in your `data` object.
In above example, it's `headerName`.

#### `itemsAttName`: PropTypes.string.isRequired

variable name which hold items data in your `data` object.
In above example, it's `items`.

#### `styles`: PropTypes.object.isRequired

```js
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
```

`outerDiv`, `ul`, `fixedPosition`, `listHeader`, `listItems` are required, you can modify the CSS to meet your needs, make your own style.

## Development

```
$ git clone git@github.com:cht8687/react-accordion.git
$ cd react-slider
$ npm install
$ webpack-dev-server
```

Then

```
open http://localhost:8080/webpack-dev-server/
```

## License

MIT