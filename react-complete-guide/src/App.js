import React, { Component } from 'react';
import './App.css';
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
      backgroundColor: 'White',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

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
        <p>This is really working fine.</p>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
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

export default App;
