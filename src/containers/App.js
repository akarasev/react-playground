import React, { PureComponent } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import Auxiliary from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }
  
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE App.js] shouldComponentUpdate', nextProps, nextState);
  //   return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] componentDidUpdate');
  }

  state = {
    persons: [
      { id: '01', name: "Max", age: 28 },
      { id: '02', name: "Alex", age: 32 },
      { id: '03', name: "Natali", age: 27 }
    ],
    showPersons: false,
    toggleClicked: 0,
    authenticated: false
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
    this.setState( (prevState, props) => {
      return {
        showPersons: !visible,
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  deletePersonHandler = (personIndex) => {
    const items = [...this.state.persons];
    items.splice(personIndex, 1);
    this.setState({persons: items});
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  }

  render() {
    console.log('[App.js] render');

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
    }

    return (
      <Auxiliary>
        <button onClick={() => this.setState({showPersons: true})}>
          Show persons</button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          login={this.loginHandler}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler} />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </Auxiliary>
    );
  }
}

export default withClass(App, styles.App);

