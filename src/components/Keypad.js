import React, { Component } from 'react';

export default class Keypad extends Component {
  constructor (props) {
    super(props)
  }

  handlePasswordInput = () => {
    console.log('Entering password...')
  }

  render () {
    return (<input type="password" onKeyUp={this.handlePasswordInput} />)
  }
}
