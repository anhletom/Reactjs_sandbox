import React from 'react';
import Animal from './Components/Animals/Animal';
import "./App.css";

const App = () => {
  return (
    <div className="cards">
      <Animal name="Fox" img="https://source.unsplash.com/xUUZcpQlqpM"/>
      <Animal name="Bird" img="https://source.unsplash.com/RLLR0oRz16Y"/>
      <Animal name="Fish" img="https://source.unsplash.com/rEM3cK8F1pk"/>
     
    </div>
  );
};

export default App;