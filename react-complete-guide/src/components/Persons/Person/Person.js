import React, { Component, createRef } from 'react';
import classes from './Person.module.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
      super(props);
      this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
      // this.inputElement.focus();
      this.inputElementRef.current.focus();
    }

    render() {
        return (
            <Auxiliary>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>
                  }
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input
                  type="text"
                  // ref={(inputEl) => { this.inputElement = inputEl}}
                  ref={this.inputElementRef}
                  onChange={this.props.change}
                  value={this.props.name}
                />
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