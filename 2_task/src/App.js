import React, {Component} from 'react';
import Animal from './Components/Animals/Animal';
import "./App.css";

class App extends Component {
  state = {
    animals: [
      {name:"Fox", img: "https://source.unsplash.com/xUUZcpQlqpM"},
      {name:"Fox", img: "https://source.unsplash.com/RLLR0oRz16Y"},
      {name:"Fox", img: "https://source.unsplash.com/rEM3cK8F1pk"}
    ]
  };

  render(){
    return (
      <div className="cards">
      <Animal 
      name={this.state.animals[0].name} 
      img={this.state.animals[0].img}
      />
      <Animal 
      name={this.state.animals[1].name} 
      img={this.state.animals[1].img}
      />
      <Animal 
      name={this.state.animals[2].name} 
      img={this.state.animals[2].img}
      />
     
    </div>
    )
  }
}


export default App;