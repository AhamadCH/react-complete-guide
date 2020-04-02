import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

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
    const classes = [];

    if(this.state.persons.length <= 2) {
      classes.push('red');
    }

    
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    if(this.state.showPerson) {
      persons =  (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)} 
              change={(event) => this.nameChangedHandler(event, person.id)} 
            />
          })}
        </div> 
      );
    }

    return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working fine.</p>
          <StyledButton alt={this.state.showPerson} onClick={this.togglePersonHandler}>
            Toggle Persons
          </StyledButton>
          {persons}
        </div>
    );
  }
}

export default App;
