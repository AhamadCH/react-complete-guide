import React, { Component } from 'react';
import classes from './Person.module.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component {
    render() {
        return (
            <Auxiliary>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.change} value={this.props.name}/>
            </Auxiliary>
        );
    }
};

Person.propTypes = {
  clicked: PropTypes.func,
  changed: PropTypes.func,
  age: PropTypes.number,
  name: PropTypes.string
}

export default withClass(Person, classes.Person);