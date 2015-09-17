import React, {PropTypes,Component} from 'react'


export class State extends Component {

  static contextTypes= {
    hoistedState: PropTypes.object,
  }

  render () {
    this.context &&
    this.context.hoistedState &&
    this.context.hoistedState.set.call(
         this,
         this.props
    );
    return <div/>;
  }
}

function hoister(visitor) {
  return {
    set:visitor
  }
}

export class Hoist extends Component {

  static childContextTypes = { hoistedState : PropTypes.object }

  getChildContext () {
    return {
      hoistedState:hoister(this.props.match)
    }
  }

  render () {
    return <div>{this.props.children}</div>
  }

}

