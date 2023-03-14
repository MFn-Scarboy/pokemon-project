import React from 'react';
import '../style/style.css';
import TeamCard from "./TeamCard";
import AddTrainerForm from "./AddTrainerForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <AddTrainerForm/>
          <TeamCard/>

      </header>
    </div>
  );
}

export default App;
