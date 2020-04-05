import React, { Component } from 'react';
import classes from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';


class App extends Component {
  state = {
    persons: [
      {id: '0', name: 'Ahamad', age: 24},
      {id: '1', name: 'Arun', age: 23},
      {id: '2', name: 'Gautam', age: 25}
    ],
    showPerson: false
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
  
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  render() {
    let persons  = null;
    if(this.state.showPerson) {
      persons =  (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
        <div className={classes.App}>
          <Cockpit
            persons={this.state.persons}
            showPerson={this.state.showPerson}
            toggle={this.togglePersonHandler}
          />
          {persons}
        </div>
    );
  }
}

export default App;
