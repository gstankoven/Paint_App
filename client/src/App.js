import React, {useState, useEffect} from 'react'
import axios from "axios"
import './App.css';
import Kanban from './components/Kanban';
import Update from './components/Update';
import Activity from './components/Activity';

function App() {

  const [updatePage, setUpdatePage] = useState(false)
  const [stock, setStock] = useState({out: [], low: [], available: []})
  const [info, setInfo] = useState([])

  //uses a get call to the api to get the initial colour availabilites
  useEffect(() => {
    axios.get('http://localhost:3001/api')
    .then(res => {
        //get the data from the API
        let data = res.data[0]
        //create variable to use for updateStock (setStock)
        let colours = {out: [], low: [], available: []}

        //add to the colours object and set it
        colours[data.Blue].push('Blue')
        colours[data.Grey].push('Grey')
        colours[data.Black].push('Black')
        colours[data.White].push('White')
        colours[data.Purple].push('Purple')
        setStock(colours)

        //get the new info for "Recent Activity"
        data = res.data[1]
        setInfo([...data])
    })

}, [updatePage])


  //chooses if the page is for updating the chart or not
  if(updatePage){

    return (
      <div className="App">
        <h1>Change Paint Availability</h1>

        {/* Update component for updating the colour availability */}
        <Update setupdate={setUpdatePage}/>
  
      </div>
    );

  }else{

    return (
      <div className="App">
        <h1>Paint Availability</h1>

        {/* Kanban chart for colour availability */}
        <Kanban stock={stock} updateStock={setStock}/>
  
        {/* Button to change paint availability */}
        <button className='kanban_button' onClick={() => {setUpdatePage(true)}}>Change Availability</button>

        {/* Recent activity */}
        <Activity info={info}/>


      </div>
    );

  }
}//End of App function

export default App;
