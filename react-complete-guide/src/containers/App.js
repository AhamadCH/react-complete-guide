import React, { Component } from 'react';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';
import classes from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {id: '0', name: 'Ahamad', age: 24},
        {id: '1', name: 'Arun', age: 23},
        {id: '2', name: 'Gautam', age: 25}
      ],
      showPerson: false,
      showCockpit: true,
      changeCounter: 0,
      authenticated: false
    }
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }


  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[App.js] componentDidUpdate', snapshot);
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  loginHandler = () => {
    this.setState({authenticated: true});
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

    this.setState((prevState, props) =>{
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  render() {
    let persons  = null;
    if(this.state.showPerson) {
      persons =  (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            isAuthenticated={this.state.authenticated}
          />
        </div>
      );
    }

    return (
      <Auxiliary>
          <button onClick={() => this.setState({showCockpit: false})}>Remove Cockpit</button>
          {this.state.showCockpit ? <Cockpit
            appTitle={this.props.appTitle}
            personsLength={this.state.persons.length}
            showPerson={this.state.showPerson}
            toggle={this.togglePersonHandler}
            login={this.loginHandler}
          /> : null}
          {persons}
        </Auxiliary>
    );
  }
}

export default withClass(App, classes.App);
