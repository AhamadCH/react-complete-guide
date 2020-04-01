import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';


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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

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

      style.backgroundColor = 'red';
      style[':hover'] =  {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    return (
      
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working fine.</p>
          <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

// const App = props => {
//   const [personState, setPersonState] = useState({
//     persons: [
//       {name: 'Ahamad', age: 24},
//       {name: 'Arun', age: 23},
//       {name: 'Gautam', age: 25}
//     ]
//   });

//   const switchHandler = () => {
//     setPersonState({
//       persons: [
//         {name: 'Ahamad CH', age: 24},
//         {name: 'Arun A', age: 23},
//         {name: 'Gautam G', age: 25}
//       ]
//     })
//   }

//   // render() {
//     return (
//       <div className="App">
//         <h1>Hi, I'm a React App</h1>
//         <button onClick={switchHandler}>Switch</button>
//         <Person
//           name={personState.persons[0].name}
//           age={personState.persons[0].age}
//         />
//         <Person
//           name={personState.persons[1].name}
//           age={personState.persons[1].age}
//         />
//         <Person
//           name={personState.persons[2].name}
//           age={personState.persons[2].age}
//           onClick={switchHandler}
//         >Hobby: Talking</Person>
//       </div>
//     );
//   // }
// }

export default Radium(App);
