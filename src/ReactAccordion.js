import React, { Component, PropTypes } from 'react';
import Header from './lib/Header';
import ContentManager from './lib/ContentManager';
import { Motion, spring } from "react-motion";

export default class ReactAccordion extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    options: PropTypes.object.isRequired,
    headerAttName: PropTypes.string.isRequired,
    itemsAttName: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = {
      data
    }
  }

  render() {
    const { headerAttName, itemsAttName } = this.props;
    const { data } = this.state;

    let _refi = 0;
    let makeHeaderRef = () => {
      return `ListHeader-${_refi}`;
    };

    let makeItemRef = () => {
      return `ListItem-${_refi}`;
    };

    return (
      <div ref="listview" className="react-accordion_outerDiv">
        <ul className="react-accordion_ul">
        {
          Object.keys(data).map((k, index) => {
          const header = data[k][headerAttName];
          const items  = data[k][itemsAttName];
          const { isReactComponent } = data[k];
          const { isOpened } = data[k];
          const { height } = data[k];
          _refi++;
          const headerRef = makeHeaderRef();
          const itemRef = makeItemRef();

          return (
            <Motion
              key={index}
              defaultStyle={{h: 0}}
              style={{h: spring(isOpened ? height : 0)}}>
              {
                ({h}) => (
                  <div>
                    <li>
                      <Header
                        ref={headerRef}
                        header={header}
                        headerIndex={index}
                        className="react-accordion_listHeader"
                        handleToggle={this.handleToggle.bind(this, index)}
                      />
                      <div
                        style={{
                          display: `block`,
                          overflow: `hidden`,
                          height:`${h}`
                          }}>
                        <ContentManager
                         ref={itemRef}
                         items={items}
                         isReactComponent={isReactComponent}
                         className="react-accordion_listItems"
                        />
                      </div>
                    </li>
                  </div>
                )
              }
            </Motion>
          );
          })
        }
        </ul>
      </div>
    );
  }

  handleToggle(headerIndex) {
    let { data } = this.state;
    const { options: { autoClapse } } = this.props;
    let dataCopy = data;

    if(autoClapse) {
      dataCopy.forEach((e, index) => {
        if(index != headerIndex) {
          e.isOpened = false;
        }
      });
    }

    dataCopy[headerIndex].isOpened = !dataCopy[headerIndex].isOpened;
    const newData = Object.assign({}, dataCopy);

    this.setState(
      newData
    )
  }
}
