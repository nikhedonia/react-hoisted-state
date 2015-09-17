import React, {PropTypes,Component} from 'react'


export class State extends Component {

  static contextTypes= {
    hoistedState: PropTypes.object,
  }

  componentDidMount () {
    notify('mount');
  }

  componentWillUnmount () {
    notify('unmount');
  }

  notify (event) {
    this.context &&
    this.context.hoistedState &&
    this.context.hoistedState.set.call(
         this,
         this.props,
         event
    );
  }

  render () {
    this.notify('update');
    return <div>{this.props.children}</div>
  }
}

function hoister(visitor) {
  return {
    set:visitor
  }
}

export class Hoist extends Component {

  static childContextTypes = { hoistedState : PropTypes.object }
  static propTypes = {
    visit : PropTypes.func
  }

  getChildContext () {
    return {
      hoistedState:hoister(this.props.visit)
    }
  }

  render () {
    return React.Children.only(this.props.children);
  }

}

