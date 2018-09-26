import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Alex", age: 32 }
    ]
  }

  switchNameHandler = (newName) => {
    // console.log("Switch name event");
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: newName, age: 32 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 28 },
        { name: "Alex", age: 32 }
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Aleksei!!') }>Switch name</button>
        <Person
          name={ this.state.persons[0].name }
          age={ this.state.persons[0].age }
          changed={this.nameChangedHandler}/>
        <Person
          name={ this.state.persons[1].name }
          age={ this.state.persons[1].age }
          click={ this.switchNameHandler.bind(this, 'Alex!') }>
            My hobbies: Racing
          </Person>
      </div>
    );
  }
}

export default App;
