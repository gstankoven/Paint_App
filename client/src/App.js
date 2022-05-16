import React, {useState} from 'react'
import './App.css';
import Kanban from './components/Kanban';
import Update from './components/Update';

function App() {

  const [update, setUpdate] = useState(false)
  const [stock, setStock] = useState({out: [], low: [], available: []})

  if(update){

    return (
      <div className="App">
        <h1>Change Paint Availability</h1>

        {/* Update component for updating the colour availability */}
        <Update setupdate={setUpdate}/>
  
      </div>
    );

  }else{

    return (
      <div className="App">
        <h1>Paint Availability</h1>

        {/* Kanban chart for colour availability */}
        <Kanban stock={stock} updateStock={setStock}/>
  
        {/* Button to change paint availability */}
        <button className='kanban_button' onClick={() => {setUpdate(true)}}>Change Availability</button>
      </div>
    );

  }
}//End of App function

export default App;
