import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


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

    let persons = null;
    const assignedClasses = [];
    let btnClass = [classes.Button];

    if(this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    
    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    if(this.state.showPerson) {
      persons =  (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
                    <Person
                      name={person.name}
                      age={person.age}
                      click={() => this.deletePersonHandler(index)} 
                      change={(event) => this.nameChangedHandler(event, person.id)} 
                    />
                  </ErrorBoundary>
          })}
        </div> 
      );

      btnClass.push(classes.Red);
    }

    return (
        <div className={classes.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={assignedClasses.join(' ')}>This is really working fine.</p>
          <button className={btnClass.join(' ')} onClick={this.togglePersonHandler}>
            Toggle Persons
          </button>
          {persons}
        </div>
    );
  }
}

export default App;
