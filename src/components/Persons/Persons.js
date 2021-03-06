import React, { Component } from 'react';

import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[Persons.js] constructor', props);
  }

  componentWillMount() {
    console.log('[Persons.js] componentWillMount');
  }
  
  componentDidMount() {
    console.log('[Persons.js] componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Person.js] componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Person.js] shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Person.js] componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE Person.js] componentDidUpdate');
  }

  render () {
    console.log('[Persons.js] render');
    return this.props.persons.map((person, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        position={index}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)} />
    });
  }
}

export default Persons;
