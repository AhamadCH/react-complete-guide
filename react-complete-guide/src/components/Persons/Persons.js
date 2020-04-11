import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   if(nextProps.persons !== this.props.persons ||
  //      nextProps.changed !== this.props.changed ||
  //      nextProps.clicked !== this.props.clicked) {
  //     console.log('[Persons.js] shouldComponentUpdate');
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate', snapshot);
  }

  render() {
    return this.props.persons.map((person, index) => {
      return <Person
                name={person.name}
                age={person.age}
                click={() => this.props.clicked(index)}
                change={(event) => this.props.changed(event, person.id)}
              />
    });
  }
}

export default Persons;