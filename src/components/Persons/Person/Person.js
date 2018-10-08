import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }

  render () {
    console.log('[Person.js] render');

    return (
      <Auxiliary>
        <p onClick={ this.props.click }>
          I'm {this.props.name} and I'm {this.props.age} years old
         </p>
        <p>{this.props.children}</p>
        <input
          ref={(inp) => { this.inputElement = inp }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name} />
      </Auxiliary>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  changed: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number
};

export default withClass(Person, styles.Person);

