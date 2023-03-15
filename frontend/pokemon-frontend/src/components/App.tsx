import React, {useState} from 'react';
import '../style/style.css';
import TeamCard from "./TeamCard";
import AddTrainerForm from "./AddTrainerForm";

function App() {

    const [trainer, setTrainer] = useState(false)
    return (
        <div className="App">
            <AddTrainerForm trainerAdded={setTrainer}/>
            <TeamCard trainerAdded={trainer} setTrainerAdded={setTrainer}/>

        </div>
  );
}

export default App;
