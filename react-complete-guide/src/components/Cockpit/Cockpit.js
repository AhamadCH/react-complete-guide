import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');

    // setTimeout(() => {
    //   alert('Saverd data to the cluod!');
    // }, 1000);
    toggleBtnRef.current.click();

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
      <button
        ref={toggleBtnRef }
        className={btnClass.join(' ')}
        onClick={props.toggle}>
        Toggle Persons
      </button>
      <button onClick={props.login}>Log In</button>
    </div>
  )
};

export default React.memo(Cockpit);