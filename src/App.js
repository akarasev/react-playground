import React, { Component } from 'react';
import styles from './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: '01', name: "Max", age: 28 },
      { id: '02', name: "Alex", age: 32 },
      { id: '03', name: "Natali", age: 27 }
    ],
    showPersons: false
  }

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(p => p.id === personId);

    const person = {
      ...this.state.persons[personIndex]
    };
    
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const visible = this.state.showPersons;
    this.setState({showPersons: !visible});
  }

  deletePersonHandler = (personIndex) => {
    const items = [...this.state.persons];
    items.splice(personIndex, 1);
    this.setState({persons: items});
  }

  render() {

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      btnClass = styles.Red;
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push(styles.red);
    }

    if (this.state.persons.length <= 1) {
      classes.push(styles.bold);
    }

    return (
      <div className={styles.App}>
        <h1>Hi, I'm React App</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle persons</button>
          {persons}
      </div>
    );
  }
}

export default App;
