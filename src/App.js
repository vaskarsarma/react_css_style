import React, { Component } from 'react';
import Person from './Person/Person';
import classes from './App.css';

/*function App() {
  return (
    <div className="App">
      <h1>Hello, Test application</h1>
    </div>
  );
}*/

class App extends Component {
  state = {
    persons: [
      { id:'sdsdsd1', name: "vaskar1", age: 41 },
      { id:'sdsdsd2', name: "vaskar2", age: 42 },
      { id:'sdsdsd3', name: "vaskar3", age: 43 }
    ],
    showPerson: false
  }

  // switcNamehHandler = (newName) => {
  //   this.setState(
  //     {
  //       persons: [
  //         { name: newName, age: 41 },
  //         { name: "vaskar2", age: 42 },
  //         { name: "vaskar3", age: 44 }
  //       ]
  //     }
  //   )
  // }

  nameChangedHandler = (event, id) => {
    const personIndex=this.state.persons.findIndex(p=>{
      return p.id===id
    });

    const person={...this.state.persons[personIndex]}

    person.name= event.target.value;

    const persons= [...this.state.persons];
    persons[personIndex]=person;

    this.setState({ persons: persons});
  }

  toggleNameHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  }

  deleteNameHandler =(personIndex) => {
    //const persons=this.state.persons.slice();
    const persons= [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  render() {
    let person= null;
    let btnclass='';

    if(this.state.showPerson){
      person=(
        <div>
            {this.state.persons.map((p,index) => {
              return <Person 
                click={this.deleteNameHandler.bind(this,index)}
                name = {p.name}
                age={p.age}
                key={p.id}
                change={(event)=> this.nameChangedHandler(event, p.id)}
                />              
            })}
            {/* <Person change={this.nameChangedHandler} name={this.state.persons[0].name} age={this.state.persons[0].age}>test</Person>
            <Person change={this.nameChangedHandler} name={this.state.persons[1].name} age={this.state.persons[1].age} />
            <Person change={this.nameChangedHandler} click={this.switcNamehHandler.bind(this, "vaskar4")} name={this.state.persons[2].name} age={this.state.persons[2].age} >Thank you.</Person> */}
          </div>
      );

      //style.backgroundColor= 'red';

      btnclass=classes.red;
    }

    const assignedClasses=[];
    if(this.state.persons.length <=2){
      assignedClasses.push( classes.red );
    }
    if(this.state.persons.length<=1){
      assignedClasses.push( classes.bold );
    }

    return (
      <div className={classes.App} >
        <h1>Hello, Test Application</h1>
        <p className={assignedClasses.join(' ')}>Testing My application</p>
        {/* Not good for performance
        <button style={style} onClick={() => this.switcNamehHandler("test2")}>Switch Person 1</button>
        {/* Bind is good for performance */}
        {/* <button style={style} onClick={this.switcNamehHandler.bind(this, "test1")}>Switch Person</button> */}
        {/* Toggle Persson Div */}
        <button className={btnclass} onClick={this.toggleNameHandler}>Toggle Person</button>
        {person}        
      </div>
    )

    //return React.createElement("div",{ className: 'App'},React.createElement("h1",{},"Hi,How are you?"));
  }
}

export default App;
