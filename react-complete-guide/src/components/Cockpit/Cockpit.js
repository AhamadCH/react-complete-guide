import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    setTimeout(() => {
      alert('Saverd data to the cluod!');
    }, 1000);

    return () => {
      console.log('[Cockpit.js] clean up work in useEffect');
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');

    return () => {
      console.log('[Cockpit.js] clean up work in 2nd useEffect');
    }
  });

  const assignedClasses = [];
  let btnClass = [];

  if(props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }

  if(props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  if(props.showPerson) {
    btnClass.push(classes.Red);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(' ')}>This is really working fine.</p>
      <button className={btnClass.join(' ')} onClick={props.toggle}>
        Toggle Persons
      </button>
    </div>
  )
};

export default React.memo(Cockpit);