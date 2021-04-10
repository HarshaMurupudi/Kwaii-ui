import React from 'react'

import './simple-btn.styles.scss'

interface PropType {
  children: any,
  classes: any,
  onClickHandler: (event: any) => null,
}

interface SpanStyles {
  [key: string]: any
}


interface StateType {
  spanStyles: SpanStyles,
  count: number
}

class SimpleBtn extends React.Component<PropType, StateType> {
  constructor(props: PropType) {
    super(props);

    this.state = this.initializeState();
  }

  initializeState = () => {
    return {
      spanStyles: {},
      count: 0
    }
  }

  cleanUp = () => {
    const initialState = this.initializeState();
    this.setState({ ...initialState });
  }

  showRipple = (e: any) => {
    console.log("Hit")
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

  // TODO: Use debouce to ristric clicks
  /* Debounce Code to call the Ripple removing function */
  callCleanUp = (cleanup: any, delay: any) => {
    // return function () { }
  }

  handleEvent = (event: any) => {
    console.log(event)
    // if (event.type === "mousedown") {
    //   this.setState({ message: "Mouse Down" });
    // } else {
    //   this.setState({ message: "Mouse Up" });
    // }
  }

  renderRippleSpan = () => {
    // return <div></div>
    const { spanStyles = {} } = this.state;
    const spanArray = Object.keys(spanStyles);
    // const testObj: { [key: string]: any } = {}
    if (spanArray && spanArray.length > 0) {
      console.log("click recieved by render ripple")
      return (
        spanArray.map((key, index) => {

          // console.log(testObj[key])
          return <span key={'spanCount_' + index} className="" style={{ ...spanStyles[key] }}></span>
        })
      )
    } else {
      console.log("empty")

      return null;
    }
  }


  render() {
    const { children = null, classes = "", onClickHandler } = this.props;
    return (
      <div>
        <div ref="targetElement" className={'ripple ' + classes} onClick={onClickHandler}>
          {children}
          <div className="rippleContainer" onMouseDown={this.showRipple}>
            {this.renderRippleSpan()}

          </div>
        </div>
        {/* <button className="btn btn-secondary" onMouseDown={this.handleEvent} onMouseUp={this.handleEvent} >
            Change Image
          </button> */}
      </div>
    );
  }
}

export default SimpleBtn;