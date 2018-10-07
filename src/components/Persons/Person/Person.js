import React, { Component } from 'react';

import styles from './Person.css';

import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] componentWillMount');
  }
  
  componentDidMount() {
    console.log('[Person.js] componentDidMount');
  }

  render () {
    console.log('[Person.js] render');

    return (
      <Auxiliary>
        <p onClick={ this.props.click }>
          I'm {this.props.name} and I'm {this.props.age} years old
         </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </Auxiliary>
    )
  }
}

export default withClass(Person, styles.Person);

