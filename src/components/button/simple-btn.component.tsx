import React from 'react'

import './simple-btn.styles.scss'

class SimpleBtn extends React.Component {
  initializeState = () => {
    return {
      spanStyles: {},
      count: 0
    }
  }
  state = this.initializeState();
  render() {
    // const { children = null, classes = "", onClickHandler = null } = this.props;
    return (
      // <div className={classes} onClick={this.onClickHandler}>
      //   {children}
      // </div>

      <></>
    );
  }
}

export default SimpleBtn;