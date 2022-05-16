import React, {useState} from 'react'
import axios from "axios"
import './component.css'


function Update(props) {

    let [colour] = useState('Blue')
    let [status] = useState('out')


    const changeButton = () => {
        axios.put(`http://localhost:3001/api/update/${colour}/${status}`)
    }

    return (
        <div>
            <button className='back_button' onClick={() => {props.setupdate(false)}}>Back</button>

            <span>The paint to be changed</span>
            <div className='select'>
            <select onChange={(e) => {colour = e.target.value}} name="colours" id="colours">
                <option value="Blue">Blue</option>
                <option value="Grey">Grey</option>
                <option value="Black">Black</option>
                <option value="White">White</option>
                <option value="Purple">Purple</option>
            </select>
            </div>

            <span>The new paint's availability</span>
            <div className='select'>
            <select onChange={(e) => {status = e.target.value}} name="stock" id="stock">
                <option value="out">Out of stock</option>
                <option value="low">Running low</option>
                <option value="available">Available</option>
            </select>
            </div>

            <button onClick={() => {props.setupdate(false); changeButton()}}>Change</button>
        </div>
    );
}

export default Update;