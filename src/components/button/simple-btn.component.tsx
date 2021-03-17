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

  cleanUp = () => {
    const initialState = this.initializeState();
    this.setState({ ...initialState });
  }

  showRipple = (e: any) => {
    const rippleContainer = e.currentTarget;
    const size = rippleContainer.offsetWidth;
    const pos = rippleContainer.getBoundingClientRect();
    const x = e.pageX - pos.x - (size / 2);
    const y = e.pageY - pos.y - (size / 2);

    const spanStyles = { top: y + 'px', left: x + 'px', height: size + 'px', width: size + 'px' };
    const count = this.state.count + 1;
    this.setState({
      spanStyles: { ...this.state.spanStyles, [count]: spanStyles },
      count: count
    });
  }

  /* Debounce Code to call the Ripple removing function */
  callCleanUp = (cleanup: any, delay: any) => {
    return function () { }

    // return function () {
    //   clearTimeout(this.bounce);
    //   this.bounce = setTimeout(() => {
    //     cleanup();
    //   }, delay);
    // }
  }

  renderRippleSpan = () => {
    return <div></div>
    // const { showRipple = false, spanStyles = {} } = this.state;
    // const spanArray = Object.keys(spanStyles);
    // if (spanArray && spanArray.length > 0) {
    //   return (
    //     spanArray.map((key, index) => {
    //       return <span key={'spanCount_' + index} className="" style={{ ...spanStyles[key] }}></span>
    //     })
    //   )
    // } else {
    //   return null;
    // }
  }


  render() {
    const { children = null, classes = "", onClickHandler } = this.props;
    return (
      <div>
        <div ref="targetElement" className={'ripple ' + classes} onClick={onClickHandler}>
          {children}
          <div className="rippleContainer" onMouseDown={this.showRipple} onMouseUp={this.callCleanUp(this.cleanUp, 2000)}>
            {this.renderRippleSpan()}
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleBtn;