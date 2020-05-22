import React from 'react';
import classes from "./Person.css";

const person= (props) => {
    return(
        <div className={ classes.Person}>
            <h2 onClick={props.click}>My name is {props.name} and I am {props.age} years old!!!</h2>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
            {/* <h2>My name is Vaskar Sarma and I am {Math.floor(Math.random() * 30)} years old.</h2> */}
        </div>
    );
}

export default person;