import React, { Component } from "react";
import Avengers from "./Avengers";
import AddAvenger from "./AddAvenger";

class App extends Component {
  state = {
    avengers: [
      { name: "Tony", age: 30, hero: "IronMan", id: 1 },
      { name: "Thor", age: 534, hero: "Thor Odenson", id: 2 },
      { name: "Bruce", age: 33, hero: "Hulk", id: 3 }
    ]
  };

  addAvenger = avenger => {
    avenger.id = Math.random();
    console.log(avenger.id);
    let avengers = [...this.state.avengers, avenger];
    this.setState({
      avengers: avengers
    });
  };

  deleteAvenger = id => {
    let avengers = this.state.avengers.filter(avenger => {
      return avenger.id !== id;
    });
    this.setState({
      avengers: avengers
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Practice React app</h1>
        <p>Welcome :)</p>
        <Avengers
          deleteAvenger={this.deleteAvenger}
          avengers={this.state.avengers}
        />
        <AddAvenger addAvenger={this.addAvenger} />
      </div>
    );
  }
}

export default App;
