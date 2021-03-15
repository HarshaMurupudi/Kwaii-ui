import React from 'react'

import './simple-btn.styles.scss'

interface PropType {
  children: any,
  classes: any,
  onClickHandler: (event: any) => null,
}

class SimpleBtn extends React.Component<PropType> {
  initializeState = () => {
    return {
      spanStyles: {},
      count: 0
    }
  }
  state = this.initializeState();
  render() {
    const { children = null, classes = "", onClickHandler } = this.props;
    return (
      <div>
        <div className={classes} onClick={onClickHandler}>
          {children}
        </div>
      </div>
    );
  }
}

export default SimpleBtn;