import React from 'react';
import classes from './Cockpit.module.css';

const cocktail = (props) => {
  const assignedClasses = [];
  let btnClass = [];

  if(props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if(props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  if(props.showPerson) {
    btnClass.push(classes.Red);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(' ')}>This is really working fine.</p>
      <button className={btnClass.join(' ')} onClick={props.toggle}>
        Toggle Persons
      </button>
    </div>
  )
};

export default cocktail;